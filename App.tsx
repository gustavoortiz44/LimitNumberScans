import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image 
} from 'react-native'

import DocumentScanner from 'react-native-document-scanner-plugin'

const App = () => {

  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument({
      //maxNumDocuments: 2
      maxNumDocuments: 2
    })
  
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      //setScannedImage(scannedImages[0])
      setScannedImage(scannedImages[1])
      console.log(scannedImages)
    }
  }

  useEffect(() => {
    // call scanDocument on load
    scanDocument()
  }, []);



  return (
    <View>
      <Image
      resizeMode="contain"
      style={{ width: '100%', height: '100%' }}
      source={{ uri: scannedImage }}
    />
    </View>
  )
}

export default App