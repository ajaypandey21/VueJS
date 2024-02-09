const { createApp, ref } = Vue;
createApp({
  //Optional API to Generate Script
  data() {
    return {
      showPara: "True",
      name: "Ajay",
      designation: "SD",
      count: ref(0),
    };
  },
  // to define Functions Corressponding to components
  methods: {
    onClick() {
      this.count++;
    },
    dec() {
      this.count--;
    },
    toggleVis() {
      this.showPara = !this.showPara;
    },
  },
}).mount("#root");
