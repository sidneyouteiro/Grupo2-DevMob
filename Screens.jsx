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
/*   const [Pontuacao,setPontuacao] = useState(0);
  const [Item,setItem] = useState("");
  const [Resultados,setResultados] = useState([]);
  const [expressoes]
    useEffect(()=>{
      let chaves = Object.keys(expressoes);
      console.log(chaves);
      setItem(chaves.pop());
      console.log(Item);
      setResultados(expressoes[Item]);
    },[]); */

/*     if (Item != undefined){
      return (
        <View style={Styles.container}>
            <Text>Sua pontuação foi de {Pontuacao}</Text>
            <TouchableOpacity style={Styles.TouchableOpacityButton} >
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>
        </View>
      )
    } */
    //else
      return (
        questoes.map((item, index) => {
          
            return(
              
              (indexQuestao == index) && <View style={Styles.container}>
              <TouchableOpacity style={Styles.TouchableOpacityButton} /* onPress={()=>{  }} */>
                <Text style={Styles.ButtonText}>{item.expressao}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                setIndexQuestao(indexQuestao+1)
               }} >
                <Text style={Styles.ButtonText}>{item.certa}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                setIndexQuestao(indexQuestao+1)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa1}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                setIndexQuestao(indexQuestao+1)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa2}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ 
                setIndexQuestao(indexQuestao+1)
               }}>
                <Text style={Styles.ButtonText}>{item.alternativa3}</Text>
              </TouchableOpacity>
            </View>
            )
          }
        )
      )
}

