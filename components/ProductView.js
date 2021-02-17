
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const ProductView = (props)=> {
    const [productId,setProductId] = useState('')
    const [productName,setProductName] = useState('')
    const [productDescription,setProductDescription] = useState('')
    const [productImage,setProductImage] = useState('')
    


    // const [employee,setEmployee] = useState({
    //     id: '',
    //     employeeName: '',
    //     employeeAge : '',
    //     employeePhoneNo : '',
    //     employeeSalary: ''
    //   });


    //   useEffect(() => {
    //     if (data) {
    //       setid(data.id)
    //       setgoal(data.value);
    //       setgoalDes(data.description);
    //       setimageUrl(data.url);
    //     }
    //   }, [data]);

    
  return (
        <View>
              
            <Text style={{fontWeight:'bold', textAlign:'center',fontSize:25,marginTop:20}}>Enter Employee Details</Text>
            <View >
                <Text style={{marginLeft:10,fontSize:20}}>product Id {props.prod.productId} </Text>
                <Text style={{marginLeft:10,fontSize:20}}>product Name : {props.prod.productName}</Text>
                
                <Text style={{marginLeft:10,fontSize:20}}>product description : {props.prod.productDescription}</Text>
                
                <Text style={{marginLeft:10,fontSize:20}}>product Image :</Text>
                
                <Image style={{height:150,marginTop:5,width:350}} source={{uri:props.prod.productImage}} />

                <TouchableOpacity style={{width:80,marginTop:15}}  
                
                >
                       <Button title="Cancel" 
                       onPress={() => {
                        props.onViewCancel()
                      }}
                       />
                </TouchableOpacity>
                
            </View>
            
        </View>
  )
}


export default ProductView;


const styles = StyleSheet.create({
    backgroundImage: {
      flex : 1,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      justifyContent: "center",
      alignItems: "stretch",
      borderRightWidth: 30,
      borderLeftWidth: 30,
      height: 50,
      borderColor: "#FFFFFF",
    }
  })