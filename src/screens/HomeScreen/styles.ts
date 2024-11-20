import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.black[200]};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`;

export const StyledImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const TitleContainer = styled.View`
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black[100]};
`;

export const Highlight = styled.Text`
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[500]};
  padding: 10px;
  border-radius: 15px;
  margin: 20px 0;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black[300]};
  margin-right: 10px;
`;
