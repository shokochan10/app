import {
  ContentWrapper,
  ContentHeader,
  ContentHeaderText,
  ContentHeaderButton,
} from './Content.style';
import ContentTable from './ContentTable/ContentTable';
import { DUMMY_DATA, TABLE_HEADINGS, TABLE_ACTIONS } from '../../assets/data';
const Content = () => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <ContentHeaderText>Surveys</ContentHeaderText>
        <ContentHeaderButton>New survey</ContentHeaderButton>
      </ContentHeader>
      <ContentTable
        data={DUMMY_DATA}
        headings={TABLE_HEADINGS}
        actions={TABLE_ACTIONS}
      />
    </ContentWrapper>
  );
};

export default Content;
