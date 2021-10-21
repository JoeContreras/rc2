const os = require('os');
const chilkat = require('@chilkat/ck-node14-win64');
if (os.platform() === 'win32') {
    if (os.arch() === 'ia32') {
        const chilkat = require('@chilkat/ck-node11-win-ia32');
    } else {
        const chilkat = require('@chilkat/ck-node11-win64');
    }
} else if (os.platform() === 'linux') {
    if (os.arch() === 'arm') {
        const chilkat = require('@chilkat/ck-node11-arm');
    } else if (os.arch() === 'x86') {
        const chilkat = require('@chilkat/ck-node11-linux32');
    } else {
        const chilkat = require('@chilkat/ck-node11-linux64');
    }
} else if (os.platform() === 'darwin') {
    const chilkat = require('@chilkat/ck-node11-macosx');
}

function DecryptString(encStr) {

    const crypt = new chilkat.Crypt2();
    crypt.CryptAlgorithm = "rc2";

    crypt.CipherMode = "cbc";

    crypt.KeyLength = 128;

    crypt.Rc2EffectiveKeyLength = 128;

    crypt.PaddingScheme = 0;

    crypt.EncodingMode = "hex";

    const ivHex = "0001020304050607";
    crypt.SetEncodedIV(ivHex,"hex");
    const keyHex = "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F";
    crypt.SetEncodedKey(keyHex,"hex");

    // Now decrypt:
    const decStr = crypt.DecryptStringENC(encStr);
    // console.log(decStr);

    return decStr
}
module.exports= DecryptString;

// chilkatExample();
