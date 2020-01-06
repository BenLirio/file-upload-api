// Require AWS Software Development Kit
const AWS = require('aws-sdk')
// Not sure is we need this
// UUID Package
const uuid = require('uuid')

// Define bucket name to use
const bucketName = 'seibenjamin'

// Create S3 object
const s3 = new AWS.S3()


console.log(s3)