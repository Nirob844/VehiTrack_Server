import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { ExpenseHeadValidation } from './expenseHead.validation';
import { ExpenseHeadController } from './expenseHead.controller';

const router = express.Router();

// create
router.get(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ExpenseHeadValidation.create),
  ExpenseHeadController.create
);

// get all
router.get('/', auth(ENUM_USER_ROLE.ADMIN), ExpenseHeadController.getAll);

// get single
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), ExpenseHeadController.getSingle);

// update single
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ExpenseHeadValidation.update),
  ExpenseHeadController.updateSingle
);

export const ExpenseHeadRoutes = router;
