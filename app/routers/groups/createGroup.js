import { groupService } from '../../services/groupService';

export const createGroup = async (req, res, next) => {
  try {
    const { name, permissions } = req.body;

    const group = await groupService.createGroup(name, permissions);

    res.status(201).json(group);
  } catch (error) {
    next(error);
  }
};
