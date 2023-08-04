import express from 'express';
import { t } from "@lingui/macro";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const hello = t`Hello World!`;
  // const hello ="Hello World";
  res.render('index', { title: 'Express', hello });
});

export default router;
