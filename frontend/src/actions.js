export const TOGGLE_SIDE_MENU = "TOGGLE_SIDE_MENU";

export function toggleSideMenu(shouldOpen) {
    return {
        "type": TOGGLE_SIDE_MENU,
        "shouldOpen": shouldOpen
    }
}