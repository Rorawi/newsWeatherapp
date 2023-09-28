// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import * as tf from '@tensorflow/tfjs';
// import { StyleSheet, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import SplashScreen from "./Components/SplashScreen";
// import AppNavigations from "./navigation/AppNavigations";
// import { Provider } from "react-redux";
// import store from "./Store/store";
// import {fetchModel}  from './model'; // Import the function to load the model
// import { fetchBinFiles } from './binFileLoader'; // Import the function to load the bin files


// export default function App() {
//   const [showScreen, setShowScreen] = useState(true);

//   // useEffect(() => {
//   //   // Load your TensorFlow.js model here
//   //   async function loadModel() {
//   //     try {
//   //       await tf.ready();
//   //       const model = await fetchModel(); // Use the function to fetch the model
//   //       // Now you can use the model for inference
//   //     } catch (error) {
//   //       console.error('Error loading model:', error);
//   //     }
//   //   }

//   //   setTimeout(() => {
//   //     setShowScreen(false);
//   //     // Load your TensorFlow.js model after the SplashScreen
//   //     loadModel();
//   //   }, 2700);
//   // }, []);

//   useEffect(() => {
//     // Load your bin files here
//     async function loadBinFiles() {
//       try {
//         await tf.ready();
//         const binFiles = await fetchBinFiles(); // Use the function to fetch the bin files
//         if (binFiles) {
//           // Now you can use the bin files as needed
//         }
//       } catch (error) {
//         console.error('Error loading bin files:', error);
//       }
//     }
  
//     // Call the function to load bin files
//     // loadBinFiles();

//       setTimeout(() => {
//       setShowScreen(false);
//       // Load your TensorFlow.js model after the SplashScreen
//     }, 2700);
//   }, []);
  

//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         {showScreen ? <SplashScreen /> : <AppNavigations />}
//         <StatusBar style="auto" />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import {bundleResourceIO, decodeJpeg} from '@tensorflow/tfjs-react-native';

// import model from "./model/model.json"

const model = require('./model/model.json');
export default function CameraScreen() {
  const cameraRef = useRef(null);
  const metadata = require('./model/metadata.json');


  // async function loadModel() {
  //   await tf.ready(); // Wait for TensorFlow.js to be ready
  //   // const model = await tf.loadGraphModel('./model/model.json');

  //   // You may need to load metadata and weights as well if required by your model
  //   await model.loadWeights('weights.bin');
  //   return model;
  // }

   const getModel = async () => {
    try {
      // wait until tensorflow is ready
      await tf.ready();
      // load the trained model
      return await tf.loadLayersModel(bundleResourceIO(model, metadata));
    } catch (error) {
      console.log('Could not load model', error);
    }
  };
  
  

  useEffect(() => {
    // loadModel();
    getModel()
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // Use 'photo' for image prediction
      // Perform image prediction using your TensorFlow.js model
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text onPress={takePicture} style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>
            Take Picture
          </Text>
        </View>
      </Camera>
    </View>
  );
}
