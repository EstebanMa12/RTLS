/* eslint-disable no-unused-vars */
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header';
import getProducts from '../../services/services';
import { useState, useEffect } from 'react';
const Devices = () => {
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'id', headerName: 'ID', flex:0.5 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'type', headerName: 'Type', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 }, 
        { field: 'location', headerName: 'Location', flex: 1},
        { field: 'lastReport', headerName: 'Last Report', flex: 1 },
    ];
    const transformData = (data) => {
        const newData = data.map((item) => {
            return {
                id: item.id,
                name: item.title,
                type: item.category.name,
                status: 'Active',
                location: 'Ubicación desconocida',
                lastReport: item.updateAt,
            }
        })
        return newData;
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            const newData = transformData(data);
            setRows(newData);
        }
        fetchData();
    }, []);

    return (
        <div className='p-6 '>
            <div className="text-left">
                <Header title="Información de los dispositivos"
                subtitle="Visualiza y gestiona la información de los dispositivos registrados en el sistema."
                />
            </div>
            <div style={{ height: 500, width: '100%',
            padding: '20px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'

         }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </div>
    )
}


export default Devices;