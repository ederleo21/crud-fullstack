import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getListModalidad } from '../services/modalidadServices';
import { TableModalidad } from '../components/TableModalidad';
import { PageLoader } from '../../../global/components/atoms/PageLoader';
import { ErrorState } from '../../../global/components/layout/ErrorState';
import { startLoading, setModalidades, setError } from '../slices/modalidadSlice';

export const ModalidadesPage = () => {
    const { modalidades, loading, error } = useSelector(state => state.modalidad);
    const dispatch = useDispatch();

    useEffect(() => {
       const fetchData = async() => {
           dispatch(startLoading())
           try{
               const res = await getListModalidad();
               dispatch(setModalidades(res))
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
        <TableModalidad modalidades={modalidades} />
    </div>
  )
}
