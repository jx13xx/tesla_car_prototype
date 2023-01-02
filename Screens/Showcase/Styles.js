import styled from 'styled-components/native';

export const ShowcaseContainer = styled.View`
  background-color: #f2f5f8;
`;

export const ScrollableContainer = styled.ScrollView`
  margin-left: 10px;
  margin-right: 10px;
`;

export const SafeAreaViewComponent = styled.SafeAreaView`
  flex: 1;
  height: auto;
`;

export const HeaderGreeting = styled.View`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const ProfilePic = styled.Image`
  width: 90px;
  height: 87px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 13px;
`;

export const GreetingView = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const GreetingText = styled.Text`
  width: 175px;
  height: 39px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 38px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #2e2828;
`;
