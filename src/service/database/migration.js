import { getConnection } from './index';
//old createTable - create or update tables in db
export function runMigrations() {
    const connection = getConnection();

    var sql =
        'CREATE TABLE IF NOT EXISTS txt_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255) , date_day varchar(255) ,day_time varchar(255),  teplota_u_GPS_anteny double, tlak_u_GPS_anteny double, vlhkost_u_GPS_anteny double,cteni_teploty double,cteni_tlaku double,cteni_vlhkosti double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS mol_table ( datum timestamp PRIMARY KEY NOT NULL, dday varchar(255),date_day varchar(255),day_time varchar(255),  vyska_hladiny_ve_studni double, teplota_u_GPS_anteny double, tlak_u_GPS_anteny double,vlhkost_u_GPS_anteny double,uhrn_srazek double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS all_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255), indikator_srazek double, uhrn_srazek double, teplota_u_GPS_anteny double,tlak_u_GPS_anteny double,vlhkost_u_GPS_anteny double,vyska_hladiny_ve_studni double,teplota_v_prizemi double, tlak_u_GPS_anteny_kontrolni double, teplota_u_GPS_anteny_kontrolni double,vlhkost_v_registracni_mistnosti double,teplota_v_kompresovne double,vlhkost_v_kompresovne double,tlak_v_kompresovne double,vyska_hladiny_ve_vrtu_29m double,hloubka_vody_ve_vrtu_29m double, hloubka_vody_ve_studni double, vyska_hladiny_ve_vrtu_25m double, hloubka_vody_ve_vrtu_25m double,rychlost_vetru double, smer_vetru double, cteni_rychlosti_vetru double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS bgl_table (datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255) ,day_time varchar(255) ,  teplota_1 double,vlhkost_1 double,teplota_2 double,vlhkost_2 double,tlak_1 double,teplota_3 double,vlhkost_3 double,tlak_2 double,teplota_4 double,vlhkost_4 double,tlak_3 double,teplota_5 double,vlhkost_5 double,teplota_6 double,vlhkost_6 double,tlak_4 double,teplota_7 double,vyska_hladniny_ve_vrtu double,hloubka_hladiny_ve_vrtu double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS bud_table (datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255),  teplota_v_prizemi double, teplota_v_pruzinove_komore double, vlhkost_v_pruzinove_komore double,teplota_v_supravodive_komore double,vlhkost_v_supravodive_komore double, tlak_v_supravodive_komore double, teplota_v_registracni_mistnosti double,vlhkost_v_registracni_mistnosti double, teplota_v_kompresovne double,vlhkost_v_kompresovne double,tlak_v_kompresovne double,teplota_v_gravimetricke_laboratori double,vlhkost_v_gravimetricke_laboratori double, teplota_v_serverovne double,teplota_v_UPS_mistnosti double, teplota_v_GNNS_mistnosti double, teplota_v_termokomore double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS vlh_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,vlhkost_pudy_MP_12cm double,vlhkost_pudy_MP_31cm double,vlhkost_pudy_MP_60cm double,vlhkost_pudy_MP_86cm double,vlhkost_pudy_MP_120cm double,vlhkost_pudy_MP_80cm_svisle double, vlhkost_pudy_Z_15cm double,  vlhkost_pudy_Z_52cm double, vlhkost_pudy_Z_91cm double, vlhkost_pudy_S_14cm double, vlhkost_pudy_S_56cm double,  vlhkost_pudy_S_91cm double,vyska_hladiny_ve_studni double, vyska_hladiny_ve_vrtu_29m double,hloubka_vody_ve_studni double,hloubka_vody_ve_vrtu_29m double,vyska_hladiny_ve_vrtu_25m double, hloubka_vody_ve_vrtu_25m double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS vgl_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,vlhkost_pudy_1 double,vlhkost_pudy_2 double,vlhkost_pudy_3 double,vlhkost_pudy_4 double,vlhkost_pudy_5 double,vlhkost_pudy_6 double,vlhkost_pudy_7 double,vlhkost_pudy_8 double,vlhkost_pudy_9 double,vlhkost_pudy_10 double,vlhkost_pudy_11 double,vlhkost_pudy_12 double,vlhkost_pudy_13 double,vlhkost_pudy_14 double,vlhkost_pudy_15 double,vlhkost_pudy_16 double,vlhkost_pudy_17 double,vlhkost_pudy_18 double,vlhkost_pudy_19 double,vlhkost_pudy_20 double,vlhkost_pudy_21 double,vlhkost_pudy_22 double,vlhkost_pudy_23 double,vyska_hladiny_ve_vrtu double,hloubka_hladiny_ve_vrtu double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS kunzak_all_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,uhrn_srazek double,teplota double,vlhkost double,tlak double,vlhkost_pudy_14cm double,vlhkost_pudy_47cm double,vlhkost_pudy_87cm double,nadmorska_vyska_hladiny_ve_vrtu double,hloubka_vody_ve_vrtu double,smer_vetru double,rychlost_vetru double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS plzen_all_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,uhrn_srazek double,vlhkost_pudy_25cm double,vlhkost_pudy_61cm double,vlhkost_pudy_95cm double,vlhkost_pudy_123cm double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS plzen_txt_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,teplota double,vlhkost double,tlak double,cteni_teploty double,cteni_vlhkosti double,cteni_tlaku double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS polom_all_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,teplota double,vlhkost double,tlak double,vlhkost_pudy_13cm double,vlhkost_pudy_52cm double,vlhkost_pudy_92cm double,nadmorska_vyska_hladiny_ve_studni double,hloubka_vody_ve_studni double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS brno_all_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255) ,uhrn_srazek double,teplota double,vlhkost double,tlak double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS olomouc_all_table ( datum timestamp PRIMARY KEY NOT NULL,dday varchar(255),date_day varchar(255),day_time varchar(255),teplota double,vlhkost double,tlak double,rychlost_vetru double,cteni_teploty double,cteni_vlhkosti double,cteni_tlaku double,cteni_rychlosti_vetru double)';
    connection.query(sql);

    var sql =
        'CREATE TABLE IF NOT EXISTS ostrava_rinex_table( datum timestamp PRIMARY KEY NOT NULL,date_day varchar(255),day_time varchar(255) ,tlak double,teplota double,vlhkost double,zpozdeni_zenitove_drahy double,sucha_cast_zpozdeni_zenitove_drahy double, cela_cast_zpozdeni_zenitove_drahy  double, azimut_vetru double,rychlost_vetru double,destovy_prirustek double, indikator_krupobiti double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS filename (fname VARCHAR(255) PRIMARY KEY,filesize double)';
    connection.query(sql);
    var sql =
        'CREATE TABLE IF NOT EXISTS selectable_tables ( name_table varchar(255)PRIMARY KEY NOT NULL, title varchar (255))';
    connection.query(sql);
    var sql = `INSERT IGNORE INTO selectable_tables VALUES ('vgl_table','Vlhkosti půdy u gravimetrické laboratoře'),('bgl_table','Čidla v gravimetrické laboratoři'),('all_table','Minutová data'),('bud_table','Čidla v budově'),('txt_table','Základní meteo'),('vlh_table','Vlhkosti půdy'),('mol_table','Historická meteodata'),('plzen_all_table','Stanice Plzeň - vlhkosti půdy'),('plzen_txt_table','Stanice Plzeň - základní meto'),('olomouc_all_table','Stanice Olomouc'),('brno_all_table','Stanice Brno'),('polom_all_table','Stanice Polom'),('kunzak_all_table','Stanice Kunžak'),('ostrava_rinex_table','Stanice Ostrava')`;
    connection.query(sql);

}
