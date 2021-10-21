const crypto = require('crypto');
algo = 'rc2-cbc'
key = '1234567890'
iv = 'someInit'

keyBuffer = new Buffer(key)
ivBuffer = new Buffer(iv)

cipher = crypto.createCipheriv(algo, keyBuffer, ivBuffer)
textBuffer = new Buffer('HelloWorld')
encrypted = cipher.update(textBuffer)
encryptedFinal = cipher.final()
encryptedText = encrypted.toString('base64') + encryptedFinal.toString('base64')

console.log (encryptedText)
