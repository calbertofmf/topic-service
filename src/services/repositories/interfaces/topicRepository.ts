import { Topic } from "../../../models/topic";
import { TopicFilter } from "../../../models/topicFilter";

export interface TopicRepositoryInterface {
     add(topic: Topic, parentTopicId?: string): Promise<Topic>; 
     update({ id, name, content }: {id: string, name: string, content: string}): Promise<Topic>; 
     get(filter: TopicFilter): Promise<Topic[]>; 
}