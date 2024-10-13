import {textColors} from '@/constants/Colors';
import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function InputBox(
  props: TextInputProps & {
    handleSearch: (input: string) => void;
    hasPreIcon?: boolean;
    resultValue?: string;
  },
) {
  const [input, setInput] = useState('');

  return (
    <View style={[styles.box, props?.style]}>
      {props.hasPreIcon ? (
        <Pressable
          onPress={() => props.handleSearch(input)}
          style={[styles.searchIcon]}>
          <Feather name="search" size={24} color={textColors.navyBlack} />
        </Pressable>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Qidiruv ..."
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
}

export function SearchInputBox(
  props: TextInputProps & {
    handleSearch: (input: string) => void;
    openBottomSheet?: () => void;
  },
) {
  const [input, setInput] = useState('');

  const handleFilterFocus = () => {
    if (props?.openBottomSheet) {
      props.openBottomSheet();
    }
  };

  return (
    <View style={[styles.box, props?.style]}>
      <Pressable
        onPress={() => props.handleSearch(input)}
        style={[styles.searchIcon]}>
        <Feather name="search" size={24} color={textColors.navyBlack} />
      </Pressable>

      <TextInput
        style={styles.input}
        placeholder={props?.placeholder ?? 'Qidiruv ...'}
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity onPress={handleFilterFocus} style={[styles.searchIcon]}>
        <MaterialCommunityIcons
          name="tune-variant"
          size={24}
          color={textColors.navyBlack}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: textColors.grey2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 15,
    marginHorizontal: 16,
    paddingHorizontal: 15,
    overflow: 'hidden',
    marginBottom: 24,
  },

  input: {
    flex: 1,
    fontFamily: 'UrbanistSemiBold',
    fontSize: 16,
    fontWeight: '500',
  },
  filterFocused: {
    borderColor: textColors.grey2,
    color: textColors.pureWhite,
  },
  searchIcon: {
    padding: 5,
    marginRight: 5,
  },
  searchIconFocused: {
    padding: 5,
    backgroundColor: textColors.purple,
    borderRadius: 10,
  },
});
