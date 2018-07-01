import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percents = (dashOffset / 100) * (100 - this.skillPercents);
      
      window.addEventListener("scroll", function () {
        const positionTop = circle.getBoundingClientRect().top;
        const _top = positionTop.toFixed();
        console.log(_top);
        if (_top > 450 && _top < 650) {
          circle.style.strokeDashoffset = percents;
        }
      })
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
    console.log(data);
  },
  template: "#skills-list"
});
