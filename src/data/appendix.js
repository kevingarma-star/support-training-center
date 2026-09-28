export const APPENDIX = [
{ id:"A", title:"Key URLs", body:`
<div class="tbl"><table><tr><th>What</th><th>URL</th></tr>
<tr><td>Customer web app</td><td><code>app.logistimatics.com</code></td></tr>
<tr><td>Update payment</td><td><code>app.logistimatics.com/manage/payment</code></td></tr>
<tr><td>Cancel / reactivate</td><td><code>app.logistimatics.com/manage/subscriptions</code></td></tr>
<tr><td>Password reset</td><td><code>app.logistimatics.com/forgot</code></td></tr>
<tr><td>Activation</td><td><code>logistimatics.com/activate</code> (also <code>my.logistimatics.com/activate</code>)</td></tr>
<tr><td>Buy audio minutes</td><td><code>my.logistimatics.com/live-audio-for-gps-trackers/</code></td></tr>
<tr><td>Shop trackers</td><td><code>logistimatics.com/collections/gps-trackers</code></td></tr>
<tr><td>Help Center</td><td><code>help.logistimatics.com</code> · B2B: <code>help.gpx.co</code></td></tr>
<tr><td>API docs</td><td><code>docs.logistimatics.com</code></td></tr>
<tr><td>Privacy policy</td><td><code>logistimatics.com/privacy</code></td></tr>
<tr><td>GPX Admin</td><td><code>admin.gpx.co</code></td></tr>
<tr><td>Intercom</td><td><code>app.intercom.com</code></td></tr>
<tr><td>Support email</td><td><code>hello@logistimatics.com</code></td></tr>
<tr><td>Legal requests</td><td><code>legal@logistimatics.com</code></td></tr>
<tr><td>UPS claim sender address</td><td>620 S Elm St., Ste A, Greensboro, NC 27406</td></tr>
</table></div>`},
{ id:"B", title:"Discount codes & policies", body:`
<div class="tbl"><table><tr><th>Item</th><th>Rule</th></tr>
<tr><td><code>TRACKMORE2026</code></td><td>20% off the first payment. Use for saves, 2G upgrades and replacements.</td></tr>
<tr><td><code>SAVE10</code> / <code>LGMX50</code></td><td>10% off / 50% off (use LGMX50 sparingly)</td></tr>
<tr><td>Plans</td><td>$19.99/mo · $149.99/yr · legacy $14.95/mo (lost on any cancellation) · SmartLabel $0</td></tr>
<tr><td>Live audio</td><td>$6/hr · shared across the account · each call rounds up to the minute · usage posts 24+ h late · Mobile-200 only · US only · tracker must be moving</td></tr>
<tr><td>Returns</td><td>30 days from delivery · original box · no obsolete devices · a return doesn't cancel the subscription</td></tr>
<tr><td>Refunds</td><td>5–10 business days · subscription fees are case by case</td></tr>
<tr><td>Warranty</td><td>30 days from purchase</td></tr>
<tr><td>Shipping</td><td>Free USPS · UPS 2nd Day $30 · Next Day $50 · Friday orders ship the next business day · no international shipping</td></tr>
<tr><td>Hours &amp; SLA</td><td>Mon–Fri, 9–5 ET · first reply within 24 h · no inbound phone line (offer a callback)</td></tr>
<tr><td>Billing</td><td>Always automatic · no manual invoices (B2B included)</td></tr>
<tr><td>Save attempts</td><td>One per routine cancellation · never for deletion requests or customers who've clearly decided</td></tr>
</table></div>`},
{ id:"C", title:"Troubleshooting cheat sheet", body:`
<div class="tbl"><table><tr><th>Symptom</th><th>First moves</th></tr>
<tr><td>Not reporting / gray pin</td><td>Power → placement → coverage → force a report → reboot → backend reset → escalate</td></tr>
<tr><td>Rapid green blink (Mobile-200)</td><td>Reseat the SIM</td></tr>
<tr><td>Won't charge</td><td>Wall outlet (not a laptop) · clean the port · try another cable or adapter · photos · escalate</td></tr>
<tr><td>0% after charging</td><td>Confirm solid red while charging · power on after unplugging · go outside</td></tr>
<tr><td>Audio won't connect</td><td>Minutes · SOS number is the caller's phone · tracker online and <b>moving</b> · in the US · *82 · SIM reset (~30 min)</td></tr>
<tr><td>Wrong location</td><td>Check the fix type (GPS / Wi-Fi / cell) · sky view · STATUS# needs 7+ satellites</td></tr>
<tr><td>Fast battery drain (Protect Plus)</td><td>Turn off tamper and vibration alarms</td></tr>
<tr><td>Command stuck "queued"</td><td>No signal yet; the device may be asleep</td></tr>
<tr><td>SmartLabel silent</td><td>Tab cut cleanly · iPhones nearby · wait 15–30 min</td></tr>
<tr><td>Asset tracker "only one dot"</td><td>Normal: it reports 1–4 times a day and can't be woken</td></tr>
</table></div>
<p><b>Healthy CHECK#:</b> SERVER <code>1,device.logistimatics.com,6004</code> · APN matches the SIM. <b>Healthy STATUS#:</b> 3D fix, 7+ satellites, network ok.</p>`},
{ id:"D", title:"Password requirements", body:`
<div class="tbl"><table><tr><th>Requirement</th><th>Example</th></tr>
<tr><td>At least 8 characters</td><td rowspan="5"><code>Tracker#2026</code></td></tr>
<tr><td>1 uppercase letter</td></tr>
<tr><td>1 lowercase letter</td></tr>
<tr><td>1 number</td></tr>
<tr><td>1 special character, such as <code>_ # ? ! @ $ % ^ &amp; * ( ) -</code></td></tr>
</table></div>
<div class="note stop"><b>Never</b>Never ask a customer for their current password. Send the reset link, or offer to set a new password that meets these requirements.</div>`},
{ id:"E", title:"Glossary of terms", body:`
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Cell fix</td><td>A location from cell towers, used when GPS isn't available. Shown as a light-blue circle; less precise.</td></tr>
<tr><td>Cold start</td><td>The short delay (about 10–15 min or ½–1 mile) before a tracker reports after being off</td></tr>
<tr><td>Concession</td><td>A courtesy (refund, credit, extension, minutes) given as an exception. Always logged.</td></tr>
<tr><td>Data session</td><td>An active cellular data connection between the tracker and the network</td></tr>
<tr><td>Deactivation</td><td>Internally, this means canceling a device's SIM. Customers often use the word to mean canceling a subscription.</td></tr>
<tr><td>Fin / Lucy</td><td>Our Intercom AI chat assistant</td></tr>
<tr><td>Fruit Ninja</td><td>A temporary role for clearing quick tickets fast when the queue is backed up</td></tr>
<tr><td>Geofence</td><td>A virtual boundary that triggers an alert when a tracker enters or leaves it</td></tr>
<tr><td>ICCID</td><td>The SIM card's ID number (about 19 digits)</td></tr>
<tr><td>IMEI</td><td>The device's 15-digit hardware ID</td></tr>
<tr><td>MONPERMIT</td><td>The audio permission setting (1 = only the SOS number can call)</td></tr>
<tr><td>N/R · OTC</td><td>Account-note shorthand: network reset sent · one-time courtesy given</td></tr>
<tr><td>Network reset</td><td>A backend SIM refresh that clears connection problems (30–45 min offline)</td></tr>
<tr><td>Pin colors</td><td>Blue/green = online · red = stationary or no data session · gray = offline</td></tr>
<tr><td>Repo mode</td><td>Temporary rapid reporting (for example, every 2–5 min) on asset trackers</td></tr>
<tr><td>Serial number</td><td>The number printed on the device or box, usually 6 digits (SmartLabels start with SL)</td></tr>
<tr><td>SOS / Center number</td><td>The customer's phone number authorized to call the tracker for live audio</td></tr>
<tr><td>Tier 2</td><td>Our hardware specialists (Brooks, Alex), who investigate escalated device problems</td></tr>
<tr><td>Twilio / Super SIM / AT&amp;T / KORE</td><td>The carriers and SIM providers our trackers use</td></tr>
<tr><td>2G sunset</td><td>The shutdown of the 2G network, which made older 2G-only trackers obsolete</td></tr>
</table></div>`}
];
