import { useEffect, useState, useRef } from "react"
import { Stage, Layer, Rect, Text, Line, Group, Circle } from 'react-konva';

const THEME = {
    nodeWidth: 100,
    nodeHeight: 60,
    spacing: 80,
    accent: '#5d5dff',
    accentGlow: 'rgba(93, 93, 255, 0.4)',
    border: 'rgba(255, 255, 255, 0.2)',
    text: '#ffffff',
    subtext: 'rgba(255, 255, 255, 0.5)'
}

const NodeConnection = ({ x1, y1, x2, y2 }) => {
    return (
        <Group>
            <Line
                points={[x1 + THEME.nodeWidth, y1 + THEME.nodeHeight / 2, x2, y2 + THEME.nodeHeight / 2]}
                stroke={THEME.border}
                strokeWidth={2}
                dash={[5, 5]}
            />
            <Circle
                x={x1 + THEME.nodeWidth + (x2 - (x1 + THEME.nodeWidth)) / 2}
                y={y1 + THEME.nodeHeight / 2}
                radius={3}
                fill={THEME.accent}
                shadowBlur={10}
                shadowColor={THEME.accent}
            />
        </Group>
    )
}

const LinkedNode = ({ node, x, y, index }) => {
    return (
        <>
            <Group x={x} y={y}>
                {/* Glow Effect */}
                <Rect
                    width={THEME.nodeWidth}
                    height={THEME.nodeHeight}
                    cornerRadius={12}
                    fill={THEME.accentGlow}
                    blurRadius={20}
                    opacity={0.3}
                />

                {/* Main Body */}
                <Rect
                    width={THEME.nodeWidth}
                    height={THEME.nodeHeight}
                    cornerRadius={12}
                    fillRadialGradientStartPoint={{ x: 0, y: 0 }}
                    fillRadialGradientStartRadius={0}
                    fillRadialGradientEndPoint={{ x: THEME.nodeWidth, y: THEME.nodeHeight }}
                    fillRadialGradientEndRadius={THEME.nodeWidth * 1.5}
                    fillRadialGradientColorStops={[0, '#1e1e24', 1, '#13131a']}
                    stroke={THEME.border}
                    strokeWidth={1}
                />

                {/* Index Badge */}
                <Text
                    x={8}
                    y={8}
                    text={`#${index}`}
                    fontSize={10}
                    fontFamily="monospace"
                    fill={THEME.subtext}
                />

                {/* Value */}
                <Text
                    width={THEME.nodeWidth}
                    height={THEME.nodeHeight}
                    text={node.node?.toString()}
                    fontSize={20}
                    fontStyle="bold"
                    fill={THEME.text}
                    align="center"
                    verticalAlign="middle"
                    shadowBlur={5}
                    shadowColor="rgba(0,0,0,0.5)"
                />
            </Group>

            {node.next && (
                <>
                    <NodeConnection
                        x1={x} y1={y}
                        x2={x + THEME.nodeWidth + THEME.spacing} y2={y}
                    />
                    <LinkedNode
                        node={node.next}
                        x={x + THEME.nodeWidth + THEME.spacing}
                        y={y}
                        index={index + 1}
                    />
                </>
            )}
        </>
    )
}

export const Canvas = ({ data }) => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const startX = 100;
    const startY = size.height / 2 + 50;

    return (
        <Stage width={size.width} height={size.height}>
            <Layer>
                {data && <LinkedNode node={data} x={startX} y={startY} index={0} />}
            </Layer>
        </Stage>
    )
}