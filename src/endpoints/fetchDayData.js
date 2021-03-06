import moment from 'moment';
import { getConnection } from '../service/database';
//send day data to graph
export function fetchDayData(req, res) {
    console.log( moment(req.body.date).format('YYYY-MM-DD'))
    getConnection().query(
        'SELECT day_time,?? as sel_value FROM ?? WHERE date_day =?',
        [
            req.body.column,
            req.body.table_name,
            moment(req.body.date).format('YYYY-MM-DD'),
        ],
        (err, rows, fields) => {
            // TODO: predelat na vraceni chybove response
            if (err) return console.log(err);

            res.attachment('filename.json');
            res.set({
                'Access-Control-Allow-Origin': '*',
            }).send(rows);
        }

    );
}
