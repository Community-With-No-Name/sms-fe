import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { HiCog, HiOutlineUserGroup } from "react-icons/hi"
import { RiBuilding2Fill } from "react-icons/ri"
import { FaUserGraduate } from "react-icons/fa" 
import { Link } from "react-router-dom";
export default function Sidebar() {
    const navs = [
        {name:'Dashboard', url:"/", icon: HiCog},
        {name:'Rooms', url:"/rooms", icon: RiBuilding2Fill},
        {name:'Students', url:"/students", icon: HiOutlineUserGroup},
        {name:'Teachers', url:"/teachers", icon: FaUserGraduate},
    ]
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        {
            navs.map(nav=>(
                <Link  key={nav.url} to={nav.url}>
        <ListItem>
          <ListItemPrefix>
            <nav.icon className="h-5 w-5" />
          </ListItemPrefix>
          {nav.name}
        </ListItem>
                </Link>
            ))
        }
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}