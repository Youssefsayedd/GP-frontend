import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Users } from './DummyData.js/Data';


const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6"],
  datasets: [
    {
      data: [80, 90, 70, 85, 60, 80]
    }
  ]
};

const chartConfig = {
  backgroundColor: '#eee',
  backgroundGradientFrom: '#eee',
  backgroundGradientTo: '#eee',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  }
};

function Dashboard() {
  const displayeduser =Users.find((user)=>user.id===1)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://path-to-profile-picture' }}
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>{displayeduser.name}</Text>
      </View>
      <Image
        source={require("../assets/images/parrot-happy-cartoon-dancing-png.png")}
        style={styles.parrotImage}
      />
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Daily</Text>
        </TouchableOpacity>
      </View>
      <LineChart
        data={data}
        width={screenWidth - 10}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <Text style={styles.status}>Status: <Text style={styles.statusArrow}>↑</Text></Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit child info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"100%",
    height: 80,
    backgroundColor:"#8B61FF",
    marginTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"white"
  },
  parrotImage: {
    width: 150,
    height: 150,
    margin: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tab: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  tabText: {
    fontSize: 16,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  statusArrow: {
    color: 'green',
  },
  editButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
