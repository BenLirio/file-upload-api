// Require AWS Software Development Kit
const AWS = require('aws-sdk')
const credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;
// Not sure is we need this
// UUID Package
const uuid = require('uuid')

// Define bucket name to use
const bucket = 'seibenjamin'

// Create S3 object
const s3 = new AWS.S3()

// Create options for putObject
const params = {
  Bucket: bucket,
  Key: 'file-test.txt',
  Body: 'Hello World!',
  ACL: 'public-read'
}


s3.upload(params).promise()
  .then(console.log)
  .catch(console.error)
