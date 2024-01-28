import { slugify } from "~/utils/formatters";

export const MENU_ITEMS_DISPLAY = [
  {
    title: "Trang chủ",
  },
  {
    title: "Đọc truyện",
  },
  {
    title: "Về tác giả",
  },
  {
    title: "Các dự án",
  },
  {
    title: "Bản tóm tắt",
  },
];

MENU_ITEMS_DISPLAY.forEach((item) => {
  if (item.title === "Trang chủ") {
    item.url = "";
  } else {
    item.url = slugify(item.title);
  }
});
