import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import ProductView from './ProductView';



 const Home=()=> {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleView, setModalVisibleView] = useState(false);
    const [productV,setProductV] = useState();
    const [product,setProduct] = useState([
                {
                    productId : '1',
                    productName : 'Bike',
                    productDescription : 'Sport bike is very famous bike for ricing',
                    productImage : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                },
                {
                    productId : '2',
                    productName : 'Car',
                    productDescription : 'Sport bike is very famous bike for ricing',
                    productImage : 'https://i1.adis.ws/i/canon/EOS-r5_Martin_Bissig_Lifestyle_hero-e90f9dd2-be19-11ea-b23c-8c04ba195b5f?w=100%&sm=aspect&aspect=16:9&qlt=80&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)'
                },
                {
                    productId : '3',
                    productName : 'Camera',
                    productDescription : 'Sport bike is very famous bike for ricing',
                    productImage : 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg'
                }
    ]);

    const deleteProductHandler = (productId) =>{
      let ppt= product.filter(x=>x.productId !== productId);
      setProduct(p=>[...ppt])
      
    }

    const editProductHandler  = (pp) =>{
      setProductV(pp);
      closeModelHandler();
    }

    const saveProductDetailsHandler = (prod)=>{
      let f = product.filter(x=>x.productId!= prod.productId);
      if(f){
        setProduct(f);
        setProduct(p=>{
          return [...p,prod]
         });
      }


        
       // console.log(product);
        closeModelHandler();
    }

    const closeModelHandler = ()=>{
        setModalVisible(!modalVisible)
        
      }

      const closeViewModelHandler = ()=>{
        setModalVisibleView(!modalVisibleView)
      }
       
      const productView = (pp)=>{
        setProductV(pp);
        closeViewModelHandler();
      }

      

  return (
    <View>
      <ProductList  editProducts={editProductHandler} deleteProductss = {deleteProductHandler} onClickView={productView}  products = {product} onClick={closeModelHandler} />

      <Modal 
            animationType="slide"
            visible={modalVisible}
          >
           <ProductDetails  prod={productV} onCancel={closeModelHandler} saveProductDetails = {saveProductDetailsHandler}/>
      </Modal>

      <Modal 
            animationType="slide"
            visible={modalVisibleView}
          >
           <ProductView  prod={productV} onViewCancel={closeViewModelHandler}  />
      </Modal>
    
    </View>
  );
}

export default Home;