module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))