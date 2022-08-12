import { useEffect, useState } from "react";
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import { getPokemon } from "./services/methods/pokemon";
import Cell from "./src/components/Cell";
import { Pokemon } from "./src/model/Pokemon";
import { isEqual } from "./src/utils/functions/arrayFunctions";
import { capitalizeFirstLetter } from "./src/utils/functions/stringFunctions";

export default function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const handleGetPokemon = async () => {
    const result = await getPokemon()    
    
    if (!isEqual(pokemons, result!)) {
      setPokemons((oldValue: Pokemon[]) => [...oldValue, ...result!]);
    }
  }

  useEffect(() => {
    handleGetPokemon();  
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item }) => <Cell title={capitalizeFirstLetter(item.name)} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    margin: 16,
  },
});