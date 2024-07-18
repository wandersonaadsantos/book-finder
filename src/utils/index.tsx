export const changeUrl = (url: string) => window.history.pushState(null, '', url)
export const getURLParameters = () => Object.fromEntries([...(new URLSearchParams(window.location.search)).entries()])
export const validNumber = (num: number) => !Number.isNaN(num) && num > 0 && 'number' === typeof num && Number.isFinite(num) && Number.isInteger(num)
export const validChar = (wordName: string) => typeof wordName === 'string' && wordName?.trim?.() !== ''