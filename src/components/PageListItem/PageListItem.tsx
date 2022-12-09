import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-styled-alert';
import { useUserData } from 'hooks';
import { useUpdatePage, useErasePage } from 'api';
import { Container } from 'components';
import { checkError } from 'utils';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { VscOpenPreview } from 'react-icons/vsc';
import {
  TextField,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Page } from 'types';
import {
  FormContainer,
  TitleAndDeleteWrapper,
  ButtonsWrapper
} from './PageListItem.styles';

export function PageListItem(props: { page: Page, reload: () => void }) {
  const [title, setTitle] = useState<string>(props.page.title);
  const [urlName, setUrlName] = useState<string>(props.page.urlName);
  const [error, setError] = useState<string>('');
  const [updating, update] = useUpdatePage(props.page.id);
  const [erasing, erase] = useErasePage(props.page.id);
  const user = useUserData();
  const popup = useAlert();

  const handleChangeTitle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');
    update(
      { title },
      () => popup(
        'Success!',
        props.reload
      ),
      (err) => setError(err.message)
    );
  };

  const handleChangeUrlName = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');
    update(
      { urlName },
      () => popup(
        'Success!',
        props.reload
      ),
      (err) => setError(err.message)
    );
  };

  const handleDelete = (e: React.SyntheticEvent) => {
    e.preventDefault();
    popup(
      `Are you sure you want to delete page ${props.page.title}?`,
      () => erase(
        () => props.reload(),
        (err) => popup(err.message)
      ),
      () => {}
    );
  };

  return (
    <Container margin='32px 0px 0px 0px'>
      <TitleAndDeleteWrapper>
        <Typography variant='subtitle1' color='text.primary'>
          {props.page.title}
        </Typography>
        <IconButton color='secondary' onClick={handleDelete}>
          <FaTrashAlt />
        </IconButton>
      </TitleAndDeleteWrapper>
      <FormContainer onSubmit={handleChangeTitle}>
        <TextField
          label='Title'
          color='secondary'
          error={checkError('Title', error)}
          margin='normal'
          fullWidth
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={updating || erasing}
          data-cy={`PAGE_${props.page.id}_TITLE`}
        />
        <LoadingButton
          disabled={updating || erasing}
          loading={updating || erasing}
          variant='contained'
          color='primary'
          type='submit'
          data-cy={`CHANGE_PAGE_${props.page.id}_TITLE`}
          style={{ marginLeft: '16px', width: '160px' }}
        >
          Change Title
        </LoadingButton>
      </FormContainer>
      <FormContainer onSubmit={handleChangeUrlName}>
        <TextField
          label='URL Name'
          color='secondary'
          error={checkError('URL Name', error)}
          margin='normal'
          fullWidth
          type='text'
          value={urlName}
          onChange={(e) => setUrlName(e.target.value)}
          disabled={updating || erasing}
          data-cy={`PAGE_${props.page.id}_TITLE`}
        />
        <LoadingButton
          disabled={updating || erasing}
          loading={updating || erasing}
          variant='contained'
          color='primary'
          type='submit'
          data-cy={`CHANGE_PAGE_${props.page.id}_URL`}
          style={{ marginLeft: '16px', width: '160px' }}
        >
          Change URL
        </LoadingButton>
      </FormContainer>
      {error ? (
        <Typography
          variant='body1'
          color='error'
          style={{ marginTop: '32px', whiteSpace: 'pre' }}
        >
          {error}
        </Typography>
      ) : (
        <></>
      )}
      <ButtonsWrapper>
      <Button
          variant='contained'
          component={Link}
          to={`/edit/${props.page.urlName}`}
          startIcon={<FaEdit />}
        >
          Edit
        </Button>
        <Button
          variant='contained'
          component={Link}
          to={`/view/${user.urlName}/${props.page.urlName}`}
          startIcon={<VscOpenPreview />}
        >
          View
        </Button>
      </ButtonsWrapper>
    </Container>
  );
}
