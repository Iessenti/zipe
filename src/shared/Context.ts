import React from "react";

type OverlayContextType = {
    isOverlay: boolean,
    setIsOverlay: (value: boolean) => void
}

export const OverlayContext = React.createContext<OverlayContextType>({
    isOverlay: false,
    setIsOverlay: () => {}
});