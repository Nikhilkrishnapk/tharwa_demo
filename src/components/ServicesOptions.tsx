import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Alert } from 'react-native';
import ServiceItems from './ServiceItems';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import { getServiceCategoryList } from '../services/serviceCategoryServices';

const ServicesOptions = () => {
  const { height, width } = Dimensions.get('window');
  const language = useSelector(selectLanguage);
  const isArabic = language === 'Arabic';

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServiceCategorys();
  }, []);

  // fetching services lists
  const fetchServiceCategorys = async () => {
    try {
      const response = await getServiceCategoryList();
      setServices(response.data);
    } catch (error) {
      // handling 500 error.
      if( error.response?.status === 500 ) {
        Alert.alert('Server error', 'please try again later.');
      } else {
        console.error('error fetching service-list', error);
      }
    }
  };

  // const DATA = [
  //   {
  //     id: 1,
  //     title: isArabic ? 'النفايات الخطرة' : 'Hazardous Waste',
  //     icon: require('../../assets/servicesHazardousWasteIcon.png'),
  //   },

  //   {
  //     id: 2,
  //     title: isArabic ? 'رفسف' : 'RVSF',
  //     icon: require('../../assets/servicesRvsfIcon.png'),
  //   },

  //   {
  //     id: 3,
  //     title: isArabic ? 'خردة' : 'Scrap',
  //     icon: require('../../assets/servicesScapIcon.png'),
  //   },

  //   {
  //     id: 4,
  //     title: isArabic ? 'السوق' : 'Marketplace',
  //     icon: require('../../assets/servicesMarketplaceIcon.png'),
  //   },
  // ];

  return (
    <View style={[styles.container, { paddingBottom: height * 0.1 }]}>
      <FlatList
        data={services}
        numColumns={2}
        renderItem={({ item }) => (
          <ServiceItems title={item?.service_name} icon={item.icon} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServicesOptions;
