import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { Sidebar } from './Sidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  if (!user || !user.publicMetadata.siteOwner) {
    redirect('/')
  }

  return (
    <div>
      <Sidebar />

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}
