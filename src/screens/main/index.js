import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import TodoList from "../../components/ToDo List";
import { getTodos } from "../../data/todos";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    text:{
        padding:4,
        fontWeight: 'bold',
        borderWidth: 1,
        width:'80%',
        flexDirection: "row",
        alignItems: 'center',
    },
  });

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            newToDo: null,
        };
    }

    componentDidMount = () => {
        this.setState({todos:getTodos()});
    }

    render() {
        const {todos, newToDo} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>To-do list</Text>
                <TextInput 
                    style={styles.text}
                    placeholder="Nueva tarea: "
                    value={newToDo}
                    onChangeText={todo => this.setState({newToDo: todo})}
                    autoCapitalize="sentences"
                    clearButtonMode="always"
                    returnKeyType="done"
                />
                <TodoList todos={todos} />
            </View>
        )
    }
}

export default MainScreen;