import React, { useState } from 'react';
import {
  Container,
  Header,
  TitleContainer,
  Title,
  Highlight,
  ProfileButton,
  SearchBarContainer,
  SearchInput,
  StyledImage,
  Icon,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { fetchUserData } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import Toast from 'react-native-toast-message';
import CustomButton from '../../components/CustomButton';

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async () => {
    if (search.trim()) {
      const res = await dispatch(fetchUserData(search));
      if (res.meta.requestStatus === 'rejected') {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "User not found",
        });
      } else {
        navigation.navigate('Details');
      }
      setSearch('');
    }
  };

  return (
    <Container>
      <Header>
        <Icon name="menu" size={24} />
        <ProfileButton>
          <StyledImage source={{ uri: 'https://github.com/Jonatank28.png' }} />
        </ProfileButton>
      </Header>

      <TitleContainer>
        <Title>
          Find <Highlight>a dev</Highlight>
        </Title>
      </TitleContainer>

      <SearchBarContainer>
        <SearchInput
          placeholder="Search a dev"
          value={search}
          onChangeText={setSearch}
        />
        <Icon name="search" size={20} />
      </SearchBarContainer>

      <CustomButton onPress={handleSearch} title="Find" />
    </Container>
  );
};

export default HomeScreen;
