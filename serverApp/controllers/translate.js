import { translate } from '../services';

export default (req, res, next) => {
  translate(req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      next(error);
    })
}
