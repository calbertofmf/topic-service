import { Topic } from "../models/topic";
import { TopicFilter } from "../models/topicFilter";
import { TopicServiceInterface } from "./interfaces/topicServiceInterface";
import { TopicRepositoryInterface } from "./repositories/interfaces/topicRepository";

export class TopicService implements TopicServiceInterface {
  private constructor(private topicRepository: TopicRepositoryInterface) {}
  async updateTopic({
    id,
    name,
    content,
  }: {
    id: string;
    name: string;
    content: string;
  }): Promise<Topic> {
    return await this.topicRepository.update({
    id,
    name,
    content,
  });
  }
  async createTopic(topic: Topic, parentTopicId?: string): Promise<Topic> {
    if(parentTopicId){
      const filter = new TopicFilter();
      filter.id = parentTopicId;
      const topics = await this.getTopics(filter);
      topic.parentTopic = topics[0];
    }
    return await this.topicRepository.add(topic);
  }

  async getTopics(filters: TopicFilter): Promise<Topic[]> {
    return await this.topicRepository.get(filters);
  }

  static create(
    topicRepository: TopicRepositoryInterface
  ): TopicServiceInterface {
    return new TopicService(topicRepository);
  }
}
