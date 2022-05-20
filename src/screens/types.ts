import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    AllPokemon: undefined
    CurrentPokemon: { url: string }
}


export type CurrentPokemonPropsType = NativeStackScreenProps<RootStackParamList, 'CurrentPokemon'>

export type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()
