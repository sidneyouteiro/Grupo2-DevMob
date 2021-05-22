import React, {useState,useEffect} from 'react';
import Styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

var expressoes = {"2x+10 = 24":["7","10","85","2"],"50-7x = -6":["8","1","5","2"],
                  "2x = 10":["5","7","3","9"]};
              //,"":"","":"","":"","":"","":"","":"","":"","":"","":"","":""}




export const home = ({navigation, route,props})=> {

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.touchableOpacityButton} onPress={()=>{ navigation.navigate('GameOn') }}>
              <Text style={Styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
}


export const GameOn = ({navigation, route}) => {
  
  const [indexQuestao, setIndexQuestao] = useState(0) 
  const [Pontuacao, setPontuacao] = useState(0) 

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
    
    if(questoes[index].certa == alternativa){
      setPontuacao(Pontuacao + 1);
    }    
    
    setIndexQuestao(index + 1);    
  } 
 
  // useEffect(()=>{
  //   console.log('Pontuação nova: ', Pontuacao);
  // },[Pontuacao]);
 
 
  return (
    questoes.map((questao, index) => {
      
        return(
          
          (indexQuestao == index) && 
          <View style={Styles.container}>
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
      }
    )
  ) 
}