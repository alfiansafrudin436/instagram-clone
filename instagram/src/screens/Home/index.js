import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Instagram, {
  Add,
  Love,
  LoveFilled,
  Comment,
  Send,
  AddStory,
  Live,
  More,
  Collect,
  Dot,
} from '../../svg';
const index = () => {
  const story = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../img/1.jpg'),
      status: 'own',
    },
    {
      id: 2,
      name: 'leeviahq',
      image: require('../../img/2.png'),
      status: 'live',
    },
    {
      id: 3,
      name: 'ladyinblack',
      image: require('../../img/3.jpg'),
      status: 'story',
    },
    {
      id: 4,
      name: 'beardman',
      image: require('../../img/4.jpg'),
      status: 'story',
    },
    {
      id: 5,
      name: 'beardman2',
      image: require('../../img/4.jpg'),
      status: 'story',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.renderItemContainer}>
      {item.status !== 'own' ? (
        <LinearGradient
          colors={['#D60A66', '#FEC66A']}
          style={styles.imageFrame}>
          <TouchableOpacity>
            <Image source={item.image} style={styles.renderItemImage} />
          </TouchableOpacity>
          {item.status == 'live' ? (
            <View
              style={{position: 'absolute', alignSelf: 'center', bottom: -5}}>
              <Live />
            </View>
          ) : (
            <></>
          )}
        </LinearGradient>
      ) : (
        <View style={styles.imageFrame}>
          <TouchableOpacity>
            <Image source={item.image} style={styles.renderItemImage} />
            <View
              style={{position: 'absolute', alignSelf: 'flex-end', bottom: 0}}>
              <AddStory />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={[styles.headerIcon, styles.headerIconContainer]}>
          <TouchableOpacity>
            <Instagram />
          </TouchableOpacity>
          <View style={styles.headerIcon}>
            <TouchableOpacity style={styles.icon}>
              <Add />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Love />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Send />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerStory}>
          <FlatList
            data={story}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <View style={styles.containerBody}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 15,
            paddingLeft: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={require('../../img/1.jpg')} style={styles.image} />
            </TouchableOpacity>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 13.5, fontWeight: '700'}}>
                pieroborgo
              </Text>
              <Text style={{fontSize: 11.5, fontWeight: '600'}}>
                Florence, Italy
              </Text>
            </View>
          </View>
          <More />
        </View>
        <Image
          source={require('../../img/1.jpg')}
          style={{width: '100%', marginTop: 15, marginBottom: 15, height: 330}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.icon}>
              <LoveFilled />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Comment />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Send />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', left: '50%', alignSelf: 'center'}}>
            <Dot />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingRight: 15}}>
            <Collect />
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text>Liked by leeviahq and others</Text>
          <Text>Thanks for downloading this freebie</Text>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  //HEADER
  containerHeader: {
    height: 170,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E4E4E4',
  },
  headerIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerIcon: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 10,
  },

  //STORY
  headerStory: {
    flex: 2,
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
  },
  //RENDER ITEM
  renderItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  imageFrame: {
    width: 73,
    height: 73,
    borderRadius: 73 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItemImage: {
    width: 66,
    height: 66,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 66 / 2,
  },
  //BODY
  containerBody: {
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth:0.5,
    paddingBottom:10,
    borderBottomColor:'#E4E4E4'
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32.2,
  },
});
