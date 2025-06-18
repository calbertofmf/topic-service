import { Collection, ObjectId } from "mongodb";
import { Topic } from "../../models/topic";
import { TopicFilter } from "../../models/topicFilter";
import { connectMongo } from "../../util/mongoClient";
import { TopicRepositoryInterface } from "./interfaces/topicRepository";

export class TopicDb implements TopicRepositoryInterface {
  private collectionName = "topics";

  async update({
    id,
    name,
    content,
  }: {
    id: string;
    name: string;
    content: string;
  }): Promise<Topic> {
    const collection = await this.getCollection();
    const topics = await this.get({ id, latest: true });
    if (!topics || topics.length === 0 || topics.length > 1) {
      throw new Error("Invalid topic id");
    }
    const latest = topics[0];
    const newVersion = (latest?.version || 0) + 1;
    await collection.updateOne({ id: latest.id }, { $set: { latest: false } });
    const newTopic = new Topic({
      id: latest.id,
      version: newVersion,
      name,
      content,
      parentTopic: latest.parentTopic,
    });
    return await this.add(newTopic);
  }

  async get(filter: TopicFilter): Promise<Topic[]> {
    const collection = await this.getCollection();
    const result = await collection.find<Topic>(filter).toArray();
    return result;
  }

  async add(topic: Topic): Promise<Topic> {
    const collection = await this.getCollection();
    if(!topic.id){
      topic.id = new ObjectId().toString();
    }
    const {
      createdAt,
      updatedAt,
      latest,
      name,
      content,
      parentTopic,
      version,
      id,
    } = topic;
   
    const result = collection.insertOne({
      id,
      name,
      content,
      version: version || 1,
      parentTopic,
      createdAt,
      updatedAt,
      latest,
    });
    
    if(!id){
      topic.id = (await result).insertedId.toString();
    }

    return topic;
  }

  private async getCollection(): Promise<Collection<Topic>> {
    const mongo = await connectMongo();
    mongo
      .collection(this.collectionName)
      .createIndex({ id: 1, version: 1 }, { unique: true });
    return mongo.collection(this.collectionName);
  }
}
