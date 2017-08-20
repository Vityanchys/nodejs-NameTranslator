import { translate } from '../services';

export default (req, res, next) => {
  console.log(req);
  translate(req)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      next(error);
    })
}
