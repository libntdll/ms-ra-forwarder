/**
 * 生成指定长度的随机字符串
 * @param length - 要生成的随机字符串的长度
 * @returns 生成的指定长度的随机字符串，该字符串由大小写字母和数字组成
 */
export function generateRandomString(length: number): string {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
}

/**
 * 生成当前的毫秒级时间戳
 * @returns 当前的毫秒级时间戳
 */
export function generateCurrentTimestamp(): number {
    return new Date().getTime();
}
