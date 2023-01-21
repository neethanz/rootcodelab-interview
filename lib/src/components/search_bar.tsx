import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image, TextInput} from 'react-native';
const CustomSearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <Image
          source={require('../../assets/icons/ic_search_dark_mode.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <Text>cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 5,
  },
};

export default CustomSearchBar;
