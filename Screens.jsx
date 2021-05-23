import React, {useState,useEffect} from 'react';
import Styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

export const home = ({navigation})=> {

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ navigation.navigate('GameOn') }}>
              <Text style={Styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
};


export const GameOn = ({navigation}) => {
  
  const SEGUNDOS_TEMPORIZADOR = 3;  
  const [indexQuestao, setIndexQuestao] = useState(0);
  const [Pontuacao, setPontuacao] = useState(0);
  const [tempo, setTempo] = useState(SEGUNDOS_TEMPORIZADOR);
  let interval = null
  
  const questoes = [
    {
    expressao:"2x + 10 = 24",
    certa:'7',
    alternativa1:'10',
    alternativa2:'8',
    alternativa3:'2',
    alternativa4:'7'
  },
  {
    expressao:"7x + 35 = 70",
    certa:'5',
    alternativa1:'13',
    alternativa2:'7',
    alternativa3:'2',
    alternativa4:'5'
  },
  {
    expressao:"2x + 5 = 19",
    certa:'7',
    alternativa1:'7',
    alternativa2:'6',
    alternativa3:'2',
    alternativa4:'8'
  },
  {
    expressao:"14x - 21 = 63",
    certa:'6',
    alternativa1:'6',
    alternativa2:'9',
    alternativa3:'4',
    alternativa4:'11'
  },
  {
    expressao:"23 + 12x = 59",
    certa:'3',
    alternativa1:'3',
    alternativa2:'4',
    alternativa3:'2',
    alternativa4:'7'
  },
  {
    expressao:"3x = x + 8",
    certa:'4',
    alternativa1:'10',
    alternativa2:'3',
    alternativa3:'4',
    alternativa4:'11'
  },
  {
    expressao:"x + 5 = 20 - 4x",
    certa:'3',
    alternativa1:'20',
    alternativa2:'8',
    alternativa3:'4',
    alternativa4:'3'
  }
  ]
 
  /*Embaralhar array*/

  function embaralhar(array) {
    var m = array.length, t, i;
  
    while (m) {  
      i = Math.floor(Math.random() * m--);
  
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  const questoesEmbaralhadas = React.useMemo(() => {
    return embaralhar(questoes);
  }, [])
   

  /* Temporizador */
  
  function validarQuestao(index, alternativa){
    if(questoes[index].certa == alternativa){
      setPontuacao(Pontuacao + 1);
    }    
    setIndexQuestao(index + 1);
    setTempo(SEGUNDOS_TEMPORIZADOR);
  } 
  
  useEffect(() => {
    interval = setInterval(() => {
      setTempo(tempo => tempo - 1);
    }, 1000);

    if(indexQuestao === questoes.length + 1)
      clearInterval(interval);
  }, []);

  useEffect(() => {
    if(tempo == 0){
      setIndexQuestao(indexQuestao + 1);
      setTempo(SEGUNDOS_TEMPORIZADOR);
    }
  }, [tempo]);

  return (
    ((indexQuestao < questoes.length) && questoesEmbaralhadas.map((questao, index) => {
        return(
          (indexQuestao == index) &&          
          <View key = {"container"} style={Styles.container}>
            <Text style = {Styles.temporizador}>Tempo: {tempo}</Text>

            <Text key = {questao.expressao} style={Styles.expressao}>Resolva: {questao.expressao}</Text>

            <View key = {index} style = {Styles.alternativas}>
              <TouchableOpacity key = {questao.alternativa1} style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa1)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa1}</Text>
              </TouchableOpacity>

              <TouchableOpacity key = {questao.alternativa2} style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa2)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa2}</Text>
              </TouchableOpacity>

              <TouchableOpacity key = {questao.alternativa3} style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa3)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa3}</Text>
              </TouchableOpacity>

              <TouchableOpacity key = {questao.alternativa4} style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa4)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa4}</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        )
      })) || 
      <View style={Styles.container}> 
      <Text style = {Styles.expressao}>Pontuação final: {Pontuacao} / {questoes.length}</Text>
      <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{navigation.navigate('Home')}}>
            <Text style={Styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}