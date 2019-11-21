<template>
  <div id="container">
     <div class="menu">
     <router-link to="/order"><p>注文画面に飛ぶ</p></router-link>
     </div> 
     <div id="todo-list">
       <table>
         <tr>
           <th id="todo-form" colspan="4">
             <input v-model="todoTitle" type="text" placeholder="タスクを追加してください">
           </th>
           <th>
	     <a v-on:click="addTodo()" class="button button-blue" href="#01">追加</a>
	   </th>
	   <th>
	     <div class="reload"><head ><link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></head><i class="fas fa-redo"></i></div>
	   </th>
	 </tr>
	    <tr v-for="todo in todoList" v-bind:class='{complete: todo.status}'>
		<td>{{ todo.id }}</td>
		<td>{{ todo.date }}</td>
		<td>{{ todo.todo }}</td>
		<td class="text-right"><a v-on:click="changeStatus(todo)" class="button button-purple" href="#01">{{ todo.status | statusLabel}}</a></td>
		<td><a v-on:click="deleteTodo(todo.id)" class="button button-pink" href="#01"><i class="fa fa-close" aria-hidden="true"></i></a></td>
	    </tr>
	</table>
    </div>
  </div>
</template>

<script>
import { mapActions,mapMutations,mapState } from 'vuex'

export default {
  name: 'OrderTop',
  data: ()=> {
    return {
      todoList: [],
      todoTitle:'',
      id:1
    }
  },
  methods: {
    getCurrentDate :function () {
      var date = new Date();
	return date.getFullYear() + '/' +  (date.getMonth() + 1) + '/' + 
	  date.getDate() + ' ' + date.getHours() + ':' + 
	  date.getMinutes() + ':' + date.getSeconds(); 
    },
    addTodo :function () {
      this.todoList.push({
      id: this.id,
      date: this.getCurrentDate(),
      todo: this.todoTitle,
      status: false
      });
      this.id++;
      this.todoTitle="";
    },
    deleteTodo :function (todoId) {
      var todoList = this.todoList;
      todoList.forEach(function(todo, index) {
        if(todo.id === todoId) {
	  todoList.splice(index, 1);
        }
      });
    },
    changeStatus: function (todo) {
      todo.status = !todo.status;
    },
  }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

input[type="text"]:focus {
    outline: 0;
}
::placeholder {
    color:#819ae2;
}

body {
    background:#bbcae4;
    /*color:#333;*/
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    /*font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;*/
}

a {
    text-decoration:none;
    font-size:20px;
}

table{
    width:100%;
    margin:0 auto;
    border-radius:5px;
    border-spacing: 0;
    overflow:hidden;
}

tr:nth-child(even) {
    background-color: #ecf5fb;
}

th{
    background: #667fca;
    color:#FFFFFF;
    padding:15px;
    text-align:left;
}

td{
    padding:13px;
}

#todo-list {
    max-width:950px;
    background:#FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,.2);
    border-radius:5px;
    margin:0 auto;
}

#todo-form input {
    padding:11px;
    width:100%;
    border-radius:5px;
    background: #5972bb;
    border: 1px solid #4d67b3;
    color:#d9e3ff;
    font-size: 105%;
}

.complete {
    text-decoration: line-through;
    color:#AAAAAA;
}

.button {
    display: inline-block;
    padding: 0.6em 1.1em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 5px;
    margin-left:5px;
}

.option-button {
    display: inline-block;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-radius: 5px;
    margin-left:5px;
    background: #4a66b5;
    border-bottom: solid 1px #325196;
    padding: 9px 14px;
    font-size: 105%;

}
.button-pink {
    background:#c55f85;
    border-bottom: solid 2px #8c3e7f;
}

.button-purple {
    background:#925dc1;
    border-bottom: solid 2px #5e4586;
}

.button-blue {
    background: #4a66b5;
    border-bottom: solid 2px #325196;
    padding: 7px 20px;
    font-size: 105%;
}

.button-brown {
    background: #90532f;
    border-bottom: solid 1px #325196;
    padding: 7px 20px;
    font-size: 105%;
}

.text-right {
    text-align:right;
}

.option-button i {
    margin-right:4px;
}

.menu{
  background-color: gray;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  font-size: 20px;
}

a{text-decoration:none;}
a:link{color:white;}
a:visited{color:white;}
a:hover{color: white;}
a:active{color: white;}

.reload{
  text-align: center;
}


</style>
