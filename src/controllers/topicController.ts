import { NextFunction, Request, Response } from "express";
import { TopicServiceInterface } from "../services/interfaces/topicServiceInterface";
import { TopicFilter } from "../models/topicFilter";
import { Topic } from "../models/topic";

export default class TopicController {
  constructor(private topicService: TopicServiceInterface) {}

  createTopic = async (req: Request, res: Response, next: NextFunction) => {
    const topic = await this.topicService.createTopic(new Topic(req.body));
    res.status(201).json(topic);
  };

  updateTopic = async (req: Request, res: Response, next: NextFunction) => {
     const { params: { id  } } = req;
    const topic = await this.topicService.updateTopic({ id, ...req.body });
    res.status(200).json(topic);
  };

  getTopics = async (req: Request, res: Response) => {
    const { query: { id, version, latest, name, content, parentTopicId  } } = req;
    const filter: TopicFilter = {
      ...(id && { id: id as string }),
      ...(version && { version: Number.parseInt(version as string) || 1 }),
      ...(latest && { latest: latest === 'true' }),
      ...(name && { name: name as string }),
      ...(content && { content: content as string }),
      ...(parentTopicId && { parentTopicId: parentTopicId as string }),
    };
    const topics = await this.topicService.getTopics(filter);
    res.status(200).json(topics);
  };

  static create(topicService: TopicServiceInterface): TopicController {
    return new TopicController(topicService);
  }
}
