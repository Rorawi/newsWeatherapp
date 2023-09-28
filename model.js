import * as tf from '@tensorflow/tfjs';

// Define the function to fetch and load the model
async function fetchModel() {
  // Specify the path to your model (adjust the path accordingly)
  const modelPath = '../assets/saved_model.tflite';

  try {
    await tf.ready();
    const model = await tf.loadGraphModel(modelPath);
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    throw error;
  }
}

export { fetchModel };

// async function fetchModel() {
//   const model = await tf.loadGraphModel('assets/saved_model.tflite'); // Replace with the correct model path
//   return model;
// }

// export { fetchModel };

