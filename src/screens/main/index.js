import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import TodoList from "../../components/ToDo List";
import { getTodos, updateToDo, addTodo, newTodo, deleteTodo} from "../../data/todos";

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
    buttonRow:{
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "black",
        maxWidth: "80%"
    },
    addButton: {
        color: "white",
        backgroundColor: "black"
    }
  });

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            newTodo: null,
        };
    }

    componentDidMount = () => {
        this.setState({todos:getTodos()});
    }

    handleAdd = () => {
        const {todos, newTodo} = this.state;
        const newList = addTodo(todos, {text: newTodo});
        this.setState({todos: newList, newTodo: null});
    }

    render() {
        const {todos, newTodo} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>To-do list</Text>
                <View style={styles.buttonRow}>
                <TextInput 
                    //style={}
                    placeholder="Nueva tarea: "
                    value={newTodo}
                    onChangeText={todo => this.setState({newTodo: todo})}
                    autoCapitalize="sentences"
                    clearButtonMode="always"
                    returnKeyType="done"
                />
                <Button 
                    title="Añadir"
                    style={styles.addButton}
                    onPress={this.handleAdd}
                />
                </View>
                <TodoList todos={todos} />
            </View>
        )
    }
}

export default MainScreen;