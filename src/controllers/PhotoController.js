import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');
class FotoControler {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({ errors: [error.code] });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      console.log(req.file);
      const photo = await Photo.create({ aluno_id, originalname, filename });

      return res.json(photo);
    });
  }
}

export default new FotoControler();
