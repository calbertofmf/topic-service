import express, { Router, Request, Response } from "express";
import { TopicService } from "../services/topicService";
import TopicController from "../controllers/topicController";
import { TopicDb } from "../services/repositories/topicDb";

const topicRepository = new TopicDb();
const topicService = TopicService.create(topicRepository);
const topicController = TopicController.create(topicService);
const router: Router = express.Router();
router.get("/topics", topicController.getTopics);
router.put("/topic/:id", topicController.updateTopic);
router.post("/topics", topicController.createTopic);

export default router;
