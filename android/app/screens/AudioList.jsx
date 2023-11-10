import { View, Text, StyleSheet, ScrollView, Dimensions  } from 'react-native'
import { useEffect, Component } from 'react';
import { AudioContext } from '../context/AudioProvider';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview';
import  Screen  from './../components/Screen'
import AudioListCard from '../components/AudioListCard';
import OptionModal from '../components/OptionModal';

export class AudioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OptionModalVisible: false
    }
  }

  static contextType = AudioContext;

  layoutProvider = new LayoutProvider((i) => 'audio', (type, dimension) => {
    switch(type) {
      case 'audio':
      dimension.width = Dimensions.get('window').width;
      dimension.height = 70;
      break;
      default:
        dimension.width = 0;
        dimension.height = 0;
    };
  });

  rowRenderer = (type, item) => {
    return (
      <AudioListCard 
      title={item.filename} 
      duration={item.duration}
      onOptionPress={() => {
        console.log('press');
        this.setState({...this.state, OptionModalVisible: true });
      }}
    />
    );
  };

  render() { 
     return (
      <AudioContext.Consumer>
        {({ dataProvider})=> {
          return(
          <Screen>
            <RecyclerListView 
            dataProvider={dataProvider} 
            layoutProvider={this.layoutProvider} 
            rowRenderer={this.rowRenderer}
            />
            <OptionModal visible={this.state.OptionModalVisible}/>
          </Screen>  
       );
        }}
      </AudioContext.Consumer>
   );
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
})

export default AudioList
