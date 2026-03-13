const STORAGE_KEY = 'active_client_id';

export function getActiveClientId(): string | null {
  return sessionStorage.getItem(STORAGE_KEY);
}

export function setActiveClientId(clientId: string): void {
  sessionStorage.setItem(STORAGE_KEY, clientId);
}

export function clearActiveClientId(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}
