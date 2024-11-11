import { DataSource  , DataSourceOptions} from "typeorm";
import ormConfig from "../ormconfig.json";

// Crea una instancia de DataSource usando la configuración de ormconfig.json
export const AppDataSource = new DataSource(ormConfig as DataSourceOptions);
