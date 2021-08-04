import { apiUserInfo } from "../user";
test("apiUserInfo", () => {
  expect(apiUserInfo).not.toBeNull();
  expect(apiUserInfo).not.toBeUndefined();
});
