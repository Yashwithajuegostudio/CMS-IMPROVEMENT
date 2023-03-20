import ReactLoading from "react-loading";
import { AppColors } from "../../lib/constant";
import styled from "styled-components";

const ShowLoading: React.FC = () => {
  return (
    <LoadingContainer>
      <ReactLoading
        type="spin"
        color={AppColors.Primary}
        height="4rem"
        width="4rem"
        className="loading"
      />
    </LoadingContainer>
  );
};

export default ShowLoading;

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
