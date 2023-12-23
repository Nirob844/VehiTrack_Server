import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { PaperWorkValidation } from './paperWork.validation';
import { PaperWorkController } from './paperWork.controller';

const router = express.Router();

// create
router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(PaperWorkValidation.create),
  PaperWorkController.create
);

// get all
router.get('/', auth(ENUM_USER_ROLE.ADMIN), PaperWorkController.getAll);

// get single
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), PaperWorkController.getSingle);

// update single
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(PaperWorkValidation.update),
  PaperWorkController.updateSingle
);

// delete single
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  PaperWorkController.deleteSingle
);

export const PaperWorkRoutes = router;
