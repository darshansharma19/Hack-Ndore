import {
  Home as HomeIcon,
  LocalHospital as HealthCareIcon,
  WaterDrop as WaterSupplyIcon,
  Notifications as AlertsIcon,
  Star as RatingsIcon,
  Image as ImagesIcon,
  DirectionsCar as TransportationIcon,
  HelpOutline as RequestIcon
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
    title: "HealthCare",
    icon: HealthCareIcon,
    href: "/ui-components/buttons",
  },
  {
    id: uniqueId(),
    title: "Water Supply",
    icon: WaterSupplyIcon,
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
    title: "Request",
    icon: RequestIcon,
    href: "/ui-components/request",
  },

  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: ImagesIcon,
  //   href: "/ui-components/images",
  // },
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
  // {
  //   id: uniqueId(),
  //   title: "Table",
  //   icon: IconLayoutGrid,
  //   href: "/ui-components/table",
  // },
];

export default Menuitems;
