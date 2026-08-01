export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "CryptoCanuck";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "CryptoCanuck — AI Infrastructure & Edge Systems";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Systems engineering portfolio focused on distributed AI, edge compute, industrial data, and open-source infrastructure.";

const configuredURL = process.env.NEXT_PUBLIC_URL;
const vercelURL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const baseURL = configuredURL || vercelURL || "https://cryptocanuck.com";

export const githubURL = "https://github.com/CryptoCanuck";
