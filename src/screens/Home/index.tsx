import { Input } from '../../components/Input';
import * as S from './styles';
import { useForm, Controller } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { AppError } from '../../utils/AppError';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';


const FormValidationSignupSchema = zod.object({
  recipe: zod.string().email(),
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>


function Home() {

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
      <S.Content>
        <S.Logo source={require('../../../assets/logo.png')} />
        <S.SubTitle>Encontra a receita que combina com você</S.SubTitle>
      </S.Content>


      <S.Form>
        <Controller
          control={control}
          name="recipe"
          rules={{ required: 'Informe o e-mail' }}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Digite o nome da comida"
              autoCorrect={false}
              autoCapitalize='none'
              returnKeyType='next'
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <ButtonIcon onPress={handleSubmit(onSubmit)} name='search' />
      </S.Form>



    </S.Container >
  );
}

export { Home }
