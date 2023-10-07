import React, {Component} from "react";
import {SafeAreaView, View, Text, StyleSheet} from "react-native";
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
    }
  });

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        };
    }

    componentDidMount = () => {
        this.setState({todos:getTodos()});
    }

    render() {
        const {todos} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>To-do list</Text>
                <TodoList todos={this.state.todos}/>
            </View>
        )
    }
}

export default MainScreen;