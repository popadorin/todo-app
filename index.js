let app = new Vue({
    el: '#app',
    data: {
        todoList: [],
        todoInput: '',
    },
    methods: {
        addTodo: function () {
            if (this.todoInput === '') {
                return;
            }

            let newItem = {
                isDone: false,
                text: this.todoInput
            };
            this.todoList.push(newItem);
            this.todoInput = '';
        },

        removeTodo: function (index) {
            this.todoList.splice(index, 1);
        },

        markTodo: function (index) {
            let item = this.todoList.splice(index, 1)[0];
            item.isDone = !item.isDone;

            if (item.isDone) {
                this.todoList.push(item);
            } else {
                this.todoList.unshift(item);
            }
        },

        onEnterClick: function (event) {
            if (event.keyCode === 13) { // 13 - Enter
                this.addTodo();
            }
        }
    }
})