import ForgotPass from '../pages/auth/forgotPass';
import LoginPages from '../pages/auth/loginPages';
import SplashPages from '../pages/auth/splashPages';
import EmployeeDetail from '../pages/employee/employeeDetail';
import EmployeeList from '../pages/employee/employeeList';
import HomePages from '../pages/home/homePages';

export const stackdata = [
  {
    name: 'SplashPages',
    component: SplashPages,
  },
  {
    name: 'LoginPages',
    component: LoginPages,
  },
  {
    name: 'ForgotPass',
    component: ForgotPass,
  },
  {
    name: 'Home',
    component: HomePages,
  },
  {
    name: 'EmployeeList',
    component: EmployeeList,
  },
  {
    name: 'EmployeeDetail',
    component: EmployeeDetail,
  },
];
