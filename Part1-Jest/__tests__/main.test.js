const formatVolumeIconPath = require("../assets/scripts/main");
const sum = require("../assets/scripts/main");

describe("Test volume icons", () => {
  test("Test icon level 3 above volume 66", () => {
    expect(formatVolumeIconPath(67)).toContain("level-3");
  });

  test("Check icon level 2 at volume 66", () => {
    expect(formatVolumeIconPath(66)).toContain("level-2");
  });

  test("Checks icon level 1 at volume 33", () => {
    expect(formatVolumeIconPath(33)).toContain("level-1");
  });

  test("Checks icon level 0 at volume 0", () => {
    expect(formatVolumeIconPath(0)).toContain("level-0");
  });
});
