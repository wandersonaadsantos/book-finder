import { changeUrl, getURLParameters, validPageNumb, validChar } from './'

const mockPushState = jest.fn()
Object.defineProperty(window, 'history', {
    value: {
        pushState: mockPushState
    }
})

describe('changeUrl', () => {
    test('should update window.history.pushState with the new URL', () => {
        changeUrl('/new-url')
        expect(mockPushState).toHaveBeenCalledWith(null, '', '/new-url')
    })
    test('should handle empty URL correctly', () => {
        changeUrl('')
        expect(mockPushState).toHaveBeenCalledWith(null, '', '')
    })
    test('should handle URLs with special characters correctly', () => {
        const specialUrl = '/new-url?param=value&anotherParam=value'
        changeUrl(specialUrl)
        expect(mockPushState).toHaveBeenCalledWith(null, '', specialUrl)
    })
})

describe('getURLParameters', () => {
    test('should handle empty search parameters correctly', () => {
        const params = getURLParameters()
        expect(params).toEqual({})
    })
    test('should get URL parameters correctly', () => {
        Object.defineProperty(window, 'location', {
            value: {
                search: '?param1=value1&param2=value2'
            }
        })
        const params = getURLParameters()
        expect(params).toEqual({ param1: 'value1', param2: 'value2' })
    })
})

describe('validPageNumb', () => {
    test('should return true for valid numbers', () => {
        expect(validPageNumb(1)).toBe(true)
    })
    test('should return false for invalid numbers', () => {
        expect(validPageNumb(-1)).toBe(false)
        expect(validPageNumb(NaN)).toBe(false)
        expect(validPageNumb(Infinity)).toBe(false)
        expect(validPageNumb(undefined)).toBe(false)
        expect(validPageNumb(null)).toBe(false)
        expect(validPageNumb(3.14)).toBe(false)
    })
    test('should return false for strings that cannot be coerced into numbers', () => {
        expect(validPageNumb('abc')).toBe(false)
        expect(!!validPageNumb('')).toBe(false)
    })
})

describe('validChar', () => {
    test('should return true for valid strings', () => {
        expect(validChar('hello')).toBe(true)
        expect(validChar(' world ')).toBe(true)
    })
    test('should return false for invalid strings', () => {
        expect(validChar('')).toBe(false)
        expect(validChar('   ')).toBe(false)
        expect(validChar(null)).toBe(false)
        expect(validChar(undefined)).toBe(false)
    })
    test('should handle strings with leading/trailing whitespace and valid characters correctly', () => {
        expect(validChar('   hello   ')).toBe(true)
        expect(validChar(' world')).toBe(true)
    })
})
