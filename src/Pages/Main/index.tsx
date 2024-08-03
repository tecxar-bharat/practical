import React, { Fragment } from "react";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useLikesAndSelected from "../../hooks/like";

import Aerobics from '../../assets/svg/aerobics.svg'
import Box from '../../assets/svg/box.svg'
import Dances from '../../assets/svg/dances.svg'
import Run from '../../assets/svg/run.svg'
import Swimming from '../../assets/svg/swimming.svg'
import Wrestling from '../../assets/svg/wrestling.svg'
import Yoga from '../../assets/svg/yoga.svg'
import Dumbbell from '../../assets/svg/dumbbell.svg'
import Search from '../../assets/svg/search.svg'
import Map from '../../assets/svg/map.svg'


const MainPage = () => {
    const { LikeComponent, toggleSelected, isSelectedClass } = useLikesAndSelected()

    const gyms = [
        {
            "id": 1,
            "title": "Gym Rebel",
            "rating": 5.5,
            "price": 250,
            "favorite": false,
            "date": "02 Aug - 25 Aug, 2020",
            "popular_clasess": [
                {
                    "class_id": 4,
                    "title": "Fitness Class",
                    "price": 350,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "1h 25min"
                }, {
                    "class_id": 5,
                    "title": "Fitness with some friends",
                    "price": 250,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "45min"
                }, {
                    "class_id": 6,
                    "title": "Yoga Class",
                    "price": 150,
                    "favorite": false,
                    "location": "London, Wellness st. 23",
                    "time": "25min"
                }, {
                    "class_id": 7,
                    "title": "Crossfit Class",
                    "price": 200,
                    "favorite": false,
                    "location": "London,Villers st. 1",
                    "time": "1h 30min"
                }
            ]
        }, {
            "id": 2,
            "title": "Gym NonStop",
            "rating": 3.5,
            "price": 500,
            "favorite": false,
            "date": "01 Aug - 30 Aug, 2020",
            "popular_clasess": [
                {
                    "class_id": 8,
                    "title": "Fitness Class",
                    "price": 350,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "1h 25min"
                }, {
                    "class_id": 9,
                    "title": "Fitness with some friends",
                    "price": 250,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "45min"
                }, {
                    "class_id": 10,
                    "title": "Yoga Class",
                    "price": 150,
                    "favorite": false,
                    "location": "London, Wellness st. 23",
                    "time": "25min"
                }
            ]
        }, {
            "id": 3,
            "title": "Gym Gym",
            "rating": 1.5,
            "price": 150,
            "favorite": false,
            "date": "05 Aug - 16 Aug, 2020",
            "popular_clasess": []
        }
    ]

    const classes = [
        {
            id: 1,
            icon: Aerobics
        },
        {
            id: 2,
            icon: Box
        },
        {
            id: 3,
            icon: Dances
        },
        {
            id: 4,
            icon: Run
        },
        {
            id: 5,
            icon: Swimming
        },
        {
            id: 6,
            icon: Wrestling
        },
        {
            id: 7,
            icon: Yoga
        }
    ]

    return (
        <Fragment>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#3073c2', padding: 16 }}>
                <Dumbbell />
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', gap: 16 }}>
                    <Map />
                    <Search />
                </View>
            </View>
            <View style={styles.container} >
                <FlatList
                    data={gyms}
                    ListHeaderComponent={<Fragment>
                        <Text style={styles.heading}>Recommended Gyms</Text>
                        <FlatList
                            data={gyms}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{ paddingBottom: 20 }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            renderItem={({ item }: any) => {
                                return (
                                    <View style={styles.backgroundImageView}>
                                        <ImageBackground source={require('../../assets/images/map.png')} resizeMode="contain" >
                                            <View>
                                                <LikeComponent id={item.id} />
                                                <Image source={require('../../assets/images/gym_non_stop.png')} resizeMode="contain" style={{ borderRadius: 9 }} />
                                            </View>
                                            <View style={{ backgroundColor: '#FFFFFF', flex: 0.6, padding: 10, borderBottomLeftRadius: 9, borderBottomRightRadius: 9 }}>
                                                <View style={styles.rowSpace}>
                                                    <Text style={styles.titleText}>{item?.title}</Text>
                                                    <Text style={styles.description}>${item?.price}/day</Text>
                                                </View>
                                                <View style={styles.rowSpace}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                                        <AntDesign name={'star'} color={'orange'} size={20} />
                                                        <Text style={{ fontSize: 16, marginLeft: 3, color: '#000000' }}>{item?.rating}</Text>
                                                    </View>
                                                    <Text >{item?.date}</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                )
                            }}
                        />
                        <Text style={styles.heading}>Popular Classes</Text>
                        <FlatList
                            renderItem={({ item }) => {
                                const isSelected = isSelectedClass(item.id)
                                const Icon = item.icon;
                                return (
                                    <TouchableOpacity style={{
                                        height: 50, width: 50, backgroundColor: isSelected ? '#3073c2' : 'white', borderRadius: 25, alignItems: 'center', justifyContent: 'center', shadowColor: '#000',
                                        shadowOpacity: 0.1,
                                        shadowRadius: 5,
                                        shadowOffset: { width: 0, height: 2 },
                                        elevation: 3,
                                    }}
                                        onPress={() => toggleSelected(item.id)}
                                    >
                                        <Icon fill={isSelected ? 'white' : '#3073c2'} />
                                    </TouchableOpacity>
                                )
                            }}
                            contentContainerStyle={{ gap: 16 }}
                            style={{ marginHorizontal: 8, paddingBottom: 8 }}
                            horizontal
                            data={classes}
                            showsHorizontalScrollIndicator={false}
                        />
                    </Fragment>}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }: any) => {
                        return (
                            <FlatList
                                data={item?.popular_clasess}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={styles.cardContainer}>
                                            <View>
                                                <LikeComponent id={item.class_id} />
                                                <Image
                                                    source={require('../../assets/images/crossfit_class.png')}
                                                    resizeMode="stretch"
                                                    style={styles.image}
                                                />
                                            </View>
                                            <View style={styles.view}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 6 }}>
                                                    <Text style={styles.titleText}>{item?.title}</Text>
                                                    <View>
                                                        <Text style={styles.price}>${item?.price}</Text>
                                                        <Text style={styles.description}>/day</Text>
                                                    </View>
                                                </View>
                                                <View style={{ marginTop: 8, gap: 4 }}>
                                                    <Text style={{ fontSize: 14, color: '#333333' }}>{`Gym 'Seven'`}</Text>
                                                    <View style={styles.align}>
                                                        <Ionicons name='location-sharp' size={14} color={'#3399FF'} />
                                                        <Text style={styles.text1}>{item?.location}</Text>
                                                    </View>
                                                    <View style={styles.align}>
                                                        <Ionicons name='time' size={14} color={'#3399FF'} />
                                                        <Text style={styles.text1}>{item?.time}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        )
                    }}
                />
            </View>
        </Fragment>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f3f2f7', paddingHorizontal: 10
    },
    cardContainer: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        flexDirection: 'row',
    },
    image: {
        width: 120,
    },
    view: {
        flex: 1,
        padding: 10
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1
    },
    description: {
        fontSize: 12,
        color: '#888',
    },
    price: {
        fontSize: 14,
        color: '#3073c2',
        fontWeight: 'bold'
    },
    backgroundImageView: {
        width: 'auto',
        justifyContent: 'flex-end',
        backgroundColor: '#d6d6d6',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        borderRadius: 9,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        color: '#000000'
    },
    align: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    text1: {
        fontSize: 14, color: 'gray', marginLeft: 5
    },
    rowSpace: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    }
});
export default MainPage;