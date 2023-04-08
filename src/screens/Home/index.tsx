import * as S from './styles';
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useCallback, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { ButtonIcon } from '../../components/ButtonIcon';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useRef } from 'react';
import { SchemaFields, FormValidationSchema } from '../../infra/zod/validations/schemas';
import { api } from '../../infra/lib/api';
import { AppError } from '../../infra/errors/app-error';
import { FoodsProps, ListProps } from '../../types';
import { List } from '../../components/List';


function Home() {
  const [foods, setfoods] = useState<ListProps[]>([])



  const newPlayerNameInputRef = useRef<TextInput>(null);

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSchema)
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
      // const title = isAppError ? error.message : 'Tente novamente mais tarde.'
    }
  }


  async function fetchRecipeList() {
    try {
      const response = await api.get('/foods')

      setfoods(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(useCallback(() => {
    fetchRecipeList()
  }, []))

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

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List {...item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container >
  );
}

export { Home }
