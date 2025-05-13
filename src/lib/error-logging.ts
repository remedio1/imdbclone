// lib/error-logging.ts


type ErrorLog = {
  id: string;
  timestamp: Date;
  message: string;
  stack?: string;
  componentStack?: string;
  userAgent: string;
  path: string;
};

export async function logError(error: Error, componentStack?: string): Promise<void> {
  const errorLog: ErrorLog = {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    message: error.message,
    stack: error.stack,
    componentStack,
    userAgent: navigator.userAgent,
    path: window.location.pathname,
  };

  // Envia para seu backend ou serviço (ex: Sentry, Firebase)
  await fetch('/api/errors', {
    method: 'POST',
    body: JSON.stringify(errorLog),
  });
}