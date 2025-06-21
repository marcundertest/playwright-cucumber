// This file contains test data, such as user credentials, URLs, etc.

require("dotenv").config();

export const testData = {
  url: "https://www.saucedemo.com",
  users: {
    standardUser: {
      username: process.env.STANDARD_USER_USERNAME,
      password: process.env.STANDARD_USER_PASSWORD,
    },
    lockedOutUser: {
      username: process.env.LOCKED_OUT_USER_USERNAME,
      password: process.env.LOCKED_OUT_USER_PASSWORD,
    },
    problemUser: {
      username: process.env.PROBLEM_USER_USERNAME,
      password: process.env.PROBLEM_USER_PASSWORD,
    },
    performanceGlitchUser: {
      username: process.env.PERFORMANCE_GLITCH_USER_USERNAME,
      password: process.env.PERFORMANCE_GLITCH_USER_PASSWORD,
    },
    errorUser: {
      username: process.env.ERROR_USER_USERNAME,
      password: process.env.ERROR_USER_PASSWORD,
    },
    visualUser: {
      username: process.env.VISUAL_USER_USERNAME,
      password: process.env.VISUAL_USER_PASSWORD,
    },
  },
};
