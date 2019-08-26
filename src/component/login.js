import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Propsis from './props'

class Login extends React.Component{
  render(){
    return(
      <View>
        <View style={{backgroundColor:'blue', width:'100%', height:70, alignItems:'center', justifyContent:'center'}}> 
         <Propsis text='Pondok News'/>
        
        </View>
        
          <View style={{borderBottomWidth:1.5}}>
          <View style={{ flexDirection:'row', marginTop:'3%', marginBottom:10}}>
              <Image style={{width:50, height:50, borderRadius:50, marginLeft:'3%'}} source={require('../image/images.jpeg')}/>
                <View style={{paddingLeft:'5%'}}>
                  <Text style={{fontSize:20}}>AL-Qur'an Dan AS-Sunah</Text>
                  <Text style={{fontSize:12}}>Prabumulih, indonesia</Text>
              </View>
          </View>
          <View style={{alignItems:'center'}}>
                <Image style={{width:300, height:180}} source={require('../image/download.jpeg')}/>
          </View>
          <Text style={{fontSize:16, paddingLeft:'3%'}}>Developer React Native</Text>
          </View>

          <View style={{borderBottomWidth:1.5}}>
          <View style={{ flexDirection:'row', marginTop:'3%', marginBottom:10}}>
              <Image style={{width:50, height:50, borderRadius:50, marginLeft:'3%'}} source={require('../image/images1.jpeg')}/>
                <View style={{paddingLeft:'5%'}}>
                  <Text style={{fontSize:20}}>Harta Riba</Text>
                  <Text style={{fontSize:12}}>Medan, indonesia</Text>
              </View>
          </View>
          <View style={{alignItems:'center'}}>
                <Image style={{width:300, height:175}} source={require('../image/images22.jpeg')}/>
          </View>
          <Text style={{fontSize:16, paddingLeft:'3%'}}>Developer React Native</Text>
          </View>
          
      </View>
    )
  }
}

export default Login;