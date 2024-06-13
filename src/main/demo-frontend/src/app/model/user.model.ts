import {Image} from "./image.model";

export interface User {

  firstName:string;
  lastName: string;
  nickName: string;

  images: Image[];

}
