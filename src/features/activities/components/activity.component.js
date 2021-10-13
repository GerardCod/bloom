import React, { useContext } from 'react';
import styled from 'styled-components';
import { OfflineContext } from '../../../services/offline/offline.context';

const ActivityContainer = styled.article`
  width: 11vmax;
  height: 19vmax;
  border-radius: 10px 10px;
  border: 1px solid ${props => props.theme.colors.ui.primary};
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.text.light};
  }
`;

const ActivityCover = styled.figure`
  width: 100%;
  height: 70%;
  margin: hidden;
`;

const ActivityCoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ActivityName = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.primary};
`;

export default function ActivityCard({ activity, onClick }) {
  const { online } = useContext(OfflineContext);

  function searchTask() {
    onClick(activity.title);
  }

  return (
    <ActivityContainer onClick={searchTask}>
      <ActivityCover>
        {
          online ?
          <ActivityCoverImg src={ activity.img.online } alt="activity_img" /> :
          <ActivityCoverImg src={ activity.img.offline } alt="activity_img" />
        }
      </ActivityCover>
      <ActivityName>{ activity.title }</ActivityName>
    </ActivityContainer>
  );
}