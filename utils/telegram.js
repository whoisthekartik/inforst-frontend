export function getTelegramUser() {
  if (window.Telegram && window.Telegram.WebApp) {
    const user = window.Telegram.WebApp.initDataUnsafe?.user;
    return user ? { id: user.id, name: user.first_name } : null;
  }
  return null;
}