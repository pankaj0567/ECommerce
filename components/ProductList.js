import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductFlatList from './ProductFlatList';


const ProductList = (props)=> {
    console.log(props.products);
     //const [product,setProduct] = useState([]);
    // const [product,setProduct] = useState([
    //     {
    //         productId : '1',
    //         productName : 'Bike',
    //         productDescription : 'Sport bike is very famous bike for ricing',
    //         productImage : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    //     },
    //     {
    //         productId : '2',
    //         productName : 'Car',
    //         productDescription : 'Sport bike is very famous bike for ricing',
    //         productImage : 'https://i1.adis.ws/i/canon/EOS-r5_Martin_Bissig_Lifestyle_hero-e90f9dd2-be19-11ea-b23c-8c04ba195b5f?w=100%&sm=aspect&aspect=16:9&qlt=80&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)'
    //     },
    //     {
    //         productId : '3',
    //         productName : 'Camera',
    //         productDescription : 'Sport bike is very famous bike for ricing',
    //         productImage : 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg'
    //     }
    // ]);

    // setProduct(p=>[...p,
    //     {
    //         productId : '4',
    //         productName : 'Camera',
    //         productDescription : 'Sport bike is very famous bike for ricing',
    //         productImage : 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg'
    //     }
    // ]);

    // useEffect(() => {    
    //     // if(props.products)
    //     // {
    //     //     setProduct(p=>[...p,props.products]);
    //     // }    
    // });
    
    

  return (
    <View>
        <View style={{marginTop:50}}>
            <Button 
                title="Add new product"
                onPress={()=>{props.onClick()}}
            />
        </View>
        
        <ProductFlatList editProduct={props.editProducts}  deleteProducts = {props.deleteProductss} onClickV={(pp)=>{props.onClickView(pp)}} productss ={props.products}  />
    </View>
  );
}

export default ProductList;
