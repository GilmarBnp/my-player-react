import { Text, View, Alert } from 'react-native';
import React, { Component, createContext } from 'react';
import * as MediaLibrary from 'expo-media-library';
import{ DataProvider } from 'recyclerlistview';

export const AudioContext = createContext();

export class AudioProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
          audioFiles: [],
          permissionError: false,
          dataProvider: new DataProvider((r1, r2) => r1 !== r2)
        }
    };

     permissionAlert = () => {
      Alert.alert('Permission Required', 'This app needs a permission to read the audio files',[{
        text: 'Allow',
        onPress: () => this.getPermission()
      },{
        text: 'Cancel',
        onPress: () => this.permissionAlert()
      }])
    };

    getAudioFiles = async () => {
      const { dataProvider, audioFiles } = this.state
      
      let media =  await MediaLibrary.getAssetsAsync({
         mediaType:'audio',
       });
       media =  await MediaLibrary.getAssetsAsync({
         mediaType:'audio',
         first: media.totalCount,
      })

        this.setState({...this.state, dataProvider: dataProvider.cloneWithRows([...audioFiles, ...media.assets]), 
          audioFiles: [...audioFiles, ...media.assets]})      
      };

    getPermission = async () => {
     // permission 
     //   {
     //   "canAskAgain": true, 
     //   "expires": "never", 
     //   "granted": false, 
     //   "status": "undetermined"}
      
      const permission = await MediaLibrary.getPermissionsAsync();
     
      if(permission.granted) {
        //we want to get all the media file
        this.getAudioFiles();
      };

      if(!permission.granted && !permission.canAskAgain) {
        this.setState({...this.state, permissionError: true})
      };

      if(!permission.granted && permission.canAskAgain) {
       const {status, canAskAgain} = await MediaLibrary.
       requestPermissionsAsync();

       if(status === 'denied' && canAskAgain) {
        // we are going to dispaly alert again, because canAskAgain are true
        this.permissionAlert()
      }

       if(status === 'granted') {
        //we want to get all the media file
        this.getAudioFiles();
       }

       if(status === 'denied' && !canAskAgain) {
        // we are going to never dispaly alert again, because canAskAgain are false
       this.setState({...this.state, permissionError: true})
      }
      
      };
      
    };

    componentDidMount() {
      this.getPermission();
    }; 
    
  render() {
   const { audioFiles, dataProvider, permissionError } = this.state
   
    if(permissionError){
        return (<View style={{flex:1, justifyContent: 'center', alignItems: 'center'
     }}>
      <Text style={{fontSize: 25, color:'black', textAlign:'center'}}>
          You haven't accept the permission</Text>
      </View>
      )}

    return (
     <AudioContext.Provider value={{audioFiles, dataProvider, permissionError }}>
      {this.props.children}
     </AudioContext.Provider>
    );
  };
};

export default AudioProvider