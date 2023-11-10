import { View, Text, Modal, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import color from './../misc/color'

const OptionModal = ({ visible }) => {
  return (
    <>
    <StatusBar hidden/>
    <Modal transparent visible={ visible }> 
    <View style={styles.modal}> 
     <View>
         <Text style={styles.title} numberOfLines={2}>Dynamic title of our audioDynamic title of our 
         Dynamic title of our audio audioDynamic title of our audio</Text>
         <View style={styles.optionContainer}>
            <Text style={styles.option}>Play</Text>
            <Text style={styles.option}>Adicionar a playlist</Text>
        </View> 
     </View>  
    </View>
    <View style={styles.modalBg}/>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
modal: {
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    backgroundColor: color.APP_BG,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex:2000,
},
optionContainer: {
    padding: 20,
},
title: {
    top:'1%',
    left:'1%',
    fontSize:18,
    fontWeight:'bold',
},
option: {
    fontSize: 16,
    fontWeight:'bold',
    color: color.FONT,
    paddingVertical: 10,
    letterSpacing: 1,
},
modalBg: {
    position: 'absolute',
    top:0,
    right:0,
    left:0,
    bottom:0,
    backgroundColor: color.MODAL_BG
}

})

export default OptionModal