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
  const [Pontuacao,setPontuacao] = useState(0);
  const [Item,setItem] = useState("");
  const [Resultados,setResultados] = useState([]);
  /* const [expressoes] */
    useEffect(()=>{
      let chaves = Object.keys(expressoes);
      console.log(chaves);
      setItem(chaves.pop());
      console.log(Item);
      setResultados(expressoes[Item]);
    },[]);
    if (Item == undefined){
      return (
        <View style={Styles.container}>
            <Text>Sua pontuação foi de {Pontuacao}</Text>
            <TouchableOpacity style={Styles.TouchableOpacityButton} /*onPress={()=>{  }}*/>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>
        </View>
      )
    }
    else
      return (
        <View style={Styles.container}>
            <Text> {Item} </Text>

            <TouchableOpacity style={Styles.TouchableOpacityButton} /* onPress={()=>{  }} */>
              <Text style={Styles.ButtonText}>{Resultados[0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.TouchableOpacityButton} /* onPress={()=>{  }} */>
              <Text style={Styles.ButtonText}>{Resultados[1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.TouchableOpacityButton} /*onPress={()=>{  }}*/>
              <Text style={Styles.ButtonText}>{Resultados[2]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.TouchableOpacityButton} /*onPress={()=>{  }}*/>
              <Text style={Styles.ButtonText}>{Resultados[3]}</Text>
            </TouchableOpacity>
        </View>
      )
}

