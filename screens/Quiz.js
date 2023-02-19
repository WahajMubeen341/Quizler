
import { useEffect, useState } from 'react';
import {View, Text, Touchable, TouchableOpacity, StyleSheet} from 'react-native';

export default function Quiz({navigation}) {

  const[quiz, setQuiz] = useState();
  const [ques, setQues] = useState();
  var [currentQuestion, setCurrentQuestion] = useState(0);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("res1", data.results[currentQuestion].category);
    setQuiz(data.results)

    setQues(data.results[currentQuestion])
    console.log("quiz 0= ", data.results[currentQuestion]);
    // if(quiz !== null  && quiz !== undefined && quiz.length > 0){
    //   setQues = quiz[currentQuestion];
    //   console.log("quiz = ", quiz[currentQuestion]);
    // }

  };
  useEffect(()=>{
    getQuiz();
  }, []);


  function nextQuestion(){
    console.log("Bringnext");
    setCurrentQuestion(currentQuestion + 1);
    if(quiz !== null && quiz.length > currentQuestion){
      console.log("quiz length > current = " , quiz.length +"<" + currentQuestion);
      setQues(quiz[currentQuestion]);
    }
    else{
      console.log("if failed");
      navigation.navigate("Result");
    }

  }

  return (
    <View style={styles.container}>

    {ques && (

      <View style = {styles.parent}>
      <View style={styles.top}>
        <Text style = {styles.questions}>{ques.question}</Text>
        </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>{ques.correct_answer}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>{ques.incorrect_answers[0]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>{ques.incorrect_answers[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>{ques.incorrect_answers[0]}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>SKIP</Text>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.button} onPress={nextQuestion}>
          <Text style = {styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Result")}>
          <Text>END</Text>
        </TouchableOpacity> */}
      </View>
      </View>
      )

      }
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    paddingTop: 40,
    paddingHorizontal: 30,
    height: '100%'
  },
  top:{
    marginVertical: 16
  },

  options:{
    marginVertical: 16,
    flex: 1,
    fontSize: 18
  },

  optionsText:{fontSize: 18,
  fontWeight: '500',
  color: 'white'}
,
optionButton:{
  paddingVertical: 12,
  marginVertical: 6,
  paddingHorizontal: 12,
  backgroundColor: '#34A0A4',
  borderRadius: 10
},
  bottom:{
    paddingVertical: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  button:{
    backgroundColor: '#1A759F',
    padding: 12,
    borderRadius: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },

  questions:{
    fontSize: 26,
    color: 'black'
  },

  parent:{
    height: '100%'
  }
});
