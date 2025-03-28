/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe("Find a random element of the array - randomSelector", function() {
  it("Defines randomSelector", function() {
    expect(typeof randomSelector).toBe("function");
  });

  it("Return undefined if the array is empty", function() {
    expect(randomSelector([])).toBe(undefined);
  });

  it("Return undefined if the array is empty", function() {
    expect(randomSelector([])).toBe(undefined);
  });

  it("Return the element of a single value array", function() {
    expect(randomSelector(["ab"])).toBe("ab");
  });

  it("Should return an element of the array", function() {
    var array = ["ab", "zz", "zx", "zy"];

    expect(array.indexOf(randomSelector(array))).toBeGreaterThan(-1);
  });

  it("Return a random element of the array", function() {
    var spy = spyOn(Math, "random").and.returnValue(0.5);

    expect(
      randomSelector(["a", "ab", "abb", "aab", "aaa", "sda", "kas"])
    ).toEqual("aab");
    spy.and.returnValue(0.1);

    expect(
      randomSelector(["a", "ab", "abb", "aab", "aaa", "sda", "kas"])
    ).toEqual("a");
    spy.and.returnValue(0.9);

    expect(
      randomSelector(["a", "ab", "abb", "aab", "aaa", "sda", "kas"])
    ).toEqual("kas");
  });
});

describe("Pick a random mistery - pickMistery", function() {
  it("Defines pickMistery", function() {
    expect(typeof pickMistery).toBe("function");
  });

  it("Return an object", function() {
    expect(Object.prototype.toString.call(pickMistery())).toEqual(
      "[object Object]"
    );
  });

  it("Return an object with 3 properties", function() {
    expect(Object.keys(pickMistery()).length).toEqual(3);
  });

  it("Return a suspect in the suspect property of the object", function() {
    let suspect = JSON.stringify(pickMistery().suspect);
    expect(
      charactersArray.findIndex(el => JSON.stringify(el) === suspect)
    ).toBeGreaterThan(-1);
  });

  it("Return a weapon in the weapon property of the object", function() {
    let weapon = JSON.stringify(pickMistery().weapon);
    expect(
      weaponsArray.findIndex(el => JSON.stringify(el) === weapon)
    ).toBeGreaterThan(-1);
  });

  it("Return a room in the room property of the object", function() {
    let room = JSON.stringify(pickMistery().room);
    expect(
      roomsArray.findIndex(el => JSON.stringify(el) === room)
    ).toBeGreaterThan(-1);
  });
});

describe("Reveal the mistery - revealMistery", function() {
  it("Defines revealMistery", function() {
    expect(typeof revealMistery).toBe("function");
  });

  it("Return a string", function() {
    expect(
      typeof revealMistery({
        suspect: { first_name: "aa", last_name: "abc" },
        weapon: { name: "abd" },
        room: { name: "abb" }
      })
    ).toEqual("string");
  });

  it("Return <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!!!!", function() {
    expect(
      revealMistery({
        suspect: { first_name: "Victor", last_name: "Plum" },
        weapon: { name: "poison" },
        room: { name: "Billiard Room" }
      })
    ).toEqual(
      "Victor Plum killed Mr. Boddy using the poison in the Billiard Room!!!!"
    );
  });
});
