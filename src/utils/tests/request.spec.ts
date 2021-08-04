import request from "../request";
test("apiUserInfo", () => {
  expect(request).not.toBeNull();
  expect(request).not.toBeUndefined();
});
