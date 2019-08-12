import React, { Component } from 'react';
import {Dimensions, View, TouchableHighlight,Text, StyleSheet, Image, TextInput} from 'react-native';
import { ImageBackground } from 'react-native';
import TagInput  from "react-native-tags";
//------------------------------------------ Visual
//import moneyIcon from "../../img/para_iconu.png";
import moneyIcon from "../../img/SmartMarket_logo.png";                 // Smart market LOGO        ------------------------------------
//import bg from "../../img/bg.png";
import SmartMarket_bg from "../../img/SmartMarket_BG.png";              // Smart market Background  ------------------------------------
//import userName from "../../img/username_button.png";
import userName from "../../img/SmartMarket_username.png";              // Smart market Username    ------------------------------------
//import passwordButton from "../../img/password_button.png";
import passwordButton from "../../img/SmartMarket_password.png";        // Smart market Password    ------------------------------------
//import loginButton from "../../img/log_in_button.png";
import loginButton from "../../img/SmartMarket_login.png";              // Smart market LOGIN       ------------------------------------
//import signupButton from "../../img/sign_up_button.png";
import signupButton from "../../img/SmartMarket_signup.png";            // Smart market Signup      ------------------------------------
import { registerRootComponent } from 'expo';
//------------------------------------------ 
//------------------------------------------  Graphs
import Plotly from 'react-native-plotly';
import { Bar } from 'react-chartjs-2';
import { LineChart, XAxis, YAxis, BarChart, Grid } from 'react-native-svg-charts'
//import Plot from 'react-plotly.js';
//------------------------------------------


var iconSize=[(961/3),(209/3)];
var userName_Size=[(728.0/3),(76.0/3)];
var login_Size= [(545/3),(118/3)];

const outterWindow = StyleSheet.create({
    outter: {
        position: "absolute",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    icon: {
        flexDirection: 'row',
        height: 350,
        paddingTop: ((Dimensions.get("window").width * 2)/ 3)-((iconSize[1]*2)/3),
        paddingLeft: (Dimensions.get("window").width / 2)-(iconSize[0]/2),
    },

    userName_css: {
        flexDirection: 'row',
        width: userName_Size[0],
        height: userName_Size[1]+15,
        paddingLeft: (Dimensions.get("window").width / 2)-(userName_Size[0]/2),
        paddingTop: 5
    },
    
    login_css: {
        flexDirection: 'row',
        width: login_Size[0],
        height: login_Size[1]+15,
        paddingLeft: (Dimensions.get("window").width / 2)-(login_Size[0]/2),
        paddingTop: 12
    },

    signup_css: {
        flexDirection: 'row',
        width: login_Size[0],
        height: login_Size[1]+15,
        paddingLeft: (Dimensions.get("window").width / 2)-(login_Size[0]/2),
        paddingTop: 14
    },

    Second_Page: {
        width:Dimensions.get.width,
        height: Dimensions.get.height,
        //paddingTop: (Dimensions.get.height / 2) - 10,
        //color: "rgb(45,40,245)"
    },
}) 

const topDiv = StyleSheet.create({
    topDiv_1: {
        height: (Dimensions.get("window").height * 5)/6,
        borderWidth: 2,
        borderColor: 'orange',
        color: 'rgb(225, 225, 229)',
        fontWeight: 'bold',
        paddingLeft: Dimensions.get("window").width / 10,
        paddingTop: Dimensions.get("window").height / 3.5,
        fontSize: Dimensions.get("window").height / 12,
    },
}) 

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            USERNAME: "",
            PASSWORD: "",
            isVisible: true,
            graphPageIs2DotVisible: true,
            marketPageIsVisible: false,
            message: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            counter: 0,
            data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ],
            fetchArrLength : 0,
        }
    }

    getMoviesFromApi = () => {
        try {
            var arr=[]
            fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&apikey=XXS6ODX9W4XTJSSW').then((response) => response.json()).then((responseJson) => {
            this.setState({fetchArrLength: responseJson.length});        
                
            /*   
                for(i=0; i <  responseJson["Time Series (5min)"].length; i++){
                    arr[i] = responseJson.movies.id[i];
                }            
            this.setState({message: (this.state.counter + 1)});
            if(this.state.counter % 5 == 0){
                this.setState({message: responseJson.movies.});
            }else if(this.state.counter % 5 == 1){
                this.setState({message: responseJson.movies.});
            }else if(this.state.counter % 5 == 2){
                this.setState({message: responseJson.movies.});
            }else if(this.state.counter % 5 == 3){
                this.setState({message: responseJson.movies.});
            }else if(this.state.counter % 5 == 4){
                this.setState({message: responseJson.movies.});
            }
            */
          }) 

         var d = new Date()
         var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
         /*
         var curSec = d.getSeconds();
         var curMin = d.getMinutes();
         var curHour = d.getHours();
         var curTime = String(curHour)+ ":" + String(curMin) + ":"+ String(curSec);
         this.setState({message: curTime});
         */
        var randInt_arr = []
        var Q= this.state.message;
        for(i=0; i<(this.state.message.length-1); i++){
            Q[i]=Q[i+1];
        }
        Q[(this.state.message.length-1)] = (Math.floor(Math.random()*100));
        this.setState({message: Q});
        }catch (error) {
          console.error(error);
        }
      }
      
    myLoadingTimer = () => {
        this.setState({ graphPageIs2DotVisible: !this.state.graphPageIs2DotVisible});
        var myTimer2 =  setTimeout(this.goMarketPage, 1000);
    }

    goMarketPage = () => {
        this.setState({ marketPageIsVisible: !this.state.marketPageIsVisible});
        var myTimer2 =  setInterval(this.getMoviesFromApi, 900);
    }

    onPress = () => {
        //this.setState({ USERNAME: "admin"});
        //this.setState({ PASSWORD: "admin"});
        if(this.state.USERNAME === "admin"){
            if(this.state.PASSWORD === "admin"){
                this.setState({ isVisible: !this.state.isVisible});  // Image or Button onClick ??
            }
        }  
        var myTimer1 =  setTimeout(this.myLoadingTimer, 1500);
    }
    
    render() {
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
        return (
            <View style={outterWindow.outter}>
                { !this.state.marketPageIsVisible ?
                    <View style={outterWindow.outter}>
                        { this.state.isVisible ? 
                        <ImageBackground source={SmartMarket_bg} style={{width: '100%', height: '100%', flex: 1 }}>
                            <View style={outterWindow.icon}>
                                <Image style={{width: iconSize[0], height: iconSize[1]}} source={moneyIcon}></Image>
                            </View>
                            <View style={outterWindow.userName_css}>
                                <ImageBackground style={{width: userName_Size[0], height: userName_Size[1]}} source={userName}>
                                    <View style={{backgroundColor: 'transparent'}}> 
                                        <TextInput onChangeText={(text) => this.setState({USERNAME: text})} placeholder="USERNAME" style={{marginLeft: (userName_Size[0]*7.3)/20, paddingTop: 3, backgroundColor: "transparent", color: "black"}}/>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={outterWindow.userName_css}>
                                <ImageBackground style={{width: userName_Size[0], height: userName_Size[1]}} source={passwordButton}>
                                    <View style={{backgroundColor: 'transparent'}}> 
                                        <TextInput onChangeText={(text) => this.setState({PASSWORD: text})} placeholder="PASSWORD" style={{marginLeft: (userName_Size[0]*7.3)/20, paddingTop: 3, backgroundColor: "transparent", color: "black"}}/>
                                    </View>
                                </ImageBackground> 
                            </View>
                            <View style={outterWindow.login_css}>
                                <TouchableHighlight onPress={this.onPress.bind()}>
                                    <Image style={{width: login_Size[0], height: login_Size[1]}} source={loginButton}></Image>
                                </TouchableHighlight>
                            </View>
                            <View style={outterWindow.signup_css}>
                                <Image style={{width: login_Size[0], height: login_Size[1]}} source={signupButton}></Image>
                            </View>
                        </ImageBackground> :
                        <ImageBackground source={SmartMarket_bg} style={{width: '100%', height: '100%', flex: 1 }}>
                            { this.state.graphPageIs2DotVisible ?  
                            <View style={outterWindow.icon}>
                                <Text style={{textAlignVertical: "center", paddingLeft: 95, color: 'black', fontWeight: 'bold', fontSize: 24, }}> Loading . .  </Text>
                            </View> : 
                            <View style={outterWindow.icon}>
                                <Text style={{textAlignVertical: "center", paddingLeft: 95, color: 'black', fontWeight: 'bold', fontSize: 24, }}> Loading . . . </Text>
                            </View> 
                            }
                        </ImageBackground>
                        }
                </View> : 
                <View style={outterWindow.outter}>
                        <Text style={{marginLeft: 20, marginTop: 25, fontSize: 16, fontWeight: "bold"}}> Amazon (AMZN) : {this.state.message[13]}</Text>
                        <View style={{marginLeft: 40, marginTop: 100}}>
                            <Text> Graph 1 </Text>
                            <View style={{flexDirection: 'row' }}>
                                <LineChart
                                style={ { height: 200, width:250 , paddingRight: 20 } }
                                data={ this.state.message }
                                formatLabel={(value, index) => index}
                                svg={{ stroke: 'rgb(134, 65, 244)', fillOpacity: 0.6, strokeLinecap: "round"}}>
                                <Grid/>
                                </LineChart>
                                <YAxis data={this.state.message}
                                contentInset={{ top: 20, bottom: 20 }}
                                svg={{
                                    fill: 'grey',
                                    fontSize: 6,
                                }}
                                numberOfTicks={10}
                                formatLabel={(value) => `${value}ºC`}/>
                            </View>
                            <Text> fetchArrLength :  {this.state.fetchArrLength} </Text>
                            <BarChart style={ { height: 200, width:250 } }
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'green', fillOpacity: 0.6 }}
                            data={ this.state.message }/>
                            <XAxis
                            style={{ marginHorizontal: 10 , width:250 }}
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'black' }}
                            />
                        </View>
                </View>                
            }
            </View>
        )
    }
}

export default Home;