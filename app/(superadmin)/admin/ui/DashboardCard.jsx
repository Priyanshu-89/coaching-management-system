import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

function DashboardCard({text, count}) {
  return (
  <Card>
    <CardTitle>{count}</CardTitle>
    <CardDescription></CardDescription>
  </Card>
  )
}

export default DashboardCard