/**
 * 生成指定长度的随机字符串
 * @param length - 要生成的随机字符串的长度
 * @returns 生成的指定长度的随机字符串，该字符串由大小写字母和数字组成
 */
export function generateRandomString(length: number): string {
    // 定义包含所有可能字符的字符串
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // 初始化结果字符串
    let result = "";
    // 获取字符集的长度
    const charactersLength = characters.length;
    // 循环指定的次数
    for (let i = 0; i < length; i++) {
        // 从字符集中随机选择一个字符，并添加到结果字符串中
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    // 返回生成的随机字符串
    return result;
}

/**
 * 生成当前的毫秒级时间戳
 * @returns 当前的毫秒级时间戳
 */
export function generateCurrentTimestamp(): number {
    return new Date().getTime();
}
