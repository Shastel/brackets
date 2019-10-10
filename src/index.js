module.exports = function check(str, bracketsConfig) {
    const patternGlued = [];

    bracketsConfig.forEach(patternChunk => patternGlued.push(patternChunk.join('')));

    const cutStr = (str) => {
        let buffStr = str;

        for(let i = 0; i < patternGlued.length; i++) {
            buffStr = buffStr.replace(patternGlued[i], '');
        }

        return str === buffStr ? buffStr : cutStr(buffStr);
    }

    const res = cutStr(str);

    return res === '' ? true : false;
}
