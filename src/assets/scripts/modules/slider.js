import Vue from "vue";
import { assertJSXClosingElement } from "babel-types";

const info = {
  template: "#slider-info",
  props: {
    work: Object
  },
  methods: {
    callback(eventName) {
    },
    enterHandler(el, done) {
      const sentence = el.innerText.trim();
      const wrapped = sentence.split('').map(item => {
        return `
          <span class="${item === ' ' ? 'whitespace' : ''}">${item}</span>
        `;
      }).join("");

      el.innerHTML = wrapped;
      
      const words = Array.from(el.children);
      let i = 0;
      function animate(words) {
        const currentLetter = words[i];

        let timer = setTimeout(() => {
          animate(words);
        }, 10);
        currentLetter.classList.add('bounceInDown');
        i++;

        if (i >= words.length) {
          clearTimeout(timer);
          done();
        }
      }
      animate(words);

      
    }
  }
};

const display = {
  template: "#slider-display",
  props: {
    work: Object
  }
};

const buttons = {
  template: "#slider-buttons",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getReqImage(direction) {
      const worksArray = [...this.works];

      switch (direction) {
        case 'prev':
          const lastItem = worksArray[worksArray.length - 1];
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;

        case 'next':
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }
      return worksArray[this.currentIndex];
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    info, display, buttons
  },
  data: {
    works: [],
    currentWork: {},
    currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
      this.currentWork = this.works[value];
    }
  },
  created() {
    this.works = require("../../../data/works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case 'next':
          this.currentIndex = this.currentIndex + 1;
          break;
        case 'prev':
          this.currentIndex = this.currentIndex - 1;
          break;
      }
    }
  },
  template: "#slider"
});
