export default function ({ store, redirect }) {
    const isAuthenticated = store.getters["isAuthenticated"]
    if (!isAuthenticated)
        redirect("/login")
}