'use client'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/store/redux/store"
import setStore from "@/store/redux/setStore"
import Link from "next/link"

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const user = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
    setStore(dispatch)
  }, [dispatch])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user?.name}!</h2>
          <Link href='/dashboard'>Start Syncing </Link>
        </div>
      ) : (
        <Link href='/login'>Login and Start Syncing</Link>
      )}
    </main>
  )
}
