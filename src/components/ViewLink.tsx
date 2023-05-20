import React, { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { extractItemId } from '../helpers/parse'

export function ViewLink ({ prepend, initialUrl, text }: { prepend: string, initialUrl: string | null, text: string | null }): ReactElement | null {
  if (typeof initialUrl !== 'string') {
    return text as null
  }
  return <Link to={`${prepend}/${extractItemId(initialUrl)}`}>
    {text}
  </Link>
}
