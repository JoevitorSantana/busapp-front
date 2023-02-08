import styled from "styled-components";

export function Button(props) {
    const {title, bgColor, color, width, height} = props;
    return (
        <ButtonArea
            bgColor={bgColor}
            color={color}
            width={width}
            height={height}
        >
            {title}
        </ButtonArea>
    );
}

const ButtonArea = styled.div`
    background: ${props => props.bgColor || '#FFE442' };
    color: ${props => props.color || '#5B567B' };
    width: ${props => props.width || '100px' };
    height: ${props => props.height || '100px' };
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`;