const hashmapLeftJoin = require("./hashLeft");

describe(" Testing the left join to the hashmap ", () => {
  let map1 = new Map();
  map1.set("marah", 1);
  map1.set("jaradat", 2);
  map1.set("webdevelop", 3);
  map1.set("javascript", 4);
  let map2 = new Map();
  map2.set("marah", "A");
  map2.set("Sara", "B");
  map2.set("farah", "C");
  map2.set("javascript", "D");

  let map3 = new Map();
  map3.set("bee", "A");
  map3.set("eggs", "B");
  map3.set("toast", "C");
  map3.set("turkey", "D");

  it("can successfully left join 2 hashmaps and return the result", () => {
    let joinedMaps = hashmapLeftJoin(map1, map2);

    expect(joinedMaps).toEqual([
      ["marah", 1, "A"],
      ["jaradat", 2, null],
      ["webdevelop", 3, null],
      ["javascript", 4, "D"],
    ]);
  });

  it("can successfully left join 2 hashmaps where there are no like values in right hashmap", () => {
    let joinedMaps = hashmapLeftJoin(map1, map3);

    expect(joinedMaps).toEqual([
      ["marah", 1, null],
      ["jaradat", 2, null],
      ["webdevelop", 3, null],
      ["javascript", 4, null],
    ]);
  });

  it("can handle 1 or 2 empty hashmaps", () => {
    let joinedMaps1 = hashmapLeftJoin(new Map(), new Map());
    let joinedMaps2 = hashmapLeftJoin(map1, new Map());

    expect(joinedMaps1).toEqual([]);
    expect(joinedMaps2).toEqual([
      ["marah", 1, null],
      ["jaradat", 2, null],
      ["webdevelop", 3, null],
      ["javascript", 4, null],
    ]);
  });

  it("can successfully left join 2 hashmaps where the 2nd hashmap's values all exist in the first hashmap", () => {
    let joinedMaps = hashmapLeftJoin(map1, map1);
    expect(joinedMaps).toEqual([
      ["marah", 1, 1],
      ["jaradat", 2, 2],
      ["webdevelop", 3, 3],
      ["javascript", 4, 4],
    ]);
  });
});
