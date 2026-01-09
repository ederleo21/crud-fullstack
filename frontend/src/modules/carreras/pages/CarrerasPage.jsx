import { useEffect, useState } from 'react'
import { getListCarreras } from '../services/carreraServices';
import { getListModalidad } from '../../modalidades/services/modalidadServices';
import { TableCarrera } from '../components/TableCarrera';
import { PageLoader } from '../../../global/components/atoms/PageLoader';
import { ErrorState } from '../../../global/components/layout/ErrorState';

export const CarrerasPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carreras, setCarreras] = useState([]);
  const [modalidades, setModalidades] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try{
      const [resCarreras, resModalidades] = await Promise.all([
              getListCarreras(),
              getListModalidad()
            ]);
      setCarreras(resCarreras);
      setModalidades(resModalidades);
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
      <TableCarrera carreras={carreras} modalidades={modalidades} setCarreras={setCarreras} />
    </div>
  )
}
