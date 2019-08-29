import React, {Component} from 'react';
import {Text, View, Image, TextInput, Icon, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

const { width:WIDTH } = Dimensions.get('window')

class Profil extends React.Component{
  state={
    text:''
  }
  render(){
    return(
      <View>
        <ScrollView>
          <View style={Styles.viewstyledua}>
            <Image style={{width:35, height:35}} source={require('../image/image/previous.png')}/>
            <Text style={Styles.textStyle}>Profil, {this.state.text}</Text>
          </View>

          <View style={Styles.viewStyletiga}>
              <TouchableHighlight
                onPress={()=>{
                alert('ini TouchableHighlight ')
              }}>
                <Image style={Styles.Imgstyle} source={require('../image/image/download.jpg')}/>
              </TouchableHighlight>
          </View>

          <View style={{flexDirection:'row'}}>
              <TouchableNativeFeedback
              onPress={()=>{
                alert('TouchableNativeFeedback')
              }}>
              <Image style={Styles.icon} source={require('../image/image/user.png')}/>
              </TouchableNativeFeedback>
          
            <View style={Styles.viewStyleempat}>
              <Text style={Styles.text} > Nama</Text>
                <TextInput style={Styles.textinput}
                  placeholder=' Nama'
                  underlineColorAndroid={'transparent'}
                  onChangeText={inputan=> this.setState({text:inputan})}
                />
              <Text style={Styles.text}> Ini bukan nama pengguna atau PIN Anda.</Text>
              <Text style={Styles.text}> Nama ini akan terlihat oleh kontak WhatsApp </Text><Text> Anda.</Text>
            </View>
          </View>  

          <View style={{flexDirection:'row', paddingLeft:5 ,borderTopWidth:0.5}}>
            <TouchableOpacity
              onPress={()=>{
                alert('ini TouchableOpacity')
              }}>
              <Image style={Styles.icon} source={require('../image/image/info.png')}/>
            </TouchableOpacity>
            <View style={Styles.viewStylelima}>
              <Text style={Styles.text}>Info</Text>
                <TextInput style={Styles.textinput}
                  placeholder='Info'
                  underlineColorAndroid={'transparent'}
                  onChangeText={inputan=> this.setState({text:inputan})}
                />
            </View>
          </View>
    
          <View style={{flexDirection:'row',borderTopWidth:0.5, paddingLeft:5 }}>
            <TouchableWithoutFeedback
                onPress={()=>{
                alert('TouchableWithoutFeedback')
            }}>
              <Image style={Styles.icon} source={require('../image/image/phone.png')}/>
            </TouchableWithoutFeedback>

            <View style={Styles.viewStyleenam}>
              <Text style={Styles.text}>Telepon</Text>
              <TextInput style={Styles.textinput}
                placeholder='081573776935'
                underlineColorAndroid={'transparent'}
                onChangeText={inputan=> this.setState({text:inputan})}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profil;

const Styles= StyleSheet.create ({
  viewstyledua:{
    height:50,
    width:'100%',
    backgroundColor:'#006400',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15
  },
  textStyle:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    paddingLeft:10
  },
  viewStyletiga:{
    alignItems:'center'
  },
  viewStyleempat:{
    marginTop:5,

  },
  viewStylelima:{
    marginTop:15,
  },
  viewStyleenam:{
    marginTop:13,
  },
  Imgstyle:{
    borderRadius:160,
    width:160,
    height:160,
    marginTop:30,
    marginBottom:20,
    padding:2
  },
  text:{
    fontSize:15,
    fontFamily:'sans-serif',
  },
  textinput:{
    fontSize:18,
    width:WIDTH - 40
  },
  icon:{
    width:45,
    height:45,
    marginRight:13,
    marginTop:5
  }
})