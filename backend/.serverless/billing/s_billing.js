
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'shehanp12',
  applicationName: 'backend',
  appUid: 'dVCTTKR7n2KSNmH2XT',
  orgUid: 'c81da065-b777-4a43-a3f1-45f870a9d6f8',
  deploymentUid: '633a7704-5917-45bb-a226-5c1aa14aee70',
  serviceName: 'libraryManagmentSystem',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'prod',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '5.4.3',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'libraryManagmentSystem-prod-billing', timeout: 6 };

try {
  const userHandler = require('./billing.js');
  module.exports.handler = serverlessSDK.handler(userHandler.main, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}