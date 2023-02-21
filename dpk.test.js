const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return '0' if there is no event", () => {
    const result = deterministicPartitionKey();
    expect(result).toEqual("0");
  });

  it("should return the event partition key if event is provided", () => {
    const mockEvent = {
      partitionKey: "mockPartitionKey",
    };
    const result = deterministicPartitionKey(mockEvent);
    expect(result).toEqual("mockPartitionKey");
  });

  it("should hash the event data if no partition key is provided", () => {
    const mockEvent = {
      mockProp: "myData",
    };
    const expectedHash =
      "acd58c7449bea6c49c934eac682e143e33e7fb7d2684d5c232565185685b84e3ead9c3e75e2dfda34d280e5bd1cffb2386422886641cf98a8c6eb895756b5106"; // copied from test results
    const result = deterministicPartitionKey(mockEvent);
    expect(result).toEqual(expectedHash);
  });

  it("should handle non-string events", () => {
    const mockEvent = {
      mockData: {
        nestedData: "hello",
      },
    };
    const expectedHash =
      "0400b06ccff1b9c68232e2a8953ff6b3626dd1c81da8e2b98ebfab7fd9b411ffd52517d183dbc4fc60060941bef9673eb2a11811a0513a03b2feaabb1decd4f1"; // copied from test results
    const result = deterministicPartitionKey(mockEvent);
    expect(result).toEqual(expectedHash);
  });

  it("should truncate partition key if it's longer than 300 characters", () => {
    const mockEvent = {
      partitionKey: "xpto".repeat(100),
    };
    const expectedHash =
      "06c17694c5ca931a8d3493c485ece343523853fc25e95c8ed3d9cc7f6138f4499b6bf9c59753d3aab927ec0834e755feaae1b60310af6b1ff31343d325edf718"; // copied from test results
    const result = deterministicPartitionKey(mockEvent);
    expect(result).toEqual(expectedHash);
  });
});
