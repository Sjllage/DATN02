import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Benh_an from './Benh_an'

const ListBenhan = () => {
  return (
    <View>
      <FlatList
      data={dataNe}
      renderItem={({item}) => <Benh_an dulieu={item} />}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ListBenhan

const styles = StyleSheet.create({})
const dataNe = [
    {
        "id": "1",
        "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
        "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
   
  ]