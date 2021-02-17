
import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const ProductDetails = (props)=> {
    const [productId,setProductId] = useState('')
    const [productName,setProductName] = useState('')
    const [productDescription,setProductDescription] = useState('')
    const [productImage,setProductImage] = useState('')
    
    console.log(props.prod);

    // const [employee,setEmployee] = useState({
    //     id: '',
    //     employeeName: '',
    //     employeeAge : '',
    //     employeePhoneNo : '',
    //     employeeSalary: ''
    //   });


      useEffect(() => {
        if (props.prod) {
          setProductId(props.prod.productId)
          setProductName(props.prod.productName);
          setProductDescription(props.prod.productDescription);
          setProductImage(props.prod.productImage);
        }
      }, [props.prod]);

    
  return (
        <View>
              
            <Text style={{fontWeight:'bold', textAlign:'center',fontSize:25,marginTop:20}}>Enter Employee Details</Text>
            <View >
                <Text style={{marginLeft:10,fontSize:20}}>product Id</Text>
                <TextInput style={{height: 40,backgroundColor: 'azure', fontSize: 20,width:'80%',marginLeft:10}}
                    value = {productId}
                    placeholder="Enter product Id"
                    onChangeText = {text=>setProductId(text)}
                />
                <Text style={{marginLeft:10,fontSize:20}}>product Name</Text>
                <TextInput style={{height: 40,backgroundColor: 'azure', fontSize: 20,width:'80%',marginLeft:10}}
                    value = {productName}
                    placeholder="Enter product Name"
                    onChangeText = {text=>setProductName(text)}
                />
                <Text style={{marginLeft:10,fontSize:20}}>product description</Text>
                <TextInput style={{height: 40,backgroundColor: 'azure', fontSize: 20,width:'80%',marginLeft:10}}
                    value = {productDescription}
                    placeholder="Enter product description"
                    onChangeText = {text=>setProductDescription(text)}
                />
                <Text style={{marginLeft:10,fontSize:20}}>product Image</Text>
                <TextInput style={{height: 40,backgroundColor: 'azure', fontSize: 20,width:'80%',marginLeft:10}}
                    value = {productImage}
                    placeholder="Enter product Image"
                    onChangeText = {text=>setProductImage(text)}
                />
             

                <TouchableOpacity style={{width:200, marginTop:15}} >
                        <Button title="Save product Details" onPress={()=>{ 
                            
                            props.saveProductDetails({
                                    productId : productId,
                                    productName : productName,
                                    productDescription : productDescription,
                                    productImage : productImage
                              })}} />
                </TouchableOpacity>
                <TouchableOpacity style={{width:80,marginTop:15}}  
                
                >
                       <Button title="Cancel" 
                       onPress={() => {
                        props.onCancel()
                      }}
                       />
                </TouchableOpacity>
                
            </View>
            
        </View>
  )
}


export default ProductDetails;


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