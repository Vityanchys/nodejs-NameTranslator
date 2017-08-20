import express from 'express';
import { translate } from '../controllers';
const router = express.Router();

router.post('/translate', translate);

export default router;
