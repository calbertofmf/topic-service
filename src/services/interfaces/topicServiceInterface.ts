import { Topic } from "../../models/topic";
import { TopicFilter } from "../../models/topicFilter";

export interface TopicServiceInterface {
    createTopic(topic: Topic, parentTopicId?: string): Promise<Topic>;
    updateTopic({ id, name, content }: {id: string, name: string, content: string}): Promise<Topic>;
    getTopics(filter: TopicFilter): Promise<Topic[]>;

}