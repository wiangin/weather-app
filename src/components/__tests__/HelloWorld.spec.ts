import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import WeatherComponent from "../../service/WeatherComponent.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(WeatherComponent, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
