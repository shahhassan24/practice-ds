import { Input } from "@/components/ui/input"

export function InputField({ type, placeholder, onChange }) {
    return <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-white/5 border-white/10 rounded-xl focus-visible:ring-accent/50 backdrop-blur-md text-white placeholder:text-zinc-500"
    />
}

