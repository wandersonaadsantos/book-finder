import crudredux from './crud'

export * from './crud'

const { middleware, reducer } = crudredux || {}

const finalDef = {
    middleware,
    reducer,
}

export default finalDef
