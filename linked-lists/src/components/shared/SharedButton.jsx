import { Button } from "@/components/ui/button"

export function SharedButton({ children, onClick, variant = "default", size = "default", className }) {
    return (
        <Button
            variant={variant}
            size={size}
            onClick={onClick}
            className={`bg-accent hover:bg-accent/90 text-white rounded-xl transition-all active:scale-95 shadow-lg shadow-accent/20 ${className}`}
        >
            {children}
        </Button>
    )
}

