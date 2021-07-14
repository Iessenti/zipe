export const fileNameFormater = (name: string) => {
    let nameCopy = name;
    const essentialName = nameCopy.split('.').slice(0, -1).join('.')
    const fileExtensino = nameCopy.split('.').pop()
    if (essentialName.length > 10) {
        nameCopy = essentialName.substring(0, 6).concat(`...${essentialName[essentialName.length - 1]}.${fileExtensino}`);
    }
    return nameCopy
}

export const generateRandomNumber = () => Math.floor(Math.random() * 1000000000);