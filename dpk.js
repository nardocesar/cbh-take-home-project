const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event?.partitionKey;
  let partitionKey;

  if (!candidate) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  partitionKey =
    typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = crypto
      .createHash("sha3-512")
      .update(partitionKey)
      .digest("hex");
  }

  return partitionKey;
};

exports.deterministicPartitionKey = createPartitionKey;
