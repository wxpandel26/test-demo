import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  const wrapper = mount(Counter);
  it("renders props.msg when passed", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("count++", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(2);
  });
});
