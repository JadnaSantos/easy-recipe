import { TouchableOpacityProps } from "react-native";


export type FoodsProps = {
  id: string;
}

export type ListProps = TouchableOpacityProps & {

  id: string;
  cover: string,
  name: string,
  total_ingredients: string,
  time: string

}
