import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

export const ContainerList = styled.View`
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const SortByContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SortByText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black[200]};
`;

export const SortOptionContainer = styled.Pressable`
  flex-direction: row;
  gap: 5px;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const SortByTextDecoration = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.blue[200]};
`;

export const IconContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.black[200]};
`;

export const IconDecoration = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.blue[200]};
`;

export const SortOptionDropdown = styled.View`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  width: 150px;
  z-index: 10;
`;

export const SortOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black[200]};
  padding: 5px 15px;
  text-align: center;
`;

export const RepositoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const RepositoryContent = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const ImageContainer = styled.View`
  width: 75px;
  height: 70px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black[500]};
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View``;

export const DetailsTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.black[100]};
`;

export const DetailsDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const DetailsDescriptionBullet = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black[400]};
  margin-right: 10px;
`;

export const DetailsDescriptionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const LanguageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const OpenContainer = styled.View`
  align-self: flex-end;
`;

export const OpenButtonWrapper = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.green[300]};
  padding: 5px 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const OpenButtonTextWrapper = styled.Text`
  color: ${({ theme }) => theme.colors.green[100]};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
`;

export const InnerView = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.tec};
`;

export const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ShareContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const DropdownContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.black[500]};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 1;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DropdownOption = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 5px;
`;

export const DropdownText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.black[200]};
`;
