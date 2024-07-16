import { FC, useRef, useEffect } from 'react'
import { useInView } from 'framer-motion';

interface ClientListItemProps {
    callback: () => void;
    text: string;
}

const ClientListItem: FC<ClientListItemProps> = ({callback, text}) => {
    const ref = useRef(null)
    const inView = useInView(ref, {margin: '-48% 0px -48% 0px', amount: 0.2})

    useEffect(() => {
        if (inView) {
            callback()
        }
    }, [inView])

  return (
    <span ref={ref}>{text}</span>
  )
}

export default ClientListItem