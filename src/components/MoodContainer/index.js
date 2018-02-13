// Externals
import React from "react";
import styled from "styled-components";

// Components
import MoodInput from "../MoodInput";

// Styles
const backgroundImage =   'radial-gradient(50vw circle at 50vw 0, hsl(3, 57%, 80%), transparent 99%), ' +
                        'radial-gradient(50vw circle at 100vw 0px, hsl(3, 57%, 80%) 20%, transparent 90%),' +
                        'radial-gradient(80vw circle at 0 10vh, hsl(3, 57%, 80%), transparent 60%),  ' +
                        'radial-gradient(80vw circle at 40vw 40vh, hsl(251, 80%, 65%), transparent 30%),' +
                        'radial-gradient(80vw circle at 40vw 90vh, hsl(251, 80%, 65%), transparent 80%),' +
                        'radial-gradient(50vw circle at 0vw 100vh, hsl(251, 80%, 65%), transparent 90%),' +
                        'radial-gradient(200vw circle at 70vw 110vh, hsl(251, 80%, 65%), transparent 50%);'

const StyledContainer = styled.div`
    background-image: ${props => props.backgroundImage};
    background-color: hsl(3, 57%, 80%);
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
`;

// React components
const MoodContainer = (props) => {
    console.log('backgroundImage', backgroundImage);
    return (
        <StyledContainer backgroundImage={backgroundImage}>
            <MoodInput />
            {/* <UserPrompt />
            // <Navigation />*/}
        </StyledContainer>
    )
}


export default MoodContainer
