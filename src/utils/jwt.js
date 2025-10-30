import jwtDecode from "jwt-decode";

export function getTokenExpiration(token) {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp ? new Date(decoded.exp * 1000) : null;
  } catch {
    return null;
  }
}

export function isTokenExpired(token) {
  const exp = getTokenExpiration(token);
  if (!exp) return true;
  return new Date() > exp;
}
