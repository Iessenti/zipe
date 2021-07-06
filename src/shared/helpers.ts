export function fileNameFormater(name: string) {
    let essentialName = name.split('.').slice(0, -1).join('.')
    let fileExtensino = name.split('.').pop()
    if (essentialName.length > 10) {
        name = essentialName.substring(0, 6).concat(`...${essentialName[essentialName.length - 1]}.${fileExtensino}`);
    }
    return name
}

export function getWidthForInput(amount: number) {
    let digits = amount.toString().length;
    if (digits === 1) {
        return '20px'
    } else if (digits === 2) {
        return '30px'
    } else if (digits === 3) {
        return '40px'
    } else if (digits === 4) {
        return '50px'
    } else if (digits === 5 || digits === 0) {
        return '60px'
    } else if (digits === 6) {
        return '70px'
    } else if (digits === 7) {
        return '84px'
    }
    return '100px'
}

export function formatBudgetAmount(num: number | string, bool: boolean) {
    if (typeof num !== "number") return num
    if (bool && num > 50000) return '50 000₽+';
    let formated_num = num.toFixed(2).replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, (s) => ' ' + s);
    formated_num.indexOf(',') !== -1 && (formated_num = formated_num.substring(0, formated_num.length - 3));
    formated_num.charAt(0) === ' ' && (formated_num = formated_num.substring(1));
    (bool) && (formated_num = formated_num.concat('₽'));
    return formated_num;
}

export function countWordsInBio(bio: string) {
    if (bio.trim() === '') return 0;
    let dataWithoutLastSpace = bio.substring(0, bio.length - 1);
    let wordsBio = dataWithoutLastSpace.split(' ');
    return wordsBio.length
}