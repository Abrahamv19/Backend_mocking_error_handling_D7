import  EErros from '../error/enum.js';

export default (err, req, res, next) => {
  switch (err?.code) {
    case EErros.PRODUCT_ALREADY_EXISTS:
        res.status(404).json({ Error: `${err}` });
        break
    case EErros.INVALID_TYPES_ERROR:
        res.status(404).json({ Error: `${err}` });
        break;
    case EErros.INVALID_REQUEST:
        res.status(404).json({ Error: `${err}` });
        break;
    case EErros.ADD_PRODUCT_ERR:
        res.status(404).json({ Error: `${err}` });
        break;
    default:
        res.status(500).json({ Error: `${err}` });
        break;
    }
};