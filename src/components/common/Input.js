import React from 'react';
import {TextInput , View, Text} from 'react-native';

const Input = ({label,value,onChangeText}) => {
    return(
        <View>
            <Text>{label}</Text>
            
            <TextInput
                value={value}
            
                onChangeText={(text) =>{console.log(text);}}
                style={{height:20,width:100 }}
            />
        </View>
    );

};
// const styles = {
//     inputStyle:{

//     },
//     labelStyle:{

//     },
//     containerStyle:{
        
//     }

// };
export {Input};