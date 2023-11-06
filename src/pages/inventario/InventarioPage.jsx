import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { InventarioLayout } from "../../components/layouts/InventarioLayout";
import { NothingSelectedView } from "../../views/NothingSelectedView";
import { NoteView } from "../../views/NoteView";


export const InventarioPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  const { isSaving, active } = useSelector(state => state.inventario);


  return (
    <InventarioLayout>

      {
        !!active
        ? <NothingSelectedView/>
        : <NoteView/>
      }

      <IconButton
        onClick={ onClickNewNote }
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined/>
      </IconButton>

    </InventarioLayout>
  )
}
