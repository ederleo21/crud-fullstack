import { useEffect, useState } from 'react'
import { getListModalidad } from '../services/modalidadServices';
import { TableModalidad } from '../components/TableModalidad';
import { PageLoader } from '../../../global/components/atoms/PageLoader';
import { ErrorState } from '../../../global/components/layout/ErrorState';

export const ModalidadesPage = () => {
    const [modalidades, setModalidades] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
       const fetchData = async() => {
           setLoading(true);
           try{
               const res = await getListModalidad();
               setModalidades(res)
           }catch(err){
               console.log(err)
               setError(err)
           }finally{
               setLoading(false);
           }
       }
       fetchData();
    }, [])

    if(loading) return <PageLoader/>
    if(error) return <ErrorState error={{ status: error.status, message: error.message }} />

  return (
    <div>
        <TableModalidad modalidades={modalidades} setModalidades={setModalidades} />
    </div>
  )
}
