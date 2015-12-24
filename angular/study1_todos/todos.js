var app = angular.module('App',[]);
app.controller('todoController',['$scope',function($scope){
    $scope.todoList={
        remain:function(){
            var count = 0;
            /*$scope.todoList.todos.forEach(function(todo){
                count+=todo.done?1:0;
            });*/
            angular.forEach($scope.todoList.todos,function(todo,index,a,b){
                console.log(todo);
                console.log(index);
                console.log(a===$scope.todoList.todos);
                console.log(b);
                count+=todo.done?1:0;
            });
            return count;
        },
        todos:[
            {
                text:"learn angular",
                done:false
            },
            {
                text:"build an angular app",
                done:false
            }
        ],
        addTodo:function(){
            if(!$scope.todoList.todoText)return;
            $scope.todoList.todos.push({text:$scope.todoList.todoText,done:false});
            $scope.todoList.todoText=''
        },
        todoText:'',
        add:function(e){//我就不该写这个函数
            if(e.keyCode==13){
                e.preventDefault();
                $scope.todoList.addTodo();
            }
        }
    };


}]);