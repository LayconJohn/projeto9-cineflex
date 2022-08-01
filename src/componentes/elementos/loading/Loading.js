import styled from 'styled-components'

export default function Loading() {
    return (
        <Loader>
        </Loader>
    )
}

const Loader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 14.6rem;
    margin: 170px auto;

    &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    filter: drop-shadow(0 0 1.7rem/2.25 rgba( #E8833A, 0.75));
  }
  &:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1.7rem   #E8833A;
    animation-name: pulsA;
  }
  &:after {
    width: calc(100% - #{1.7rem}*2);
    padding-bottom: calc(100% - #{1.7rem}*2);
    box-shadow: 0 0 0 0   #E8833A;
    animation-name: pulsB;
  }

@keyframes pulsA {
  0% { box-shadow: inset 0 0 0 1.7rem   #E8833A; opacity: 1; }
  50%, 100% { box-shadow: inset 0 0 0 0   #E8833A; opacity: 0; }
}

@keyframes pulsB {
  0%, 50% { box-shadow: 0 0 0 0   #E8833A; opacity: 0; }
  100% { box-shadow: 0 0 0 1.7rem   #E8833A; opacity: 1; }
}
`;