import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
    border-bottom: 1px solid #3333;
    height: 80px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
`;

const StyledImageWrapper = styled.div`
    height: 50px;
`;

const StyledLogoImage = styled.img`
    height: 100%;
`;

const StyledSocialWrapper = styled.div`
    display: flex;
`;

const StyledSocial = styled.div`
    width: 80px;
    height: 80px;
`;

const SearchBar = props => {


    return (
        <StyledHeader>
            <StyledImageWrapper>
                <StyledLogoImage alt="instagram logo" src={IGLogo} />
            </StyledImageWrapper>

            <form onSubmit={props.handleFilterPost}>
                <input 
                    onChange={props.handleSearchChange}
                    type="text"
                    name="search"
                    value={props.value}
                    placeholder="Search"
                />
                <input
                    type="submit"
                />                
            </form>

            <div>
                <button onClick={props.logout}>Log Out</button>
            </div>

            <StyledSocialWrapper>
                <StyledSocial>
                    <i className="fa fa-compass" />
                </StyledSocial>
                <StyledSocial>
                    <i className="fa fa-heart" />
                </StyledSocial>
                <StyledSocial>
                    <i className="fa fa-user-circle" />
                </StyledSocial>
            </StyledSocialWrapper>
        </StyledHeader>
    );
};

export default SearchBar;