import * as zod from 'zod';
import * as S from './styles';
import { AppError } from '../../utils/AppError';
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, Controller } from 'react-hook-form';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { ButtonIcon } from '../../components/ButtonIcon';
import { TextInput } from 'react-native-gesture-handler';
import { useRef } from 'react';

const FormValidationSignupSchema = zod.object({
  recipe: zod.string().email(),
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>

function Home() {

  const newPlayerNameInputRef = useRef<TextInput>(null);


  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, reset, control } = FormValidation

  async function onSubmit(data: SchemaFields) {
    try {
      const { recipe } = data

      console.log(recipe)

      reset()

    } catch (error) {
      console.error(error)
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Tente novamente mais tarde.'
    }
  }

  return (
    <S.Container>
      <S.Logo source={require('../../../assets/logo.png')} />
      <Highlight
        subtitle='Encontra a receita que combina com você'
      />


      <S.Form>
        <Controller
          control={control}
          name="recipe"
          rules={{ required: 'Informe o e-mail' }}
          render={({ field: { value, onChange } }) => (
            <Input
              inputRef={newPlayerNameInputRef}
              placeholder="Digite o nome da receita"
              value={value}
              autoCorrect={false}
              returnKeyType="done"
              onChangeText={onChange}
            />
          )}
        />
        <ButtonIcon
          onPress={handleSubmit(onSubmit)}
          icon="search"
        />
      </S.Form>
    </S.Container >
  );
}

export { Home }
