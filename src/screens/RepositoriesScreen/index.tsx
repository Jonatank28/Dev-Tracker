import React, { useEffect, useState } from 'react';
import { FlatList, Text, } from 'react-native';
import {
  Container,
  Header,
  BackButton,
  Title,
  ContainerList,
  SortByContainer,
  SortByText,
  SortByTextDecoration,
  SortOptionContainer,
  IconContainer,
  RepositoryContainer,
  Icon,
  IconDecoration,
  OpenContainer,
  OpenButtonWrapper,
  OpenButtonTextWrapper,
  RepositoryContent,
  ImageContainer,
  InfoContainer,
  DetailsContainer,
  DetailsTitle,
  DetailsDescriptionContainer,
  DetailsDescriptionBullet,
  DetailsDescriptionText,
  StatsContainer,
  LanguageContainer,
  InnerView,
  StarContainer,
  ShareContainer,
  DropdownContainer,
  DropdownOption,
  DropdownText
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { truncateText } from '../../utils/functions';
import { useNavigation } from '@react-navigation/native';
import { fetchRepoDetails, RepoData } from '../../redux/userSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

type OptionTypes = "asc" | "desc" | "stars" | "forks";
type NavigationProp = StackNavigationProp<RootStackParamList, "Repos">;

const RepositoriesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const { repos } = useSelector((state: RootState) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState<OptionTypes>('asc');
  const [filteredRepos, setFilteredRepos] = useState(repos);

  const handleSortOptionChange = (option: OptionTypes) => {
    const sortedRepos = [...repos].sort((a, b) => {
      switch (option) {
        case 'asc':
          return a.name.localeCompare(b.name);
        case 'desc':
          return b.name.localeCompare(a.name);
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'forks':
          return b.forks_count - a.forks_count;
        default:
          return 0;
      }
    });
    setFilteredRepos(sortedRepos);
    setSortOption(option);
    setShowDropdown(false);
  };

  const handleRepositoryDetails = (repo: RepoData) => {
    dispatch(fetchRepoDetails({ username: repo.login, repo: repo.name }));
    navigation.navigate('RepoDetails');
  }

  useEffect(() => {
    handleSortOptionChange(sortOption);
  }, [repos]);

  const renderSortDropdown = () => {
    return (
      showDropdown && (
        <DropdownContainer>
          <DropdownOption onPress={() => handleSortOptionChange('asc')}>
            <DropdownText>Asc</DropdownText>
          </DropdownOption>
          <DropdownOption onPress={() => handleSortOptionChange('desc')}>
            <DropdownText>Des</DropdownText>
          </DropdownOption>
          <DropdownOption onPress={() => handleSortOptionChange('stars')}>
            <DropdownText>Stars</DropdownText>
          </DropdownOption>
          <DropdownOption onPress={() => handleSortOptionChange('forks')}>
            <DropdownText>Forks</DropdownText>
          </DropdownOption>
        </DropdownContainer>
      )
    );
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </BackButton>
        <Title>Repositories</Title>
      </Header>
      <ContainerList>
        <SortByContainer>
          <SortByText>Sort by:</SortByText>
          <SortOptionContainer onPress={() => setShowDropdown(!showDropdown)}>
            <SortByTextDecoration>{sortOption}</SortByTextDecoration>
            <IconContainer>
              <IconDecoration name="caret-down-outline" size={24} />
            </IconContainer>
          </SortOptionContainer>
        </SortByContainer>

        {renderSortDropdown()}

        <FlatList
          data={filteredRepos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RepositoryContainer>
              <RepositoryContent>
                <ImageContainer />
                <InfoContainer>
                  <DetailsContainer>
                    <DetailsTitle>{truncateText(item.name, 26)}</DetailsTitle>
                    <DetailsDescriptionContainer>
                      <DetailsDescriptionBullet />
                      <DetailsDescriptionText>{truncateText(item.description || '', 20)}</DetailsDescriptionText>
                    </DetailsDescriptionContainer>
                  </DetailsContainer>
                  <StatsContainer>
                    <LanguageContainer>
                      <InnerView />
                      <Text>{item.language}</Text>
                    </LanguageContainer>
                    <StarContainer>
                      <Icon name="star-outline" size={20} />
                      <Text>{item.stargazers_count}</Text>
                    </StarContainer>
                    <ShareContainer>
                      <Icon name="git-network-outline" size={20} />
                      <Text>{item.forks_count}</Text>
                    </ShareContainer>
                  </StatsContainer>
                </InfoContainer>
              </RepositoryContent>
              <OpenContainer>
                <OpenButtonWrapper onPress={() => handleRepositoryDetails(item)}>
                  <OpenButtonTextWrapper>open</OpenButtonTextWrapper>
                </OpenButtonWrapper>
              </OpenContainer>
            </RepositoryContainer>
          )}
        />
      </ContainerList>
    </Container>
  );
};

export default RepositoriesScreen;
