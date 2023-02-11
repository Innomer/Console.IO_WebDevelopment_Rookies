const {
  WorkerProfile,
  validateWorkerProfile,
} = require("../model/workerProfileSchema");

const addWorkerProfile = async (request, response) => {
  console.log("workerProfilecontroller => addWorkerProfile");
  console.log(request.body);
  console.log(request.file);
  const image = request.file ? request.file.filename : null;
  console.log("Image declare krne ke baad", image);

  const {
    name,
    description,
    city,
    contact,
    expertise,
    experience,
    age,
    gender,
  } = request.body;

  const workerProfile = {
    name,
    description,
    city,
    contact,
    expertise,
    experience,
    age,
    gender,
    image,
  };
  const { error } = validateWorkerProfile(workerProfile);
  if (error) {
    console.log(error.details[0].message);
    return response.status(400).send({ message: error.details[0].message });
  }

  const newWorkerProfile = new WorkerProfile({
    name,
    description,
    city,
    contact,
    expertise,
    experience,
    age,
    gender,
    image,
  });
  try {
    console.log("try");
    await newWorkerProfile.save();
    response.status(201).json(newWorkerProfile);
    console.log("Worker Profile created successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getWorkerProfiles = async (request, response) => {
  try {
    const workerProfiles = await WorkerProfile.find({});
    response.status(200).json(workerProfiles);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getWorkerProfile = async (request, response) => {
  try {
    // console.log(request.params.id);
    const workerProfile = await WorkerProfile.findOne({
      _id: request.params.id,
    });
    // const user = await User.findById(request.params.id);
    response.status(200).json(workerProfile);
    // console.log(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editWorkerProfile = async (request, response) => {
  const workerProfile = request.body;
  console.log(workerProfile);
  const editWorkerProfile = new WorkerProfile(workerProfile);
  try {
    await User.updateOne({ email: workerProfile.email }, editWorkerProfile);
    response.status(201).json(editWorkerProfile);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const deleteWorkerProfile = async (request, response) => {
  try {
    await WorkerProfile.deleteOne({ _id: request.params.id });
    response.status(201).json(editWorkerProfile);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};


module.exports = {
  addWorkerProfile,
  getWorkerProfiles,
  getWorkerProfile,
  editWorkerProfile,
  deleteWorkerProfile,
};
