Vue.component("check-btn", {
  data: function () {
    return {
      activeIndex: null,
      options: [
        {
          text: "Never",
          value: 1,
        },
        {
          text: "Seldom",
          value: 2,
        },
        {
          text: "Sometimes",
          value: 3,
        },
        {
          text: "Frequently",
          value: 4,
        },
        {
          text: "Always",
          value: 5,
        },
      ],
    };
  },
  methods: {
    onClickItem(index, item) {
      this.activeIndex = index;

      console.log(this.$props.index);
      this.$emit("change", {
        index: this.$props.index, // 传进来的索引
        value: item.value, // 分数
      });
      this.$emit("update:value", item.value);
    },
  },
  props: ["index", "value"],
  template: `
    <div class="check-btn">
      <div
        v-for="(item, index) in options"
        :key="index"
        :class="['item', activeIndex == index ? 'active' : '']"
        @click="onClickItem(index, item)"
      >
        {{ item.text }}
      </div>
    </div>
    `,
});
