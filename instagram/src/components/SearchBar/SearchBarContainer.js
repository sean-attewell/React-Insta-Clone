import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
    border-bottom: 1px solid #3333;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
`;


const StyledLogoImage = styled.img`
    height: 50px;
`;

const StyledSocialWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledSocial = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
`;


const StyledInput = styled.input`
    height: 25%;
`;

const StyledButton = styled.button`
    height: 25%;
`;

const SearchBar = props => {


    return (
        <StyledHeader>
            <StyledLogoImage alt="instagram logo" src={IGLogo} />
            
            
            <form onSubmit={props.handleFilterPost}>
                <StyledSocialWrapper>
                    <StyledInput 
                        onChange={props.handleSearchChange}
                        type="text"
                        name="search"
                        value={props.value}
                        placeholder="Search"
                    />
                    <StyledInput
                        type="submit"
                    />                
                </StyledSocialWrapper>
            </form>

            <div>
                <StyledButton onClick={props.logout}>Log Out</StyledButton>
            </div>

            <StyledSocialWrapper>
                <StyledSocial>
                    <i className="fa fa-compass fa-2x" />
                </StyledSocial>
                <StyledSocial>
                    <i className="fa fa-heart fa-2x" />
                </StyledSocial>
                <StyledSocial>
                    <i className="fa fa-user-circle fa-2x" />
                </StyledSocial>
            </StyledSocialWrapper>
        </StyledHeader>
    );
};

export default SearchBar;