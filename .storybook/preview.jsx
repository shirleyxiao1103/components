import {
    ChakraProvider,
    extendTheme,
} from "@chakra-ui/react"
import * as React from "react"
import { withPerformance } from "storybook-addon-performance"
import customTheme from "../src/styles/theme";

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
    direction: {
        name: "Direction",
        description: "Direction for layout",
        defaultValue: "LTR",
        toolbar: {
            icon: "globe",
            items: ["LTR", "RTL"],
        },
    },
}

const withChakra = (StoryFn, context) => {
    const { direction } = context.globals
    const dir = direction.toLowerCase()

    return (
        <ChakraProvider theme={customTheme}>
            <div dir={dir} id="story-wrapper" style={{ minHeight: "100vh" }}>
                <StoryFn />
            </div>
        </ChakraProvider>
    )
}

export const decorators = [withChakra, withPerformance]