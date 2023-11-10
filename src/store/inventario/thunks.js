import { createPc, getPcs } from "../../controllers/inventario";
import { createNewPcs, getAllPcsDB } from "./inventarioSlice";

export const getAllPcs = () => {
    return async(dispatch) => {

        const { ok, arrayDeObjetos } = await getPcs();
        console.log(arrayDeObjetos);


        dispatch(getAllPcsDB(arrayDeObjetos));

    }

}

export const createonePc = (referencia, modelo, servicetag, activopc, servicetagpantalla, activopantalla) => {
    return async(dispatch) => {
        console.log({ referencia, modelo, servicetag, activopc, servicetagpantalla, activopantalla });
        const {
            ok,
            status,
            id
        } = await createPc({ referencia, modelo, servicetag, activopc, servicetagpantalla, activopantalla });
        const data = {
            referencia,
            modelo,
            servicetag,
            activopc,
            servicetagpantalla,
            activopantalla,
            status,
            id
        };

        dispatch(createNewPcs(data));
    }
}