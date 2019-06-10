module.exports = {
  name: "experience-ui",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/experience-ui",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
