import { Spinner } from 'flowbite-react'

export const PageLoader = ({ text = "Espere un momentico!", color="pink" }) => {
  return (
    <div className="fixed inset-0 bg-white/60 z-50 flex flex-col items-center justify-center space-y-4">
      <Spinner
        color={color}
        size="xl"
        light
        className="w-20 h-20"
        aria-label="Page loading spinner"
      />
    </div>
  )
}