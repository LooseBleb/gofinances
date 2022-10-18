import { Container, Category, Icon, Name, Separator, Footer } from "./styles";
import React from "react";
import { Menu } from "@components/Menu";
import { FlatList } from "react-native";
import { categories } from "@utils/categories";
import { Button } from 'react-native'

export interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category | undefined;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {

  function handleCategorySelect(item : Category)
  {
    setCategory(item)
  
  }

  return (
    <Container>
      <Menu title="Cadastro" />

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category onPress={() => handleCategorySelect(item)} isActive={category?.key === item.key}>
            <Icon name={item.icon}/> 
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator/>}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory}/>
      </Footer>
    </Container>
  );
}
