module.exports = {
  name: "experience-interface",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/experience-interface",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
