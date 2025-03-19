/**
 * ����ָ�����ȵ�����ַ���
 * @param length - Ҫ���ɵ�����ַ����ĳ���
 * @returns ���ɵ�ָ�����ȵ�����ַ��������ַ����ɴ�Сд��ĸ���������
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
 * ���ɵ�ǰ�ĺ��뼶ʱ���
 * @returns ��ǰ�ĺ��뼶ʱ���
 */
export function generateCurrentTimestamp(): number {
    return new Date().getTime();
}
