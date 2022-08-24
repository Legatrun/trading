import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/trading/thunks';
import { TradingLayout } from '../layout/TradingLayout';

export const TradingPage = () => {
    const dispatch = useDispatch()
    const { isSaving, active } = useSelector(state => state.trading)

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    return (
        <TradingLayout>

            {
                (!!active)
                    ? <NoteView />
                    : <NothingSelectedView />
            }



            <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </TradingLayout>
    )
}
