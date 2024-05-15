#!/usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
// while(conditions){
//     let addTask=await inquirer.prompt([{
//         name:"task",
//         type:"input",
//         message:("What would you like to add in your Todos?")
//     }]);
//     todoList.push(addTask.task);
//     console.log(`\n"${addTask.task}"Task added in todo-List successfully\n`);
//     let addMoreTask=await inquirer.prompt([{
//         name:"addmore",
//         type:"confirm",
//         message:"Do you want to add more task?",
//         default:"false"
//     }]);
//     conditions=addMoreTask.addmore
//  }
// console.log("\nYour updated todo-List:,todoList");
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-List",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What would you like to add in your Todos?",
        },
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task}task added successfuly in Todo-List`);
};
// function to view al Todo-List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List:\n");
    todoList.forEach((task, index) => {
        console.log(`${index}:${task}`);
    });
};
// fuction to delete a task from a list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index no.'of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n${deletedTask} this task has been successfuly deleted from you Todo-List`);
};
// funtion to update task in Todo-List
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update in your Todo-List:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name:",
        }]);
    todoList[update_task_index.index] = update_task_index.new_task;
    console.log(`\n Task at index no.${update_task_index.index} updated successfully[for updated list check option: "view Todo-List"]`);
};
main();
