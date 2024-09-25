import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,  } from 'react-native';
import stylesForm from './FormStyle';
import ResultImc from './resultIMC';

export default function form(){
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMenssageImc] = useState(null);
  const [resultImc, setResultImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [pesoIdeal, setPesoIdeal] = useState(null);

  const imcCalculator = () => {
  if (altura && peso) {
    const alturaMetros = parseFloat(altura.replace(",", "."));
    const pesoKg = parseFloat(peso.replace("Kg", ""));
    const imc = pesoKg / (altura * alturaMetros);
    setResultImc(imc.toFixed(2));
    setMenssageImc("Seu IMC é: ");
    setPesoIdeal(pesoIdeal);

    setTextButton("Recalcular");
  } else{
    setResultImc(null);
    setMenssageImc("Por favor, preencha a altura e o peso.");
    setPesoIdeal(null);  

     setTextButton("Calcular"); 
  }
};

const handleReset = () => {
  setAltura(null);
  setPeso(null);
  setMenssageImc(null);
  setResultImc(null);
};

return (
  <View style={stylesForm.formContext}> 
    <View>
      <View style={stylesForm.formTextAltura}>
        <Text style={stylesForm.formText}>Altura</Text>
      </View>
      <View style={stylesForm.larguraTela}>
        <TextInput
          style={stylesForm.input}
          placeholder="Ex. 1.65"
          keyboardType="numeric"
          onChangeText={setAltura}
          value={altura}
        />
      </View>
    
      <View style={stylesForm.formTextAltura}>
        <Text style={stylesForm.formText}>Peso</Text>
      </View>
    
      <View style={stylesForm.larguraTela}>
        <TextInput
          style={stylesForm.input}
          placeholder="Ex. 85kg"
          onChangeText={setPeso}
          value={peso}
        />
      </View>
    </View>
      <ResultImc messageImc={messageImc} resultImc={resultImc} />
      {resultImc === null && (
      <TouchableOpacity
        style={[stylesForm.buttoncss, stylesForm.buttonContainer]}
        onPress={imcCalculator}
      >
        <Text style={stylesForm.buttonText}>{textButton}</Text>
      </TouchableOpacity>
      )} 
  </View>
  
 );
}