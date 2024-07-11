const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    setAlert() {
      alert("This is an alert!");
    },
  },
});

app.mount("#assignment");
