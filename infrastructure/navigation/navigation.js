import { ROUTES } from "~/infrastructure/constants/routes";

export const navigation = () => {
    return [
        { id: 1, text: "Товары", to: ROUTES.catalog },
        { id: 2, text: "Избранное", to: ROUTES.favourites },
    ]
}