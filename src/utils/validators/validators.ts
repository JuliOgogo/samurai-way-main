export const validateMaxLength30 = (text: string) => {
    if (text.length > 30) return 'Sorry, max length of text is 30 symbols'
    return undefined
}

export const validateMaxLengthCreator = (maxLength: number) => (text: string) => {
    if (text.length > maxLength) return `Sorry, max length of text is ${maxLength} symbols`
    return undefined
}

export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}