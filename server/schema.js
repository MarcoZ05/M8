const mongoose = require("mongoose");
const { Schema } = mongoose;

function initializeSchema() {
  const UserSchema = new Schema({
    name: String,
    password: String,
    avatarSrc: String,
    reports: [{ reason: String, date: Date, info: [String] }],
  });
  mongoose.model("User", UserSchema);

  const ThreatSchema = new Schema({
    userSchema: UserSchema,
    ranks: [String],
    languages: [String],
    platform: String,
    date: Date,
    other: [String],
  });
  mongoose.model("Threat", ThreatSchema);

  return { UserSchema, ThreatSchema };
}

module.exports = { initializeSchema };
