import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"


const Popup = ({ children }: { children: React.ReactNode }) => {
  return (
    <PopoverContent>
      { children }
    </PopoverContent>
  )
}

export default Popup