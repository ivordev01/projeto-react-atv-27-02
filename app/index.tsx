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
        backgroundColor: "#242424",
        paddingTop: 50,
      }}
    >
      <TextInput
        placeholder="Digite sua tarefa..."
        value={inputValue}
        onChangeText={setInputValue}
        style={{
          padding: 10,
          width: "60%",
          marginBottom: 10,
          borderRadius: 5,
          backgroundColor: "#424242",
          color: "#ECECEC",
        }}
      />

      <TouchableOpacity
        onPress={appendInput}
        style={{ padding: 15, backgroundColor: "#424242", borderRadius: 10, marginBottom: 20 }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <ScrollView style={{ width: "60%" }}>
        {inputList.map((item, index) => (
          <View 
            key={index} 
            style={{ 
              backgroundColor: "#424242", 
              padding: 10, 
              borderRadius: 5, 
              marginBottom: 10,
              elevation: 2
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>Tarefa: {item.texto}</Text>
            <Text style={{ fontSize: 12, color: "#a5a5a5" }}>Criado em: {item.dataHora}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}