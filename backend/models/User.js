import mongoose from "mongoose";
// import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
  {
    avatar: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
const User = mongoose.model("user", userSchema);

export default User;
