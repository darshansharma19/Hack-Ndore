import {
  Home as HomeIcon,
  LocalHospital as HealthCareIcon,
  WaterDrop as WaterSupplyIcon,
  Notifications as AlertsIcon,
  Star as RatingsIcon,
  Image as ImagesIcon,
  DirectionsCar as TransportationIcon,
  HelpOutline as RequestIcon,
  ContactMail as CommunicationIcon,
  Group as TeamIcon 
} from '@mui/icons-material';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Water Supply",
    icon: WaterSupplyIcon,
    href: "/ui-components/buttons",
  },
  {
    id: uniqueId(),
    title: "HealthCare",
    icon: HealthCareIcon,
    href: "/ui-components/forms",
  },
  {
    id: uniqueId(),
    title: "Transportation",
    icon: TransportationIcon,
    href: "/ui-components/ratings",
  },
  {
    id: uniqueId(),
    title: "Communication",
    icon: CommunicationIcon,
    href: "/ui-components/images",
  },
  {
    id: uniqueId(),
    title: "Team",
    icon: TeamIcon, 
    href: "/ui-components/table",
  },
  {
    id: uniqueId(),
    title: "Request",
    icon: RequestIcon,
    href: "/ui-components/alerts",
  },
  // {
  //   id: uniqueId(),
  //   title: "Alerts",
  //   icon: AlertsIcon,
  //   href: "/ui-components/alerts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconUser,
  //   href: "/ui-components/pagination",
  // },
];

export default Menuitems;
