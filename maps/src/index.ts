import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap'


const company = new Company();
const user = new User();
const custMap = new CustomMap('map');

custMap.addMarker(company);
custMap.addMarker(user);
