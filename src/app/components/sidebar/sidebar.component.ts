import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  {
    path: "/user-profile",
    title: "Create Process",
    icon: "library_books",
    class: "",
  },
  { path: "/table-list", title: "Processes", icon: "content_paste", class: "" },
  /*  { path: '/upgrade', title: 'Flow Chart',  icon:'settings', class: '' } , */
 /*  { path: "/departments", title: "Departments", icon: "poll", class: "" }, */
  { path: "/review-list", title: "For Review", icon: "content_paste", class: "" },
  { path: "/for-update-list", title: "For Update", icon: "content_paste", class: "" },
  {
    path: "/update-approve-list",
    title: "For Update Approve",
    icon: "content_paste",
    class: "", 
  },
  { path: "/ic-approved-list", title: "IC Approved", icon: "content_paste", class: "" },
  {
    path: "/strategy-approved-list",
    title: "Strategy Approved",
    icon: "content_paste",
    class: "",
  },
  { path: "/gm-approved-list", title: "GM Approved", icon: "content_paste", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
