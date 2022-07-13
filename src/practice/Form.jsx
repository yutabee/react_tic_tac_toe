import { AlertButton } from './AlertButton';
import TextInput from './TextInput';

export const Form = () => {
  return (
		<div>
	    <TextInput required>氏名</TextInput>
		<TextInput required>メールアドレス</TextInput>
        <TextInput>電話番号</TextInput>
        <AlertButton text="クリックされました">クリック</AlertButton>
		</div>
  );
};
