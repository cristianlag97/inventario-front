import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { InventarioLayout } from "../../components/layouts/InventarioLayout";
import { NothingSelectedView } from "../../views/NothingSelectedView";
import { PcsView } from "../../views/PcsView";
import { LaptopsView } from "../../views/LaptosView";

export const InventarioPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  const { view } = useSelector((state) => state.inventario);

  return (
    <InventarioLayout>
      {view === "Pcs" ? (
        <PcsView />
      ) : view === "Laptops" ? (
        <LaptopsView />
      ) : (
        <NothingSelectedView />
      )}
    </InventarioLayout>
  );
};
