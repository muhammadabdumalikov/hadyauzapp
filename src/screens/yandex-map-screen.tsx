import Geolocation from '@react-native-community/geolocation';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
  NativeSyntheticEvent,
  SafeAreaView,
  View,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import YaMap, {CameraPosition} from 'react-native-yamap';
import {CustomHeader} from '../components/app-components/go-back';
import {InputBox} from '../components/app-components/input-box';
import {LinearWrapper} from '../components/app-components/linear-wrapper';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Location {
  lat: number;
  lon: number;
}

// const LOCA TION_CHANGE_THRESHOLD = 0.00001; // Adjust this value as needed

export function YandexMapScreen() {
  const [mapCenter, setMapCenter] = useState<Location>({
    lat: 55.751244,
    lon: 37.618423,
  });
  const [currentLocation, setCurrentLocation] = useState<Location>({
    lat: 55.751244,
    lon: 37.618423,
  });
  const [isChecked, setChecked] = useState(false);

  // Handle checkbox press
  const handlePress = () => {
    setChecked(!isChecked);
  };

  const mapRef = useRef<YaMap | null>(null);
  const lastUpdateRef = useRef<Location>(mapCenter);

  const reverseGeocode = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=b7e92bd0-0f80-42c3-82ec-15a7b5171739&geocode=${longitude},${latitude}&format=json`,
      );
      const data = await response.json();

      if (
        data &&
        data.response &&
        data.response.GeoObjectCollection.featureMember.length > 0
      ) {
        const address =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
        return address;
      } else {
        // console.log('No address found for these coordinates.');
      }
    } catch (error) {
      console.error('Error fetching the address:', error);
    }
  };

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        moveToLocation({lat: latitude, lon: longitude});
      },
      error => console.log('Error getting location:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const moveToLocation = (location: Location) => {
    mapRef.current?.setCenter({...location, zoom: 18}, 0, 0, 0, 500);
    setMapCenter(location);
    lastUpdateRef.current = location;
  };

  useEffect(() => {
    const checkPermissions = async () => {
      let permissionGranted = false;
      if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        permissionGranted = result === RESULTS.GRANTED;
      } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        permissionGranted = granted === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (permissionGranted) {
        YaMap.init('8e3ed980-d7b6-4dcc-ad54-7d06df299397'); // Ensure correct API key is used
        getCurrentLocation();
      }
    };

    checkPermissions();
  }, [getCurrentLocation]);

  const onCameraPositionChangeEnd = useCallback(
    (event: NativeSyntheticEvent<CameraPosition>) => {
      const {lat, lon} = event.nativeEvent.point;
      // const geo2 = reverseGeocode(lat, lon).then(d => console.log(d))
      // const geo = Geocoder.geoToAddress(event.nativeEvent.point)
      //   .then(data => console.log(data))
      //   .catch(e => console.log(e));

      setMapCenter({
        lat: undefined as unknown as number,
        lon: undefined as unknown as number,
      });
      setCurrentLocation({lat, lon});
      lastUpdateRef.current = {lat, lon};
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Добавить новый адрес"
        style={{paddingHorizontal: 16}}
      />
      <YaMap
        ref={mapRef}
        style={styles.map}
        showUserPosition={false}
        rotateGesturesEnabled={false}
        // onCameraPositionChange={onCameraPositionChange}
        onCameraPositionChangeEnd={onCameraPositionChangeEnd}
        initialRegion={{
          lat: mapCenter.lat,
          lon: mapCenter.lon,
          zoom: 18,
          azimuth: 0,
        }}
      />

      <View style={styles.centerMarkerContainer}>
        <View style={styles.markerContainer}>
          <Image
            source={require('@/assets/images/location-marker.png')}
            style={styles.markerImage}
          />
          <View style={styles.markerContainer2}>
            <Image
              source={require('@/assets/images/lego.png')}
              style={styles.legoImage}
            />
          </View>
        </View>
      </View>

      <Pressable style={styles.floatingButton} onPress={getCurrentLocation}>
        <MaterialIcons name="my-location" size={24} color="black" />
      </Pressable>

      <View style={styles.bottomSheetBox}>
        <UrbanistBoldText style={styles.bottomSheetBoxHeader}>
          Подробная информация
        </UrbanistBoldText>

        <UrbanistMediumText style={styles.addressName}>
          Название Адреса
        </UrbanistMediumText>
        <InputBox
          handleSearch={() => null}
          style={styles.addressNameInput}
          editable={false}
        />

        <UrbanistMediumText style={styles.addressName}>
          Подробный адресс
        </UrbanistMediumText>
        <InputBox
          handleSearch={() => null}
          style={styles.addressNameInput}
          editable={false}
        />

        <Pressable style={styles.allowRow} onPress={handlePress}>
          <View style={styles.checkbox}>
            {isChecked && (
              <FontAwesome name="check" size={16} color={textColors.purple} />
            )}
          </View>
          <UrbanistSemiboldText style={styles.label}>
            Сделать это в качестве адреса по умолчанию
          </UrbanistSemiboldText>
        </Pressable>

        <LinearWrapper style={{borderRadius: 100}}>
          <Pressable
            style={[styles.addBtnBox, !isChecked && styles.addBtnBoxDisabled]}
            disabled={!isChecked}>
            <UrbanistBoldText style={styles.addBtnTxt}>
              Добавить
            </UrbanistBoldText>
          </Pressable>
        </LinearWrapper>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    backgroundColor: textColors.pureWhite,
  },
  map: {
    flex: 1,
  },
  centerMarkerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  markerContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '25%', // This moves the marker up by 10% of the screen height
  },
  markerContainer2: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: textColors.pureWhite,
    borderRadius: 42,
  },
  markerImage: {
    marginTop: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  legoImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    backgroundColor: textColors.navyBlack,
    borderRadius: 35,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 470,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomSheetBox: {
    width: '100%',
    height: 450,
    backgroundColor: textColors.pureWhite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 16,
  },
  bottomSheetBoxHeader: {
    fontWeight: '700',
    fontSize: 22,
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  addressName: {
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.2,
    marginBottom: 16,
  },
  addressNameInput: {
    height: 55,
    width: 390,
    alignSelf: 'center',
    marginBottom: 16,
  },
  allowRow: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: textColors.navyBlack,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: textColors.navyBlack,
  },
  addBtnBox: {
    height: 55,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  addBtnBoxDisabled: {
    backgroundColor: textColors.grey3,
  },
  addBtnTxt: {
    fontWeight: '700',
    fontSize: 16,
    color: textColors.pureWhite,
  },
});
