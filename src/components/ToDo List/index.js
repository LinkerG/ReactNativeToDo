import { Text, View, StyleSheet } from 'react-native'
import React, { Fragment } from 'react'

const styles = StyleSheet.create({
    listItem:{ 
        borderWidth:1,
        margin:5,
        width:'80%',
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 10
    },

    text:{
        padding:5,
        fontWeight: 'bold'
    },

    textDone:{
        color: 'gray',
        textDecorationStyle: 'dashed',
        fontWeight: 'normal'
    }
})

const TodoList = ({
    todos
}) => (
    <Fragment>
        {todos.map(
            todo => (
                <View style={styles.listItem} key={todo.text + "view"}>
                    <Text key={todo.text + "guion"}>-</Text>
                    <Text style={[styles.text, todo.done && styles.textDone]} key={todo.text}>
                        {todo.text}
                        </Text>
                </View>
            ),
        )}
    </Fragment>
);

export default TodoList;