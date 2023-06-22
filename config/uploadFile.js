import 'dotenv/config.js'

const config = {
    BucketName: process.env.BUCKET_NAME || '',
    Enpoint: process.env.ENDPOINT || ''

}

export default config