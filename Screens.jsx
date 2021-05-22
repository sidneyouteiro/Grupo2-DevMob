import React, {useState,useEffect} from 'react';
import Styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export const home = ({navigation, route,props})=> {

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ navigation.navigate('GameOn') }}>
              <Text style={Styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
};


export const GameOn = ({navigation, route}) => {
  
  const [indexQuestao, setIndexQuestao] = useState(0) 
  const [Pontuacao, setPontuacao] = useState(0)

  const [SegundosFaltando,setSegundosFaltando] = useState(30)
  const [TimerLigado,setTimerLigado] = useState(true) 

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

  function validarQuestao(index, alternativa){        
    setTimerLigado(false)
    if(questoes[index].certa == alternativa){
      setPontuacao(Pontuacao + 1);
    }    
    setSegundosFaltando(30)
    setIndexQuestao(index + 1);
    setTimerLigado(true)    
  } 
 
  const ligarTimer = ()=>{
    BackgroundTimer.runBackgroundTimer(()=>{
      setSegundosFaltando((segundos)=>{
          if(segundos>0) return segundos-1
          else return 0
      })
    },1000)
  }

  useEffect(()=>{
    if(TimerLigado) ligarTimer();
    else BackgroundTimer.stopBackgroundTimer();
    
    console.log('TimerLigado: ',TimerLigado);
    console.log('SegundosFaltando: ',SegundosFaltando);

    return ()=>{
      BackgroundTimer.stopBackgroundTimer();
    }
  },[TimerLigado]);

  useEffect(()=>{
    if(SegundosFaltando==0) BackgroundTimer.stopBackgroundTimer();
  },[SegundosFaltando])
 
 
  return (
    ((indexQuestao!= questoes.length) && questoes.map((questao, index) => {
        return(
          (indexQuestao == index) &&
          <View style={Styles.container}>
            <Text>{SegundosFaltando}</Text>

            <Text style={Styles.expressao}>{questao.expressao}</Text>

            <View style = {Styles.alternativas}>
              <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa1)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa1}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa2)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa2}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa3)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa3}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, questao.alternativa4)
                }}>
                <Text style={Styles.buttonText}>{questao.alternativa4}</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        )
      })) || 
    ((indexQuestao==questoes.length) &&
        <View style={Styles.container}>
          <Text>Sua pontuação foi de {Pontuacao} pontos</Text>
          <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={Styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
    )    
  ) 
}