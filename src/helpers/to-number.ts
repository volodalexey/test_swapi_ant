export function toNumber (futureNumber: string | number): number {
  let _number
  if (typeof futureNumber === 'string') {
    try {
      _number = Number.parseInt(futureNumber)
    } finally {
      if (Number.isNaN(_number)) {
        // eslint-disable-next-line no-unsafe-finally
        throw new Error(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Can not convert ${futureNumber} to Integer/Number. Result is ${_number}`
        )
      }
    }
  } else {
    _number = futureNumber
  }
  if (_number < 0) {
    _number = -1 * _number
  }
  return _number
}
