import { FC } from "react";

type ColorStyle = {
    color: string;
    fontSize: string;
    children: string;
}

export const Text: FC<ColorStyle> = (props: ColorStyle) => {
    const { color, fontSize, children } = props;
    return (
        <p style={{color, fontSize}}>{children}</p>
    )
}