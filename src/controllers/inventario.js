import axios from "axios"

const url = 'http://localhost:3000/api/pc';

export const createPc = async({ referencia, modelo, servicetag, activopc, servicetagpantalla, activopantalla, }) => {
    const data = {
        'referencia': referencia,
        'modelo': modelo,
        'service_tag_equipo': servicetag,
        'activo_del_equipo': activopc,
        'service_tag_pantalla': servicetagpantalla,
        'activo_pantalla': activopantalla,
    };

    const token = localStorage.getItem('token');
    if (!token) return null;

    const config = {
        headers: {
            'x-token': token
        }
    };

    try {
        const resp = await axios.post(url, data, config);
        console.log(resp.data);
        const {
            id,
            status
        } = resp.data;

        return {
            ok: true,
            referencia,
            modelo,
            servicetag,
            activopc,
            servicetagpantalla,
            activopantalla,
            status,
            id
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const getPcs = async() => {

    const token = localStorage.getItem('token');
    if (!token) return null;

    const config = {
        headers: {
            'x-token': token
        }
    };

    try {
        const resp = await axios.get(url, config);
        console.log('==========');


        const pcs = resp.data.pcs;
        const mapasDePcs = pcs.map(pc => {
            const { activo_del_equipo, activo_pantalla, service_tag_equipo, service_tag_pantalla, modelo, referencia, id, status } = pc;
            const mapa = new Map();
            mapa.set('activopc', activo_del_equipo);
            mapa.set('activopantalla', activo_pantalla);
            mapa.set('servicetag', service_tag_equipo);
            mapa.set('servicetagpantalla', service_tag_pantalla);
            mapa.set('modelo', modelo);
            mapa.set('referencia', referencia);
            mapa.set('id', id);
            mapa.set('status', status);

            return mapa;
        });

        const arrayDeObjetos = mapasDePcs.map(mapa => {
            const objeto = {};
            for (const [key, value] of mapa) {
                objeto[key] = value;
            }
            return objeto;
        });

        const arrayDeMapas = Array.from(mapasDePcs);

        return {
            ok: true,
            arrayDeObjetos
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }


}