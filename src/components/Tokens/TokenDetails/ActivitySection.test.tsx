import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'test-utils/render'

import { ActivitySection } from './ActivitySection'

const mockTokenInfo = {
  chainId: 1,
  address: '0x72e4f9f808c49a2a61de9c5896298920dc4eeea9',
  name: 'HarryPotterObamaSonic10Inu',
  decimals: 18,
  symbol: 'BITCOIN',
}

describe('ActivitySection', () => {
  it('has Pools and Transactions tabs', () => {
    render(<ActivitySection tokenInfo={mockTokenInfo} />)

    expect(screen.getByText('Pools')).toBeInTheDocument()
    expect(screen.getByText('Transactions')).toBeInTheDocument()
  })

  it('lets user navigate between tabs', () => {
    render(<ActivitySection tokenInfo={mockTokenInfo} />)
    // expect(screen.getByTestId('pools-table')).toBeInTheDocument()

    const transactionsTab = screen.getByText('Transactions')
    userEvent.click(transactionsTab)

    expect(screen.getByTestId('transactions-table')).toBeInTheDocument()
  })
})
