import React, { useState } from 'react';
import { View, Text, ImageBackground, Image} from 'react-native';
import styles from '../../style/leaderboardStyles/LeaderboardStyles'
import { FlatList } from 'react-native-gesture-handler';

const Leaderboard = () => {
    const [winner, setWinner] = useState('Will');
    const [second, setSecond] = useState('Karen');
    const [thirth, setThirth] = useState('Bob');
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'Will',
            coins: 100
        },
        {
            id: 2,
            username: 'Karen',
            coins: 99
        },
        {
            id: 3,
            username: 'Bob',
            coins: 87
        },
        {
            id: 4,
            username: 'Frank',
            coins: 50
        },
        {
            id: 5,
            username: 'Judie',
            coins: 49
        },
        {
            id: 6,
            username: 'Tommy',
            coins: 40
        }
    ])

    const renderItem = ({item}) => {
        return(
        <View style={styles.listComponent}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.amount}>{item.coins}</Text>
                <Image source={require('../../assets/coin.png')} style={styles.coin} />
            </View>
        </View>
        )
    }

    const renderEmpty = () => {

    }

    return(
        <ImageBackground source={require('../../assets/background2.png')} style={{ flex: 1 }}>
    
        <View style= {styles.container}>
            
            <View style={styles.containerPodium}>
                <Text style={styles.winner}>{winner}</Text>
                <Text style={styles.second}>{second}</Text>
                <Text style={styles.thirth}>{thirth}</Text>
            
                <View>
                    <Image source={require('../../assets/podium.png')} style={styles.podium} />  
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={users}
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.id}
                    style={{height: 200}}
                    showsVerticalScrollIndicator={true}
                />
            </View>

            
        </View>
        </ImageBackground>
    )

}

export default Leaderboard;