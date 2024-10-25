import { CSSProperties } from 'styled-components'

export interface ITableHeader {
  colsHeader: {
    label: string
    cssProps?: CSSProperties
    cssOnMedia?: CSSProperties
  }[]
  children: React.ReactNode[] | React.ReactNode
}

export interface ITableBody {
  colsBody: {
    cell: any
    cssProps?: CSSProperties
    cssOnMedia?: CSSProperties
  }[]
  bgColor?: string
  onClick?: () => void
  title?: string
}
