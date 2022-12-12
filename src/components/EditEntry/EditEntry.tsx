import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-styled-alert';
import { useEraseEntry, useMoveEntry, useUpdateEntry } from 'api';
import { checkError } from 'utils';
import { Container } from 'components';
import { Entry, EntryType } from 'types';
import { IoReloadOutline } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import {
  AiOutlineEdit,
  AiOutlineArrowDown,
  AiOutlineArrowUp
} from 'react-icons/ai';
import {
  Typography,
  FormControl,
  TextField,
  IconButton,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  FormContainer,
  TopRow,
  ButtonsWrapper,
  InputWrapper,
  BottomRow
} from './EditEntry.styles';

export function EditEntry(props: {
  entry: Entry,
  pageId: number,
  reload: (onSuccess?: () => void) => void
}) {
  const [type, setType] = useState<EntryType>(props.entry.type);
  const [title, setTitle] = useState<string>(props.entry.title);
  const [description, setDescription] = useState<string>(props.entry.description);
  const [text, setText] = useState<string>(props.entry.text);
  const [imageUrl, setImageUrl] = useState<string>(props.entry.imageUrl);
  const [sourceUrl, setSourceUrl] = useState<string>(props.entry.sourceUrl);
  const [space, setSpace] = useState<number>(props.entry.space);
  const [submitError, submitting, submit] = useUpdateEntry(props.pageId, props.entry.id);
  const [erasing, erase] = useEraseEntry(props.pageId, props.entry.id);
  const [moving, moveUp, moveDown] = useMoveEntry(props.pageId, props.entry.id);
  const popup = useAlert();

  const clearInputs = () => {
    setTitle('');
    setDescription('');
    setText('');
    setImageUrl('');
    setSourceUrl('');
    setSpace(0);
  };

  const resetInputs = () => {
    setType(props.entry.type);
    setTitle(props.entry.title);
    setDescription(props.entry.description);
    setText(props.entry.text);
    setImageUrl(props.entry.imageUrl);
    setSourceUrl(props.entry.sourceUrl);
    setSpace(props.entry.space);
  };

  useEffect(resetInputs, [props.entry]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(
      {
        type,
        title: title ? title : undefined,
        description: description ? description : undefined,
        text: text ? text : undefined,
        imageUrl: imageUrl ? imageUrl : undefined,
        sourceUrl: sourceUrl ? sourceUrl : undefined,
        space: space ? space : undefined
      },
      () => popup('Entry updated', props.reload)
    );
  };

  const handleDelete = () => {
    popup(
      'Are you sure you want to delete this entry?',
      () => erase(
        () => popup('Entry deleted', props.reload),
        (err) => popup(err.message)
      ),
      () => {}
    );
  };

  const handleMoveUp = () => {
    moveUp(
      () => popup('Entry moved up', props.reload),
      (err) => popup(err.message)
    );
  };

  const handleMoveDown = () => {
    moveDown(
      () => popup('Entry moved down', props.reload),
      (err) => popup(err.message)
    );
  };

  return (
    <Container margin='32px'>
      <FormContainer onSubmit={handleSubmit}>
        <FormControl>
          <TopRow>
            <InputLabel color='secondary' id='type-label'>
              Type
            </InputLabel>
            <Select
              id={type}
              labelId='type-label'
              label='Type'
              value={type}
              color='secondary'
              onChange={(e) => {
                setType(e.target.value as EntryType);
                clearInputs();
              }}
              disabled={submitting}
              style={{ width: '200px' }}
              data-cy={`ENTRY_${props.entry.id}_TYPE`}
            >
              <MenuItem value='title'>Title</MenuItem>
              <MenuItem value='project'>Project</MenuItem>
              <MenuItem value='text'>Text</MenuItem>
              <MenuItem value='image'>Image</MenuItem>
            </Select>
            <ButtonsWrapper>
              <IconButton
                disabled={moving}
                color='secondary'
                onClick={handleMoveUp}
              >
                <AiOutlineArrowUp />
              </IconButton>
              <IconButton
                disabled={moving}
                color='secondary'
                onClick={handleMoveDown}
              >
                <AiOutlineArrowDown />
              </IconButton>
              <IconButton
                disabled={erasing}
                color='secondary'
                onClick={handleDelete}
              >
                <FaTrashAlt />
              </IconButton>
            </ButtonsWrapper>
          </TopRow>
          <InputWrapper show={type === 'title' || type === 'project' || type === 'text'}>
            <TextField
              label='Title'
              color='secondary'
              error={checkError('Title', submitError)}
              margin='normal'
              fullWidth
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={submitting}
              data-cy={`ENTRY_${props.entry.id}_TITLE`}
            />
          </InputWrapper>
          <InputWrapper show={type === 'title' || type === 'project'}>
            <TextField
              label='Description'
              color='secondary'
              error={checkError('Description', submitError)}
              margin='normal'
              fullWidth
              multiline
              rows={2}
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={submitting}
              data-cy={`ENTRY_${props.entry.id}_DESCRIPTION`}
            />
          </InputWrapper>
          <InputWrapper show={type === 'text' || type === 'project'}>
            <TextField
              label='Text'
              color='secondary'
              error={checkError('Text', submitError)}
              margin='normal'
              fullWidth
              multiline
              rows={4}
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={submitting}
              data-cy={`ENTRY_${props.entry.id}_TEXT`}
            />
          </InputWrapper>
          <InputWrapper show={type === 'image' || type === 'project'}>
            <TextField
              label='Image URL'
              color='secondary'
              error={checkError('Image URL', submitError)}
              margin='normal'
              fullWidth
              type='text'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              disabled={submitting}
              data-cy={`ENTRY_${props.entry.id}_IMAGE_URL`}
            />
          </InputWrapper>
          <InputWrapper show={type === 'project'}>
            <TextField
              label='Source URL'
              color='secondary'
              error={checkError('Source URL', submitError)}
              margin='normal'
              fullWidth
              type='text'
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              disabled={submitting}
              data-cy={`ENTRY_${props.entry.id}_SOURCE_URL`}
            />
          </InputWrapper>
          <InputWrapper show={type === 'space'}>
            <TextField
              label='Space'
              color='secondary'
              error={checkError('Space', submitError)}
              margin='normal'
              fullWidth
              type='number'
              value={space}
              onChange={(e) => setSpace(Number(e.target.value))}
              disabled={submitting}
              data-cy={`ENTRY_${props.entry.id}_SPACE`}
            />
          </InputWrapper>
          {submitError ? (
            <Typography
              variant='body1'
              color='error'
              style={{ marginTop: '32px', whiteSpace: 'pre' }}
            >
              {submitError}
            </Typography>
          ) : (
            <></>
          )}
          <BottomRow>
            <LoadingButton
              disabled={submitting}
              loading={submitting}
              variant='contained'
              color='primary'
              startIcon={<AiOutlineEdit />}
              type='submit'
              data-cy={`ENTRY_${props.entry.id}_SUBMIT`}
            >
              Save
            </LoadingButton>
            <LoadingButton
              variant='contained'
              color='primary'
              startIcon={<IoReloadOutline />}
              onClick={resetInputs}
              data-cy={`ENTRY_${props.entry.id}_RELOAD`}
            >
              Reload
            </LoadingButton>
          </BottomRow>
        </FormControl>
      </FormContainer>
    </Container>
  );
}
