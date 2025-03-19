/**
 * ����ָ�����ȵ�����ַ���
 * @param length - Ҫ���ɵ�����ַ����ĳ���
 * @returns ���ɵ�ָ�����ȵ�����ַ��������ַ����ɴ�Сд��ĸ���������
 */
export function generateRandomString(length: number): string {
    // ����������п����ַ����ַ���
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // ��ʼ������ַ���
    let result = "";
    // ��ȡ�ַ����ĳ���
    const charactersLength = characters.length;
    // ѭ��ָ���Ĵ���
    for (let i = 0; i < length; i++) {
        // ���ַ��������ѡ��һ���ַ�������ӵ�����ַ�����
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    // �������ɵ�����ַ���
    return result;
}

/**
 * ���ɵ�ǰ�ĺ��뼶ʱ���
 * @returns ��ǰ�ĺ��뼶ʱ���
 */
export function generateCurrentTimestamp(): number {
    return new Date().getTime();
}
