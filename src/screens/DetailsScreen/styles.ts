import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.black[200]};
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const StyledImage = styled.Image<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  align-self: center;
`;

export const UpperView = styled.View`
  flex: 1;
  padding: 20px;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.View`
  padding: 0px;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black[100]};
`;

export const EmailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const EmailBullet = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black[400]};
  margin-right: 10px;
`;

export const Email = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const Bio = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.black[400]};
  margin-top: 10px;
  text-align: left;
`;

export const FollowersFollowingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const MetricItem = styled.View`
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Divider = styled.View`
  height: 90%;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.black[400]};
  margin: 0 20px;
`;

export const MetricLabel = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black[300]};
`;

export const MetricValue = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue[200]};
`;

export const BottomView = styled.View`
  padding: 20px;
  margin-top: auto;
`;
