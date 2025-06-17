import express, { Router, Request, Response } from 'express';
import { TopicService } from '../services/topicService';
import TopicController from '../controllers/topicController';

const topicService = TopicService.create();
const topicController = TopicController.create(topicService);
const router: Router = express.Router();

router.get('/topics', (req: Request, res: Response) => {
    res.json({message: 'This is the get topics route'});
});

router.post('/topics',topicController.createTopic);


export default router;