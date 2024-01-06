import { View, Text } from 'react-native'
import React from 'react'
import { formatDate } from '../utils/time'
import { Typography } from '../utils/typography'
import { Colors } from '../utils/colors'

const ItemSchedule = ({item}) => {
  return (
    <View style={{
      marginHorizontal: 20,
      marginVertical: 10,
    }}>
      <Text style={{
        ...Typography.headlineBold,
        marginBottom: 11,
        color: Colors.secondary
      }}>{formatDate(item.date)}</Text>
      <View style={{
        height: 113,
        borderRadius: 10,
        borderLeftWidth: 10,
        borderColor: "#FCA34D",
        width: '100%',
        justifyContent:'space-around',
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
      }}>
        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
          <Text style={{...Typography.subheadBold, color: Colors.secondary}}>{item.course_id.courseName}</Text>
          <Text style={{...Typography.textBold, color: Colors.secondary}}>{item.time}</Text>
        </View>
        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
          <Text style={{...Typography.textRegular, color: '#524B6B' }}>{item.location}</Text>
          <Text style={{...Typography.textRegular,color: '#524B6B' }}>Mã Môn: {item.course_id.courseCode}</Text>
        </View>
        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
          <Text style={{...Typography.textRegular,color: '#524B6B' }}>Lớp: {item.course_id.class}</Text>
          <Text style={{...Typography.textRegular,color: '#524B6B' }}>GV: {item.course_id.instructor}</Text>
        </View>
      </View>
    </View>
  )
}

export default ItemSchedule