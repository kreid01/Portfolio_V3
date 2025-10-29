"use client"
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export type MarkdownItemType = "paragraph" | "list" | "header" | "image" | "link" | "code";

export interface ComboboxProps {
    id: string;
    label: string;
    items: MarkdownItemType[]
    handleChange: (item: MarkdownItemType) => void;
}

export const Combobox: React.FC<ComboboxProps> = ({ id, label, items, handleChange }) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    size={"sm"}
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? items.find((item) => item === value)
                        : "Select blog option..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={label} className="h-9" />
                    <CommandList>
                        <CommandEmpty>None found.</CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem
                                    key={item}
                                    value={item}
                                    onSelect={(currentValue) => {
                                        handleChange(item)
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {item}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === item ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}