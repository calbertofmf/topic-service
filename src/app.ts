// src/app.ts
import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import compression from 'compression';

import { validate } from './middleware/validate';
import { CreateTopicSchema, UpdateTopicSchema } from './schemas/topicSchema';
import routes from './routes/topicRoute';
import { requestLogger } from './middleware/requestLoggers';
// import { errorHandler } from './middleware/errorHandler';

const app = express();

// Global Middlewares
// app.use(helmet());
// app.use(cors());
// app.use(morgan('dev'));
// app.use(compression());
app.use(express.json());
app.use(requestLogger);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', routes);
// Global Error Handler
// app.use(errorHandler);

export default app;