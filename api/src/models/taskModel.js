import taskSchema from './taskSchema.js';

// add tasj to db
export const addTask = (obj) => {
  return taskSchema(obj).save();
};

//get all the tasks

export const getTasks = () => {
  return taskSchema.find();
};

export const updateTask = (_id, type) => {
  return taskSchema.findByIdAndUpdate(_id, { type });
};

// @ids is an array
export const deleteTasks = (ids) => {
  return taskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
