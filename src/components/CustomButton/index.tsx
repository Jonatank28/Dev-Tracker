import { Button, ButtonText } from './style';

interface Props {
  onPress: () => void;
  title: string;
  color?: 'green' | 'blue';
}

const CustomButton = ({ onPress, title, color = 'blue' }: Props) => {
  return (
    <Button onPress={onPress} color={color}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};


export default CustomButton;