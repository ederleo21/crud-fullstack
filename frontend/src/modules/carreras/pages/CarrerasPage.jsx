import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListCarreras } from '../services/carreraServices';
import { getListModalidad } from '../../modalidades/services/modalidadServices';
import { TableCarrera } from '../components/TableCarrera';
import { PageLoader } from '../../../global/components/atoms/PageLoader';
import { ErrorState } from '../../../global/components/layout/ErrorState';
import { setCarreras, startLoading, setError } from '../slices/carreraSlice';

export const CarrerasPage = () => {
  const { carreras, loading, error } = useSelector(state => state.carrera)
  const [modalidades, setModalidades] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async() => {
      dispatch(startLoading())
      try{
      const [resCarreras, resModalidades] = await Promise.all([
              getListCarreras(),
              getListModalidad()
            ]);
      dispatch(setCarreras(resCarreras))
      setModalidades(resModalidades);
      }catch(err){
        console.log(err)
        dispatch(setError({
          status: err.response?.status ?? 0, 
          message: err.message || 'Ocurrió un error inesperado'
        }))
      }
    }
    fetchData();
  }, [])

  if(loading) return <PageLoader/>
  if(error) return <ErrorState error={error} />

  return (
    <div>
      <TableCarrera carreras={carreras} modalidades={modalidades} />
    </div>
  )
}
