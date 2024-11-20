import {
  Container,
  Icon,
  BackButton,
  InfoContainer,
  Name,
  EmailContainer,
  EmailBullet,
  Email,
  Bio,
  FollowersFollowingContainer,
  MetricItem,
  Divider,
  MetricLabel,
  MetricValue,
  StyledImage,
  IconContainer,
  UpperView,
  BottomView,
} from "./styles";
import { useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUserRepos } from "../../redux/userSlice";
import { truncateText } from "../../utils/functions";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import CustomButton from "../../components/CustomButton";

type NavigationProp = StackNavigationProp<RootStackParamList, "Details">;

const DetailsScreen = () => {
  const { width } = useWindowDimensions();
  const { userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp>();


  const handleRepository = async () => {
    dispatch(fetchUserRepos(userData?.login || ""));
    navigation.navigate("Repos");
  };

  return (
    <Container>
      <StyledImage
        source={{
          uri: userData?.avatar_url,
        }}
        width={width}
        height={width}
      />

      <IconContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </BackButton>
        <Icon name="bookmark" size={24} />
      </IconContainer>

      <UpperView>
        <InfoContainer>
          <Name>{userData?.name}</Name>
          <EmailContainer>
            <EmailBullet />
            <Email>{userData?.email || "No email."}</Email>
          </EmailContainer>
          <Bio>{truncateText(userData?.bio || "No biography.")}</Bio>
        </InfoContainer>
      </UpperView>

      <FollowersFollowingContainer>
        <MetricItem>
          <MetricLabel>Followers</MetricLabel>
          <MetricValue>{userData?.followers}</MetricValue>
        </MetricItem>
        <Divider />
        <MetricItem>
          <MetricLabel>Following</MetricLabel>
          <MetricValue>{userData?.following}</MetricValue>
        </MetricItem>
      </FollowersFollowingContainer>

      <BottomView>
        <CustomButton onPress={handleRepository} title="See repositories" color="green" />
      </BottomView>
    </Container>
  );
};

export default DetailsScreen;
