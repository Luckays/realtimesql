import express from 'express'; 
import cors from 'cors';
import bodyParser from 'body-parser';
import { fetchSelectableTables } from './endpoints/fetchSelectableTables';
import { fetchSelectableColumns } from './endpoints/fetchSelectableColumns';
import { fetchDayData } from './endpoints/fetchDayData'; 
import { fetchDayDataReal } from './endpoints/fetchDayDataReal';
import { fetchDayDataDownload } from './endpoints/fetchDayDataDownload'; 
import {
    fetchData,
    fetchDataAnalysis,
    fetchDataDownload,
} from './endpoints/fetchData';
import {fetchDayDataActual} from './endpoints/fetchDayDataActual';
import {fetchDayDataVar} from './endpoints/fetchDayDataVar';


//old getFromDB - communication with server
export function createServer(port) {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    console.log('ahoj')

    app.post('/data', fetchData);
    app.post('/show_data', fetchDataAnalysis);
    app.post('/download', fetchDataDownload);
console.log('ahoj vy')
    app.get('/tables', fetchSelectableTables);
    app.post('/columns', fetchSelectableColumns);
    app.post('/show_data_day', fetchDayData);
    app.post('/show_data_day_real', fetchDayDataReal);
    app.post('/show_data_day_actual', fetchDayDataActual);
    app.post('/show_data_day_var', fetchDayDataVar);
    app.post('/download_day', fetchDayDataDownload);

    app.listen(port);
    console.log(`Server is running on port ${port}`);
}
