import styled from '@emotion/styled';

const Heading = styled("h1")`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const Paragraph = styled("p")`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export default function TestContent() {
    return (
        <div>
            <Heading>This is a new page</Heading>
            <Paragraph>WUBBA WUBBA WUBBA</Paragraph>
        </div>
    )
} 