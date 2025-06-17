import { Topic } from "../../models/topic";
import { TopicFilter } from "../../models/topicFilter";

export interface TopicServiceInterface {
    createTopic(topic: Topic): Promise<Topic>;
    getTopics(filter: TopicFilter): Promise<Topic[]>;

}