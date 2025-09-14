import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo/logo_white_on_black.png"
        alt="nothing ever stays the same for long"
        width={32}
        height={32}
        className="transition-opacity duration-200"
        priority
      />
    </Link>
  )
}
