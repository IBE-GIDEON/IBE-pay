# Deploying IBE Pay

## 1. Somewhere to keep the signups (free)

Create a Google Sheet with headers: `email`, `painPoint`, `at`.
Extensions > Apps Script, paste this, Deploy > New deployment > Web app,
set access to "Anyone", copy the URL.

```js
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSheet().appendRow([d.email, d.painPoint || "", d.at]);
  return ContentService.createTextOutput("ok");
}
```

## 2. Deploy

```bash
npm i -g vercel
cd web
vercel
```

`vercel` opens a browser to log in - you have to do that part yourself.
Then add the webhook URL and redeploy to production:

```bash
vercel env add WAITLIST_WEBHOOK_URL production
vercel --prod
```

## 3. Domain

Buy the domain, then in the Vercel dashboard: Project > Settings > Domains.
A `.com.ng` runs about NGN 10-15k a year; a `.com` about USD 12.

## Notes

- Signups never fail for the visitor. If the webhook is down the error is
  logged server-side and the visitor still sees success - losing a signup is
  worse than an unrecorded one.
- With no `WAITLIST_WEBHOOK_URL` set, signups go to the server console.
