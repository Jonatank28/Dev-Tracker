import styled from "styled-components/native";

interface ButtonProps {
  color: "green" | "blue";
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.colors.green[100] : theme.colors.blue[100]};
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: bold;
`;
