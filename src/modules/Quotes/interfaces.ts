export interface QuotesHeaderProps {
  title: string,
  initialStatus: QuoteStatus
}

export enum QuoteStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export interface ListItemProps {
  id: number
}