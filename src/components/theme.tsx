import { extendTheme } from "@chakra-ui/react"

const Button = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: "base", // <-- border radius is same for all variants and sizes
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: "2px solid",
            color: "pink.400",
        },
        solid: {
            bg: "pink.400",
            color: "white",
        },
    },
    // The default size and variant values
    defaultProps: {
        size: "md",
        variant: "solid",
    },
}

const ArtsideoutTheme = extendTheme({
    colors: {
        primary: {
            100: "#f7fafc",
            500: "#1a202c",
            600: "#1a202c",
            900: "#1a202c",
        },
    },
    components: {
        Button,
    },
})

export default ArtsideoutTheme;