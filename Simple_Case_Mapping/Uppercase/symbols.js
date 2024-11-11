module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))