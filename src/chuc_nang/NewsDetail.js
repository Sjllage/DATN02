import { ScrollView, StyleSheet, Text, View, Image, Button, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const NewsDetail = (props) => {
    const { route } = props;
    const { params } = route;
    const {dataNe, setDatene} = useState([])
    const [isLoading, setisLoading] = useState("");

    return (
        <ScrollView>
            <View style={styles.Container1}>
                <Image style={styles.hang0} source={require('../img/vector_back.png')}></Image>
            </View>
            <View>
                <Text style={styles.textTieude}>Vi khuẩn Hib hình thành thế nào</Text>
            </View>
            <View style={styles.Container1}>
                <Image style={styles.bbc} source={require('../img/banner.png')}></Image>
            </View>
            <>
                {
                    isLoading == true ?
                        <View>
                            <ActivityIndicator size='large' color='#ff00'/>
                            <Text>Loading...</Text>
                        </View> :
                        <ScrollView>
                            <Text style={styles.textTieude}>1. Đặc điểm vi khuẩn haemophilus influenzae</Text>
                            <Text style={styles.textNoidung}>Vi khuẩn haemophilus influenzae là vi khuẩn nhỏ, gram âm và có rất nhiều hình dạng khác nhau, loại vi khuẩn này thuộc dòng kỵ khí và ưa khí. Vi khuẩn haemophilus influenzae đã được phân lập thành 6 type từ a đến z, trong đó vi khuẩn haemophilus influenzae type b hay còn gọi là vi khuẩn Hib là nguyên nhân gây bệnh chủ yếu ở trẻ nhỏ dưới 6 tuổi.</Text>
                            {
                                //dataNe.map((item) => <ItemListNew key={item._id} data={item} />)
                            }
                        </ScrollView>
                }
            </>


        </ScrollView>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    time: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    time1: {
        fontWeight: 'bold',
    },
    bbc: {
        width: '100%',
        height: 200,
    },
    bbc1: {
        marginRight: 5,
        marginLeft: 200
    },
    bbc2: {
        marginTop: 5,
        marginLeft: 10,
    },
    bbc3: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 10,
    },
    buttonFollow: {
        marginLeft: 160,
        width: 80,
        height: 30,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 5,
    },
    textLogin: {
        color: 'white',
        fontSize: 15,
        fontWeight: '90',
        justifyContent: 'center',
    },
    Container1: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    hang0: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40,
    },
    hang1: {
        marginTop: 5,
        marginLeft: 310,
    },
    hang2: {
        marginTop: 5,
        marginLeft: 30,
    },
    Image: {
        width: 440,
        height: 200,
        marginTop: 10,

    },
    textTieude: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 20,
        color: "black"
    },
    textNoidung: {

    }
})
const dataNe =
    [
        {
            "_id": "1",
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
        {
            "_id": "2",
            "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
            "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL...AG85QrsA",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "3",
            "title": "Đối phó với bài tập Tết",
            "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "4",
            "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
            "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4...ut0Bl1rw",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "5",
            "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
            "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "6",
            "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",
            "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "7",
            "title": "Cho con đi ngắm trăng, sao từ bé",
            "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        }
    ]
