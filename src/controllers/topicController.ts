import { Request, Response } from "express";
import { TopicServiceInterface } from "../services/interfaces/topicServiceInterface";

export default class TopicController {
  constructor(private topicService: TopicServiceInterface) {}

  createTopic = async (req: Request, res: Response) => {
    const user = await this.topicService.createTopic(req.body);
    res.status(201).json(user);
  };

   getTopics = async (req: Request, res: Response) => {
    const user = await this.topicService.getTopics(req.body);
    res.status(201).json(user);
  };

  static create(topicService: TopicServiceInterface): TopicController {
    return new TopicController(topicService);
  }
}
