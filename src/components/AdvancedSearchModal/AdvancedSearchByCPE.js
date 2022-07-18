import React, {
  useState,
} from 'react';

import makeStyles from '@mui/styles/makeStyles';
import {
  Button,
  Container,
  Grid,
} from '@mui/material';
import AutoCompleteCPEFormSection from '../forms/AutoCompleteCPEFormSection';

const useStyles = makeStyles((theme) => ({
  actions: {
    paddingTop: theme.spacing(3),
  },
  cancel: {
    marginLeft: theme.spacing(2),
  }
}));

const AdvancedSearchByCPE = ({ onSubmit }) => {
  const styles = useStyles();
  const [fields, setFields] = useState({});

  return (
    <Container>
      <AutoCompleteCPEFormSection fields={fields} setFields={setFields} />
      <Grid
        container
        className={styles.actions}
        justifyContent="flex-end"
      >
        <Grid item>
          <Button
            variant={"outlined"}
            color={'primary'}
            onClick={() => onSubmit(fields)}
          >
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button
            color={'secondary'}
            className={styles.cancel}
            onClick={() => setFields({})}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

AdvancedSearchByCPE.propTypes = {
};

AdvancedSearchByCPE.defaultProps = {
};

export default AdvancedSearchByCPE;