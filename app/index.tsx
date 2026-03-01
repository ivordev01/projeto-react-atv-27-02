import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Tarefa {
  texto: string;
  dataHora: string;
}

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState<Tarefa[]>([]);

  function appendInput() {
    if (inputValue.trim() === "") return;

    const novaTarefa: Tarefa = {
      texto: inputValue,
      dataHora: new Date().toLocaleString("pt-BR"),
    };

    setInputList([...inputList, novaTarefa]);
    setInputValue("");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
        paddingTop: 50,
      }}
    >
      <TextInput
        placeholder="Digite sua tarefa..."
        value={inputValue}
        onChangeText={setInputValue}
        style={{
          borderWidth: 1,
          padding: 10,
          width: "80%",
          marginBottom: 10,
          borderRadius: 5,
          backgroundColor: "white",
        }}
      />

      <TouchableOpacity
        onPress={appendInput}
        style={{ padding: 15, backgroundColor: "black", borderRadius: 10, marginBottom: 20 }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <ScrollView style={{ width: "80%" }}>
        {inputList.map((item, index) => (
          <View 
            key={index} 
            style={{ 
              backgroundColor: "white", 
              padding: 10, 
              borderRadius: 5, 
              marginBottom: 10,
              elevation: 2
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tarefa: {item.texto}</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>Criado em: {item.dataHora}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}