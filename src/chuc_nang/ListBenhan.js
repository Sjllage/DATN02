import { StyleSheet, Text, View, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AxiosIntance from '../ultil/AxiosIntance';
import Benh_an from './Benh_an';
import LinearGradient from 'react-native-linear-gradient';

const ListBenhan = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
      const getNews = async () => {
          const response = await AxiosIntance().get("benhan/get-all");
          console.log(response);
          if (response.result == true) {// lấy dữ liệu thành công 
              setdataNe(response.benhan);
              setisLoading(false);
          } else {
              ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
          }
      }
      getNews();

      return () => {

      }

  },
      []);

  let timeOut = null;
  const countDownSearch = (searchText) => {
      if(timeOut){
          clearTimeout(timeOut);
      }
      timeOut = setTimeout(() =>{
          search(searchText);
      }, 3000);
  }
  const search = async (searchText) => {
      setisLoading(true);
      const response = await AxiosIntance().get("benhan/search-by-name?name="+ searchText);
      if(response.result == true){
          setdataNe(response.product);
          setisLoading(false);
      }else{
          ToastAndroid.show("Lay du lieu that bai roi huhu", ToastAndroid.SHORT);
      }
  };
  
  return (
    <><View>
    <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
       <Pressable>
         <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
           Bệnh án
         </Text>
       </Pressable>
     </LinearGradient>
   </View>
    <View>
        <FlatList
          data={dataNe}
          renderItem={({ item }) => <Benh_an dulieu={item} navigation={navigation}/>}
          keyExtractor={item => item._id} />
      </View></>
  );
};

export default ListBenhan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#5200FF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5200FF',
    height: 200,
    width: 320,
    margin: 10,
    borderRadius: 10,
    left: 30,
  },
})