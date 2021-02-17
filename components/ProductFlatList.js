import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, FlatList, TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductFlatList = (props)=> {

    const deleteProduct = (productId) =>{
        Alert.alert(
            "Delete product",
            "Are you sure you want to delete product",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed")
              },
              { text: "OK", onPress: () => {props.deleteProducts(productId)} }
            ],
        )
    }


  const renderItem =(prod)=>{
    
    return (
    <View style={{borderWidth:1,marginVertical:5}}>
      <View style={styles.productStyle}>
            <View style={{flexDirection:'row'}}>
                <Text>{prod.item.productName}   </Text>
                <TouchableOpacity onPress={()=>{props.editProduct(prod.item)}}>
                <Icon name="edit" size={35} color="#900"   />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{deleteProduct(prod.item.productId)}}>
                
                    <Icon name="trash" size={35} color="#900" />
                    </TouchableOpacity>
                
            </View>

            <View >
                <Image style={{height:150,marginTop:5,width:350}} source={{uri:prod.item.productImage}} />
            </View>
            <View style={{flexDirection:'row',marginTop:5}}>
                <View>
                    <Text>{prod.item.productDescription} </Text>
                </View>

                <View>
                    <TouchableOpacity onPress={()=>{props.onClickV(prod.item)}}>
                        <Text> <Icon name="eye" size={35} color="#900" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    
  </View>
  )
  }

  return (
        <View style={{flex:1}}>
                    <FlatList 
                    data={props.productss}
                    renderItem={renderItem}
                    keyExtractor={item => item.productId}
                    />
        </View>
  );
}

export default ProductFlatList;


const styles = StyleSheet.create({
    productStyle:{
         
            marginTop:10,
            // backgroundColor:'red',
            height:250,
            width:350
            
    }
})