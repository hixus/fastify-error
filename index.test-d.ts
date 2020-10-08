import createError, { FastifyErrorConstructor, ValidationResult } from './'
import { expectType } from 'tsd'

const errorConstructor = createError('CODE', 'message')
const error = new errorConstructor()
expectType<FastifyErrorConstructor>(errorConstructor)
expectType<string>(error.code)
expectType<string>(error.message)
expectType<number>(error.statusCode!)
expectType<ValidationResult[]>(error.validation!)

const validationResultParams: Record<string, string | string[]> = {
  stringParam: 'a',
  stringArrayParam: ['a', 'b', 'c'],
}
expectType<ValidationResult['params']>(validationResultParams)
