module.exports = {
  name: 'curriculum-vitae',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/curriculum-vitae',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
