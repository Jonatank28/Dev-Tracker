import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

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

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.black[200]};
`;

export const ContainerBody = styled.View`
  margin-top: 20px;
`;

export const Section = styled.View`
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black[300]};
`;

export const Value = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black[200]};
`;
