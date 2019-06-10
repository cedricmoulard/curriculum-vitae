module.exports = {
  name: "template-ui",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/template-ui",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
