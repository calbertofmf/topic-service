import { Topic } from "../models/topic";
import { TopicFilter } from "../models/topicFilter";
import { TopicServiceInterface } from "./interfaces/topicServiceInterface";

export class TopicService implements TopicServiceInterface {
    private constructor(){}
    createTopic(topic: Topic): Promise<Topic> {
        throw new Error("Method not implemented.");
    }

    getTopics(filters: TopicFilter): Promise<Topic[]> {
        throw new Error("Method not implemented.");
    }
    
    static create(): TopicServiceInterface {
        return new TopicService();
    }
}