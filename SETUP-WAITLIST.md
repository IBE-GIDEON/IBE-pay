# Where the signups go (5 minutes, free forever)

1. New Google Sheet. Row 1 headers: `email`, `painPoint`, `at`
2. Extensions > Apps Script. Delete what is there, paste:

```js
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSheet().appendRow([d.email, d.painPoint || "", d.at]);
  return ContentService.createTextOutput("ok");
}
```

3. Deploy > New deployment > gear icon > Web app
   - Execute as: Me
   - Who has access: **Anyone**
   - Deploy, authorise, copy the `/exec` URL

4. Vercel > your project > Settings > Environment Variables
   - Name: `WAITLIST_WEBHOOK_URL`
   - Value: the `/exec` URL
   - Save, then Deployments > latest > Redeploy

Test it by joining your own waitlist. The row appears in the Sheet.

Until step 4 is done, signups are accepted but not stored anywhere.
