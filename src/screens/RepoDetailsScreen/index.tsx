import React from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigator";
import {
  Container,
  Header,
  BackButton,
  Icon,
  Title,
  ContainerBody,
  Section,
  Label,
  Value,
} from "./style";
import CustomButton from "../../components/CustomButton";
import * as Linking from 'expo-linking';

type NavigationProp = StackNavigationProp<RootStackParamList, "RepoDetails">;

const RepoDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { repoDetails } = useSelector((state: RootState) => state.user);

  const openGitHubLink = async () => {
    if (repoDetails?.html_url) {
      try {
        const canOpen = await Linking.canOpenURL(repoDetails.html_url);
        if (canOpen) {
          await Linking.openURL(repoDetails.html_url);
        } else {
          Alert.alert("Not able to open the URL");
        }
      } catch (error: any) {
        Alert.alert("Error opening the URL", error.message);
      }
    } else {
      Alert.alert("URL not found");
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </BackButton>
        <Title>Repository Details</Title>
      </Header>

      <ContainerBody>
        <Section>
          <Label>Name:</Label>
          <Value>{repoDetails?.name || "Not available"}</Value>
        </Section>
        <Section>
          <Label>Description:</Label>
          <Value>{repoDetails?.description || "No description"}</Value>
        </Section>
        <Section>
          <Label>Stars:</Label>
          <Value>{repoDetails?.stargazers_count || 0}</Value>
        </Section>
        <Section>
          <Label>Forks:</Label>
          <Value>{repoDetails?.forks_count || 0}</Value>
        </Section>
        <Section>
          <Label>Language:</Label>
          <Value>{repoDetails?.language || "Undefined"}</Value>
        </Section>
      </ContainerBody>

      <CustomButton onPress={openGitHubLink} title="Open in GitHub" color="green" />
    </Container>
  );
};

export default RepoDetailsScreen;
