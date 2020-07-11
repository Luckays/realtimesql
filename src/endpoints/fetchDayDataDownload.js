import moment from 'moment';
import { getConnection } from '../service/database';
import 'csv-express'

//send day data to download
export function fetchDayDataDownload(req, res) {
    getConnection().query(
        'SELECT day_time,?? as sel_value FROM ?? WHERE date_day =? ORDER BY datum',
        [
            req.body.column,
            req.body.table_name,
            moment(req.body.date).format('HH:mm:ss'),
        ],
        (err, rows) => {
            // TODO: predelat na vraceni chybove response
            if (err) return console.log(err);

            res.attachment('filename.json');
            res.set({
                'Access-Control-Allow-Origin': '*',
            }).csv(rows);
        }
    );
}
