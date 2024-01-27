export const MENU_ITEMS = {
  HOME: "home",
  POSTS: "posts",
  ABOUT: "about-the-author",
  PROJECTS: "projects",
  RESUME: "resume",
};

export const MENU_ITEMS_DISPLAY = [
  {
    key: MENU_ITEMS.HOME,
    title: "Trang chủ",
    url: "",
  },
  {
    key: MENU_ITEMS.POSTS,
    title: "Đọc truyện",
    url: MENU_ITEMS.POSTS,
  },
  {
    key: MENU_ITEMS.ABOUT,
    title: "Về tác giả",
    url: MENU_ITEMS.ABOUT,
  },
  {
    key: MENU_ITEMS.PROJECTS,
    title: "Các dự án",
    url: MENU_ITEMS.PROJECTS,
  },
  {
    key: MENU_ITEMS.RESUME,
    title: "Tóm tắt",
    url: MENU_ITEMS.RESUME,
  },
];
