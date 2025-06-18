import express, { Router, Request, Response } from "express";
import { TopicService } from "../services/topicService";
import TopicController from "../controllers/topicController";
import { TopicDb } from "../services/repositories/topicDb";
import { validate } from "../middleware/validate";
import { CreateTopicSchema, UpdateTopicSchema, FilteringTopicSchema } from '../schemas/topicSchema';
const topicRepository = new TopicDb();
const topicService = TopicService.create(topicRepository);
const topicController = TopicController.create(topicService);

const router: Router = express.Router();

router.get("/topics", validate(FilteringTopicSchema),  topicController.getTopics);
router.put("/topic/:id", validate(UpdateTopicSchema), topicController.updateTopic);
router.post("/topics", validate(CreateTopicSchema), topicController.createTopic);

export default router;
