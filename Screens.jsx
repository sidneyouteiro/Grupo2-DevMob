import React, {useState,useEffect} from 'react';
import Styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

var expressoes = {"2x+10 = 24":["7","10","85","2"],"50-7x = -6":["8","1","5","2"],
                  "2x = 10":["5","7","3","9"]};
              //,"":"","":"","":"","":"","":"","":"","":"","":"","":"","":""}




export const home = ({navigation, route,props})=> {

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ navigation.navigate('GameOn') }}>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>
        </View>
    )
}


export const GameOn = ({navigation, route}) => {


 
  
  
  const [indexQuestao, setIndexQuestao] = useState(0) 
  const [Pontuacao, setPontuacao] = useState(0) 
  
  function validarQuestao(index, alternativa){
    
    console.log(questoes[index].certa);
    if(questoes[index].certa == alternativa){
      setPontuacao(Pontuacao + 1);
      console.log('Index: ', index);
      console.log('Alternativa: ', alternativa);
      console.log('Pontuação: ', Pontuacao);
    }
    setIndexQuestao(index + 1);    
  }
  
  const questoes = [{
    expressao:"2x+10 = 24",
    certa:'7',
    alternativa1:'10',
    alternativa2:'85',
    alternativa3:'2',
    alternativa:'7'
  },
  {
    expressao:"2x+10 = 2222222",
    certa:'85',
    alternativa1:'10',
    alternativa2:'85',
    alternativa3:'2',
    alternativa:'7'
  },
  {
    expressao:"2x+10 = 333333333333",
    certa:'7',
    alternativa1:'10',
    alternativa2:'85',
    alternativa3:'2',
    alternativa:'7'
  },
  {
    expressao:"2x+10 = 4444444444444",
    certa:'7',
    alternativa1:'10',
    alternativa2:'85',
    alternativa3:'2',
    alternativa:'7'
  }
  ]
 
  useEffect(()=>{
    console.log('Pontuação nova: ', Pontuacao);
  },[Pontuacao]);
 
 
  return (
        questoes.map((item, index) => {
          
            return(
              
              (indexQuestao == index) && <View style={Styles.container}>
              <TouchableOpacity style={Styles.TouchableOpacityButton} /* onPress={()=>{  }} */>
                <Text style={Styles.ButtonText}>{item.expressao}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, item.alternativa)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, item.alternativa1)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa1}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, item.alternativa2)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa2}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                validarQuestao(index, item.alternativa3)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa3}</Text>
              </TouchableOpacity>

              <Text>{Pontuacao}</Text>
            </View>
            )
          }
        )
      )
}

