import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

import {
  addTodoItem,
  minusTodoItem,
  finishTodoItem,
} from '../../actions';

class TodoList extends Component {
  state = {
    text: '',
  }
  handleChangeValue = (val, id) => {
    this.props.onChangeTodoItemState({ id, complate: val });
  }
  handleAddTodo = () => {
    this.props.onAddTodoItem(this.state.text);
    this.setState({ text: '' });
  }
  renderTodoList = (list) =>
    list.map((item, index) =>
      <View style={styles.todoItem} key={index}>
        <Switch
          value={item.complate}
          onValueChange={(val) => this.handleChangeValue(val, item.id)}
        />
        <Text style={styles.todoName}>{item.text}</Text>
        <Button
          title="删除"
          onPress={() => this.props.onDeleteTodoItem(item.id)}
        />
      </View>
    );

  render() {
    const { todoList } = this.props;
    console.log(todoList);
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="输入代办事项"
          value={this.state.text}
          onChangeText={(val) => this.setState({ text: val })}
        />
        <Button
          title="添加"
          onPress={this.handleAddTodo}
        />
        <View style={styles.todoList}>
          {this.renderTodoList(todoList)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F7F8FA',
  },
  todoList: {
    marginTop: 20,
  },
  todoName: {
    width: 150,
    textAlign: 'left',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodoItem: (val) => dispatch(addTodoItem(val)),
    onDeleteTodoItem: (val) => dispatch(minusTodoItem(val)),
    onChangeTodoItemState: (val) => dispatch(finishTodoItem(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
