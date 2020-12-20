const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: "",
            tasks: [],
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
    },
});

app.mount("#user-tasks");
