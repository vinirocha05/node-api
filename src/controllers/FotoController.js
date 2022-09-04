import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('photo');
class PhotoControler {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({ errors: [error.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        console.log(req.body);
        const foto = await Foto.create({ aluno_id, originalname, filename });

        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }
    });
  }
}

export default new PhotoControler();
