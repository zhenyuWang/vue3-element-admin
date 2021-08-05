import store from "../index";
test("apiUserInfo", () => {
  expect(store).not.toBeNull();
  expect(store).not.toBeUndefined();
});
