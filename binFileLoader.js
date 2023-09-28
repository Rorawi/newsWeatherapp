import * as tf from '@tensorflow/tfjs';


export async function fetchBinFiles() {
    try {
      const binFile1 = await tf.fetch('./newsAppWithAI/binfiles');
    //   const binFile2 = await tf.fetch('file:///path/to/your/binfile2.bin');
      // Load more bin files as needed
      return [binFile1]; // Return the loaded bin files
    } catch (error) {
      console.error('Error loading bin files:', error);
      return null;
    }
  }
  