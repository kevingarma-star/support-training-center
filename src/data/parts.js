export const PARTS = [
/* ================= PART 1 ================= */
{ id:"p1", part:1, title:"Welcome & Orientation", short:"Who we are, how we work, what to know before day one",
  blurb:"An introduction to who we are, how we work, and what you need to know before your first day on the floor.",
  quizTitle:"Orientation check",
  lessons:[
  { n:2, id:"l2", title:"Who are GPX Intelligence & Logistimatics?", mins:4, body:`
<p class="lead">The short version: We're a location intelligence company that helps people and businesses track what matters most to them — whether that's a family member, a delivery shipment, or an entire fleet of vehicles.</p>
<p>We operate under two brands:</p>
<div class="tbl"><table><tr><th>Brand</th><th>Who it serves</th><th>Help Center</th></tr>
<tr><td><b>Logistimatics</b></td><td>Individual consumers (B2C): families, drivers, small business owners</td><td><code>help.logistimatics.com</code></td></tr>
<tr><td><b>GPX Intelligence</b></td><td>Businesses (B2B): fleets, equipment managers, supply chain operators</td><td><code>help.gpx.co</code></td></tr>
</table></div>
<p class="small muted">Customers often use both names interchangeably — and that's okay. For support purposes treat them as the same company.</p>
<h3>Our Story</h3>
<div class="tbl"><table><tr><th>Year</th><th>Milestone</th></tr>
<tr><td>2016</td><td>Founded as Brickyard Wireless LLC in Greensboro, NC — later rebranded as Logistimatics.</td></tr>
<tr><td>2019</td><td>Moved into our own office and surpassed 25,000 active subscribers on our proprietary tracking platform.</td></tr>
<tr><td>2020</td><td>Acquired by Saltwater and began scaling B2B services under the GPX Intelligence brand.</td></tr>
</table></div>
<h3>What we do</h3>
<p><b>GPX Intelligence</b> specializes in GPS and Bluetooth (BLE) tracking for equipment, trailers, tools and vehicles. We serve 50+ industries worldwide and actively track more than 250,000 assets.</p>
<p><b>Logistimatics</b> is our consumer-facing brand offering self-service GPS tracking for vehicles, people, shipments and personal assets.</p>`},
  { n:3, id:"l3", title:"Our core values", mins:4, body:`
<div class="row" style="gap:14px;margin-bottom:10px"><span class="chip prog">2026 theme: On Target</span><span class="chip">Our niche: loss prevention you can measure</span></div>
<div class="tbl"><table><tr><th>Value</th><th>What it means</th><th>In a support conversation</th></tr>
<tr><td><b>Truth, not noise</b><br><span class="small muted">"Signal, not dashboards for their own sake."</span></td><td>Boil every problem down to its core facts. Communicate clearly and directly.</td><td>Find the real cause (placement? SIM? motion?) before sending fixes, and tell the customer plainly.</td></tr>
<tr><td><b>Customer wins, we win</b><br><span class="small muted">"Your outcome is the only metric."</span></td><td>We only succeed when our customers do.</td><td>Solve the customer's problem, not just the ticket.</td></tr>
<tr><td><b>Make it simple</b><br><span class="small muted">"Live in days, not quarters."</span></td><td>Complexity is a tax. If it's hard to explain, it isn't finished.</td><td>Keep replies short, ask one question at a time, and use clear steps.</td></tr>
<tr><td><b>Lead your lane</b><br><span class="small muted">"We do one thing at world-class depth."</span></td><td>Don't wait for permission to solve a problem.</td><td>Own your conversations from start to finish, including after a Tier 2 escalation.</td></tr>
<tr><td><b>Disagree, commit, iterate</b><br><span class="small muted">"The product you buy keeps getting better."</span></td><td>Challenge ideas openly, then back the decision 100%.</td><td>Suggest better macros. Once a policy is set, apply it consistently.</td></tr>
</table></div>`},
  { n:4, id:"l4team", title:"Meet the team", mins:4, body:`
<p class="lead"><b>The people who answer when you call.</b> No ticket queues into the void. GPX is a deliberately small, senior team — the person who sets up your account is the person who picks up the phone.</p>
<p class="small muted">Source: <a href="https://gpx.co/about-us/" target="_blank" rel="noopener">gpx.co/about-us</a></p>
<h3>The team</h3>
<div class="dir">
<div class="dept"><div class="dept-h">Customer Experience &amp; Success</div><div class="team">
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2024/02/Faith-OMalley.jpg" alt="Faith O'Malley"><div><b>Faith O'Malley</b><span>Customer Success Manager</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/dane-chung-customer-success-manager-gpx.webp" alt="Dane Chung"><div><b>Dane Chung</b><span>Customer Success Manager</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/kevin-garma-customer-support-agent-gpx.webp" alt="Kevin Garma"><div><b>Kevin Garma</b><span>Customer Support Agent</span></div></div>
</div></div>
<div class="dept"><div class="dept-h">Sales &amp; Marketing</div><div class="team">
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/mitch-belsley-vice-president-gpx.webp" alt="Mitch Belsley"><div><b>Mitch Belsley</b><span>Vice President</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/mariam-ghanem-account-executive-gpx.webp" alt="Mariam Ghanem"><div><b>Mariam Ghanem</b><span>Account Executive</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/mike-cadavida-account-executive-gpx.webp" alt="Mike Cadavida"><div><b>Mike Cadavida</b><span>Account Executive</span></div></div>
</div></div>
<div class="dept"><div class="dept-h">Product &amp; Business Intelligence</div><div class="team">
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/brooks-davis-director-of-hardware-gpx.webp" alt="Brooks Davis"><div><b>Brooks Davis</b><span>Director, Hardware</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/aaron-taylor-business-intelligence-analyst-gpx.webp" alt="Aaron Taylor"><div><b>Aaron Taylor</b><span>Business Intelligence Analyst</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/ivan-kulikov-senior-engineer-gpx.webp" alt="Ivan Kulikov"><div><b>Ivan Kulikov</b><span>Senior Engineer</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/daniel-yankovskiy-senior-engineer-gpx.webp" alt="Daniel Yankovskiy"><div><b>Daniel Yankovskiy</b><span>Senior Engineer</span></div></div>
</div></div>
<div class="dept"><div class="dept-h">Operations &amp; Finance</div><div class="team">
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/tammy-henning-head-of-operations-and-finance-gpx.webp" alt="Tammy Henning"><div><b>Tammy Henning</b><span>Head of Operations, Finance</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/kevin-west-fulfillment-and-operations-director-gpx.webp" alt="Kevin West"><div><b>Kevin West</b><span>Fulfillment &amp; Operations Director</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/jay-bryant-fulfillment-specialist-gpx.webp" alt="Jay Bryant"><div><b>Jay Bryant</b><span>Fulfillment Specialist</span></div></div>
</div></div>
<div class="dept"><div class="dept-h">Leadership &amp; Advisory</div><div class="team">
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/gabe-weeks-ceo-gpx.webp" alt="Gabe Weeks"><div><b>Gabe Weeks</b><span>CEO</span></div></div>
<div class="tm"><img class="av" src="https://gpx.co/wp-content/uploads/2026/09/ryan-graves-owner-and-advisor-gpx.webp" alt="Ryan Graves"><div><b>Ryan Graves</b><span>Owner</span></div></div>
</div></div>
</div>
<h3>Who to go to</h3>
<ul>
<li><b>Mitch Belsley:</b> support escalations and suspected product bugs</li>
<li><b>Brooks Davis (Tier 2, with Alex):</b> device and connectivity problems</li>
<li><b>Operations &amp; Finance:</b> disputes, chargebacks and shipments</li>
<li><b>Sales (Mariam, Mike):</b> business and fleet leads</li>
<li><b>Lucy:</b> our Fin AI chat assistant, not a person</li>
</ul>`},
  { n:5, id:"l4p", title:"Team policy: tardiness & attendance", mins:4, body:`
<h3>Tardiness</h3>
<ul>
<li>If you're running late, <b>contact management within 10 minutes</b> of your shift start.</li>
<li>Being late within that 10-minute window over and over can add up to an <b>unexcused absence</b>.</li>
</ul>
<ol class="steps">
<li><b>1st time:</b> a conversation</li>
<li><b>2nd time:</b> a warning, with documentation</li>
<li><b>3rd time:</b> possible action, such as a schedule change or an unexcused absence</li>
</ol>
<h3>Attendance</h3>
<p>You're expected at work, on time, on the days you've agreed to work. Plan any time off with management so the team always has support coverage.</p>
<div class="tbl"><table><tr><th>Type</th><th>What it means</th><th>Examples</th></tr>
<tr><td><b>Unexcused absence</b></td><td>Missing work without a legitimate reason. You'll be told when one is recorded.</td><td>Calling out for an unplanned vacation, leisure, poor planning</td></tr>
<tr><td><b>Excused absence</b></td><td>Missing work for a legitimate reason you couldn't plan around, or an important need</td><td>Sickness or an ongoing medical issue, a death in the family, voting, a DMV requirement</td></tr>
</table></div>
<div class="note stop"><b>Important</b><b>3 unexcused absences within 6 months</b> can lead to disciplinary action: a performance improvement plan, schedule changes, or termination of employment.</div>`},
  { n:6, id:"l5p", title:"Team policy: calling out, time off & schedule", mins:4, body:`
<h3>Calling out for a shift</h3>
<p>Sometimes you have to call out. It happens. Here's how:</p>
<ol class="steps">
<li>Tell management on <b>Slack or by email</b> as soon as possible.</li>
<li><b>Follow up</b> to make sure management has all the details and knows you're calling out.</li>
</ol>
<ul>
<li><b>If you're ill</b> and have a reason <i>not</i> to see a doctor, talk to management about it. Too many sick call-outs without a doctor's note can be recorded as unexcused, and can lead to schedule changes or other action.</li>
<li><b>More than 3 unexcused call-outs in 6 months</b> can lead to warnings, a performance improvement plan, or termination.</li>
</ul>
<h3>Requesting time off</h3>
<ol class="steps">
<li><b>Email management</b> with your request.</li>
<li>Send it as early as you can. <b>Two weeks' notice is preferred.</b> Shorter notice is reviewed case by case, and how often you've asked is considered.</li>
<li>Leadership replies by email with an approval or denial, <b>usually within 24 hours</b>.</li>
<li>Approved time off goes on the <b>Customer Support Google Calendar</b>.</li>
<li><b>Check that the calendar shows the right days.</b> Confirming it is your responsibility.</li>
</ol>
<h3>Extended support schedule</h3>
<p>To answer customers faster and cut resolution times, the Customer Support team works <b>extended hours</b>. Shifts are staggered so someone is always working the queue.</p>
<div class="tbl"><table><tr><th>Shift</th><th>Coverage</th></tr>
<tr><td><b>Early shift</b></td><td>Starts at <b>5 AM EST</b> and kicks off the day</td></tr>
<tr><td><b>Late shift</b></td><td>Covers support until <b>9 PM EST</b> and wraps up the day</td></tr>
</table></div>
<ul>
<li>Your exact shift is set with management. The full shift grid is on the <a href="https://app.notion.com/p/38a5f2c317274786a6701f3337d4d610" target="_blank" rel="noopener">Extended Support Schedule</a> page in Notion.</li>
<li>Before your shift ends, hand off anything open. Leave clear notes so the next shift can pick up where you stopped.</li>
<li>Our <b>customer-facing</b> hours are still Monday–Friday, 9 AM–5 PM ET. The extended schedule is how we get replies out faster.</li>
</ul>`},
  ],
  quiz:[
  {q:"What is GPX Intelligence?", o:["A consumer app for families only","A location intelligence company for GPS and BLE asset tracking (equipment, trailers, tools, vehicles)","Our shipping partner","A SIM card carrier"], a:1, why:"GPX is our B2B brand. Logistimatics is the consumer brand."},
  {q:"Which core value is about owning problems in your area without waiting for permission?", o:["Truth, not noise","Make it simple","Lead your lane","Customer wins, we win"], a:2, why:"Lead your lane: take the initiative and see it through."},
  {q:"You're running late. When must you contact management?", o:["Whenever you arrive","Within 10 minutes of your shift starting","By the end of the day","Only if you'll be more than an hour late"], a:1, why:"Contact management within 10 minutes of your shift start."},
  {q:"How many unexcused absences within 6 months can lead to disciplinary action?", o:["1","2","3","5"], a:2, why:"3 unexcused absences in 6 months can lead to a PIP, schedule changes or termination."},
  {q:"How much notice is preferred for a time-off request?", o:["24 hours","1 week","2 weeks","1 month"], a:2, why:"Two weeks is preferred. Shorter notice is reviewed case by case."},
  {q:"Your time off was approved. What's your responsibility next?", o:["Nothing","Confirm the Customer Support Google Calendar shows the correct days","Tell customers","Update Intercom hours"], a:1, why:"Confirming the calendar is correct is your responsibility."},
  {q:"Who is our Director of Hardware and a Tier 2 contact?", o:["Kevin West","Brooks Davis","Aaron Taylor","Mike Cadavida"], a:1, why:"Brooks Davis leads Hardware and handles Tier 2 escalations."},
  {q:"How do you call out for a shift?", o:["Just don't log in","Tell management on Slack or by email ASAP, then follow up to confirm","Ask a teammate to tell someone","Post in the customer chat"], a:1, why:"Notify management right away, then confirm they have the details."},
  {q:"Which of these is an excused absence?", o:["An unplanned vacation","Poor planning","A death in the family","Leisure"], a:2, why:"Excused absences cover legitimate needs like illness, bereavement, voting or DMV requirements."}
  ]
},
/* ================= PART 2 ================= */
{ id:"p2", part:2, title:"Tools & Systems", short:"Intercom, Admin, SIM portals, billing tools",
  blurb:"The systems you'll work in every day, and what each one is for.",
  quizTitle:"Tools Knowledge Quiz",
  lessons:[
  { n:7, id:"l7", title:"Intercom & Lucy (Fin AI)", mins:6, body:`
<p><b>Intercom</b> is our helpdesk. Chats from the website and app, plus emails to <code>hello@logistimatics.com</code>, all land in the <b>LGMX – Customer Support</b> inbox.</p>
<h3>How Lucy fits in</h3>
<ul>
<li><b>Lucy</b> (Fin AI) answers first. She handles activation, audio setup, pin colors, policy explanations and password reset links.</li>
<li>About 4 in 10 AI conversations are escalated to us, mostly because the customer asked for a human. Read the transcript first so you don't repeat what Lucy already tried.</li>
<li>The messenger buttons route conversations by topic: Set Up My Device, Something's Not Working, Manage My Subscription/Account, Order/Shipping, and I'm Interested in Your Products.</li>
</ul>
<h3>Working a conversation</h3>
<ul>
<li><b>Macros</b> are saved replies. Always personalize them before sending.</li>
<li><b>Fill in the attributes</b> on every conversation: Serial Number, Tracker Model, Trouble Type, Issue Type and B2C Churn Gut Check. If you gave the customer anything, also fill in Concession Type, Amount and Scenario.</li>
<li><b>Tag every conversation you close.</b> It takes about 10 seconds. Untagged conversations have run at 36–58% of weekly volume, which skews our reports.</li>
<li><b>Snooze</b> sends an automatic check-in after about a day, then the conversation auto-closes after 3 more days. Clear your snoozed queue before the week ends.</li>
<li><b>Converting a conversation to a Customer Ticket</b> is how you escalate to Tier 2 (see lesson 46).</li>
</ul>`},
  { n:8, id:"l8", title:"GPX Admin", mins:6, body:`
<p><b>GPX Admin</b> (<code>admin.gpx.co</code>) is where you manage everything behind a customer's account.</p>
<div class="tbl"><table><tr><th>Area</th><th>What you do there</th></tr>
<tr><td>Accounts</td><td>Look up customers by email. Check billing details for identity verification. Add account notes. <b>Impersonate the user</b> to see exactly what they see. Suspend users.</td></tr>
<tr><td>Devices</td><td>Check the IMEI and SIM, open the SIM portal link (the red Twilio, Supersim or att link under the ICCID), view logs and send commands.</td></tr>
<tr><td>Subscriptions</td><td>Activate, cancel, reactivate, change the renewal date or price.</td></tr>
<tr><td>Orders</td><td>View orders. Refund with ⋯ → Refund (Admin emails the customer automatically). Create replacement orders.</td></tr>
<tr><td>Feature flags</td><td>Turn on account features, such as Custom Commands for audio self-tests or the High-Security flag.</td></tr>
</table></div>
<h3>Sending a command</h3>
<p>Go to Send Commands → choose the serial → "other" → "type in a command" → <b>Send Via SMS</b>.</p>
<h3>Account note shorthand</h3>
<ul>
<li><code>N/R</code> means a network reset was sent.</li>
<li><code>OTC</code> means a one-time courtesy was given.</li>
</ul>
<p>Leave a short note whenever you take an action, so the next agent can see the history.</p>`},
  { n:9, id:"l9", title:"SIM portals & the coverage map", mins:4, body:`
<ul>
<li><b>SIM portals</b> (Twilio/Super SIM, AT&amp;T, KORE): check that the SIM status is <b>active</b>, see data sessions and which carrier the device is on, run network resets, and check comm plans.</li>
<li>Most older SIMs are <b>Twilio</b>. Newer 4G units ship with <b>AT&amp;T</b> SIMs. The AssetTrack Mini uses a <b>KORE</b> SIM that works on both AT&amp;T and T-Mobile.</li>
<li>AT&amp;T has no network-reset button. If an AT&amp;T SIM shows no phone number in Admin, use Sync Phone Number, or Swap SIM with the ICCID unchanged.</li>
<li><b>FCC coverage map:</b> choose the layer that matches the SIM: T-Mobile LTE Data, T-Mobile LTE Voice (for audio), or AT&amp;T Mobility LTE Data.</li>
</ul>
<p class="small muted">There are Loom walkthroughs for checking SIM status, data sessions and coverage in the Resource Library.</p>`},
  { n:10, id:"l10", title:"Stripe, Shopify & ShipStation", mins:4, body:`
<div class="tbl"><table><tr><th>Tool</th><th>Use it for</th><th>Watch out</th></tr>
<tr><td><b>Stripe</b></td><td>Finding a charge by email, order ID or last 4 digits. Refunding charges that have no Admin order. Blocking fraudulent cards.</td><td>Refund through Admin whenever there's an order. Get proof (last 4 digits or a screenshot) before a Stripe refund.</td></tr>
<tr><td><b>Shopify</b></td><td>Orders placed through Shopify, and refunds on those orders</td><td>Refund Shopify orders in Shopify</td></tr>
<tr><td><b>ShipStation</b></td><td>Order tracking, "Create Return" labels, checking what shipped</td><td>Check what shipped before assuming a wrong item</td></tr>
</table></div>
<p>Charges show on bank statements as <b>"SP AFF* Logistimatics."</b> If a customer doesn't recognize a charge, look for a matching order.</p>`},
  { n:11, id:"l11", title:"The customer app & web portal", mins:5, body:`
<ul>
<li><b>Apps:</b> "Logistimatics" on iOS and Android. <b>Web:</b> <code>app.logistimatics.com</code>. The app was rebuilt in 2026 with the same logins and features in a new layout. If a customer reports a glitch, ask them to update the app first.</li>
<li><b>Tabs under the map:</b> Map, Info (the tracker's phone number and audio minutes), Commands and Alerts.</li>
</ul>
<div class="tbl"><table><tr><th>Customer task</th><th>Where</th></tr>
<tr><td>Update the card on file</td><td><code>app.logistimatics.com/manage/payment</code></td></tr>
<tr><td>Cancel or reactivate a subscription</td><td><code>app.logistimatics.com/manage/subscriptions</code></td></tr>
<tr><td>Download an invoice</td><td>Manage → Order History → ⋯ → View Invoice</td></tr>
<tr><td>Reset a password</td><td><code>app.logistimatics.com/forgot</code></td></tr>
<tr><td>Set up alerts</td><td>App: Account → Alerts Settings. Web: Menu → Alerts. Push notifications can only be set in the app.</td></tr>
<tr><td>Create a geofence</td><td>Menu → Geofences → New, then turn on enter/exit alerts for that tracker</td></tr>
<tr><td>Invite other users</td><td>Web: Manage → User Access → Invite User. The invite expires after <b>36 hours</b>.</td></tr>
<tr><td>Change the reporting interval</td><td>Tracker → Commands → New → choose a mode → Send</td></tr>
</table></div>
<h3>Map basics</h3>
<ul>
<li><b>Pin colors:</b> blue or green means online, red means stationary or not in a data session, gray means offline. A light-blue circle is a <b>cell fix</b>, which is less accurate.</li>
<li><b>History</b> goes back 90 days. Customers who need a permanent record should save a <b>report</b>, which is kept indefinitely.</li>
<li><b>Geofence alerts</b> fire only when a new report lands on the other side of the fence from the previous one.</li>
</ul>`},
  { n:12, id:"l12", title:"Team tools & daily rhythm", mins:3, body:`
<div class="tbl"><table><tr><th>Tool</th><th>What it's for</th></tr>
<tr><td>Slack</td><td>Team chat and quick questions (logistimatics.slack.com, sign in with Google)</td></tr>
<tr><td>Notion</td><td>Internal knowledge base: the Device Troubleshooting Guide, policies, standups</td></tr>
<tr><td>Google Drive</td><td>Macro sheets, reports, EOW updates</td></tr>
<tr><td>Loom</td><td>Short how-to videos</td></tr>
<tr><td>Zoom</td><td>Meetings and customer callbacks</td></tr>
<tr><td>Lattice</td><td>Goals, updates and performance reviews</td></tr>
</table></div>
<h3>The team's weekly rhythm</h3>
<ul>
<li><b>Every day:</b> post your start-of-day report (top 3 priorities), work support requests, then post your end-of-day report.</li>
<li><b>Mon &amp; Fri:</b> CS Checkpoint.</li>
<li><b>Wed:</b> Support Huddle, where we share wins and case studies.</li>
<li><b>Thu:</b> bi-weekly 1:1 with your lead and the bi-weekly All-Hands.</li>
<li><b>Fri:</b> End of Week update.</li>
</ul>`}
  ],
  quiz:[
  {q:"Where do you issue a refund for an order that exists in Admin?", o:["Stripe","Admin: order → ⋯ → Refund","Intercom","ShipStation"], a:1, why:"Refund through Admin whenever there's an order. It also notifies the customer automatically."},
  {q:"How do you check whether a device's SIM is active?", o:["Ask the customer","In Admin, click the red Twilio, Supersim or att link under the ICCID","Look at the app","Send RESET#"], a:1, why:"The SIM portal link in Admin shows the SIM's status."},
  {q:"What does N/R mean in an account note?", o:["No Refund","Network Reset sent","Not Reporting","New Registration"], a:1, why:"N/R is shorthand for a network reset. OTC means a one-time courtesy."},
  {q:"A customer's Shopify order needs a refund. Where do you process it?", o:["Admin","Stripe","Shopify","PayPal"], a:2, why:"Shopify orders are refunded in Shopify."},
  {q:"What must you do on every conversation before you close it?", o:["Nothing","Tag it and fill in the key attributes","Forward it to Slack","Convert it to a ticket"], a:1, why:"Tagging and attributes keep our reports accurate."},
  {q:"Which coverage map layer do you check for a live audio problem on a T-Mobile SIM?", o:["AT&T Mobility LTE Data","T-Mobile LTE Voice","T-Mobile LTE Data only","None"], a:1, why:"Audio uses the voice network, so check the carrier's voice layer."}
  ]
},
/* ================= PART 3 ================= */
{ id:"p3", part:3, title:"Product Mastery", short:"Every tracker, live audio, networks, plans",
  blurb:"Each tracker we support, how live audio works, how our devices connect, and what our plans cost.",
  quizTitle:"Product Knowledge Quiz",
  lessons:[
  { n:13, id:"l13", title:"The lineup at a glance", mins:6, body:`
<div class="tbl"><table><tr><th>Model</th><th>Power</th><th>Default reporting</th><th>Battery</th><th>Live audio</th></tr>
<tr><td><b>Mobile-200 (200G)</b><br><span class="muted small">Flagship. About 88% of device conversations are about this model.</span></td><td>Rechargeable, magnetic mount, IP67</td><td>Every 30 s while moving, hourly while parked</td><td>About 7–10 days</td><td><span class="chip good">Yes</span></td></tr>
<tr><td><b>Car Charger</b><br><span class="muted small">Discontinued, still supported</span></td><td>12V accessory port</td><td>Every 400 m</td><td>Runs on vehicle power</td><td><span class="chip good">Yes</span> (1 SOS number only)</td></tr>
<tr><td><b>Protect Plus</b></td><td>Rechargeable</td><td>30 s moving, 1 h parked</td><td>About 2 weeks</td><td><span class="chip bad">No</span></td></tr>
<tr><td><b>Road-Wired</b></td><td>Hardwired to 12V</td><td>30 s moving, 1 h parked</td><td>Backup battery lasts under 24 h</td><td><span class="chip bad">No</span></td></tr>
<tr><td><b>Pocket Tracker / Micro-431</b></td><td>USB-C</td><td>Every 400 m</td><td>Up to about 10 days</td><td><span class="chip bad">No</span></td></tr>
<tr><td><b>AssetTrack Mini</b></td><td>Long-life battery</td><td>Every 24 h</td><td>About 5 years</td><td><span class="chip bad">No</span></td></tr>
<tr><td><b>Asset 432 / 422</b></td><td>Battery</td><td>1–4 times a day</td><td>Long life</td><td><span class="chip bad">No</span></td></tr>
<tr><td><b>SmartLabel</b></td><td>Disposable Bluetooth label</td><td>Broadcasts every 2 min</td><td>Up to about 2 months</td><td><span class="chip bad">No</span></td></tr>
</table></div>
<h3>Which tracker to recommend</h3>
<div class="tbl"><table><tr><th>The customer needs…</th><th>Recommend</th></tr>
<tr><td>Real-time tracking plus the ability to listen in</td><td>Mobile-200. Be upfront that audio costs $6/hour and only works while the tracker is moving.</td></tr>
<tr><td>Real-time tracking, no audio, longer battery life</td><td>Protect Plus</td></tr>
<tr><td>A permanent install in a vehicle</td><td>Road-Wired (a mechanic install is recommended)</td></tr>
<tr><td>Tracking equipment or trailers that sit for months</td><td>AssetTrack Mini or Asset 432</td></tr>
<tr><td>Tracking shipments or envelopes</td><td>SmartLabel (no subscription)</td></tr>
<tr><td>A fleet of 5+ trackers</td><td>Collect the company name, quantity and use case, then route them to GPX sales</td></tr>
</table></div>`},
  { n:14, id:"l14", title:"Mobile-200 deep dive", mins:5, body:`
<h3>Lights</h3>
<ul>
<li><b>Solid red:</b> charging. <b>Slow-blinking red:</b> full.</li>
<li><b>Green blinking about every 3 seconds:</b> connected and normal. <b>Rapid green:</b> the SIM may need reseating.</li>
</ul>
<h3>Power &amp; charging</h3>
<ul>
<li><b>The power button can't turn the tracker off.</b> That's intentional. To check whether it's on, have the customer press the button: if all the lights flash briefly, it's on.</li>
<li>Charge from a wall outlet with the included adapter. A laptop USB port may not supply enough power. A full charge takes 4–5 hours. On a completely drained unit, the red light can take up to 30 minutes to appear.</li>
<li>Battery drains faster indoors, in weak coverage, and when live audio is used.</li>
</ul>
<h3>Hardware</h3>
<ul>
<li>The microphone is at the charging-port end and picks up sound within a few feet.</li>
<li><b>SIM reseat:</b> remove the magnetic plate and the 6 screws (#0 Phillips), slide the SIM out and back in, then test before closing the case.</li>
</ul>
<h3>Setup</h3>
<p>Onboarding checklist: download the app, set up the profile, explore the tabs, create geofences, and set the SOS number for audio. Setup takes about 30 minutes, and we can offer a walkthrough call.</p>`},
  { n:15, id:"l15", title:"Live audio — how it works", mins:7, body:`
<ul>
<li>The customer calls the tracker's phone number and <b>listens live</b>. Nothing is recorded, and there are no alerts triggered by sound.</li>
<li><b>Supported on:</b> Mobile-200 and the legacy Car Charger only.</li>
<li><b>US networks only</b>, in the contiguous US. A tracker abroad still reports its location, but audio can't connect.</li>
<li><b>The tracker must be moving.</b> A parked tracker sleeps, and callers hear voicemail or "customer not available."</li>
</ul>
<h3>Minutes</h3>
<div class="tbl"><table><tr><th>Fact</th><th>Details</th></tr>
<tr><td>Price</td><td><b>$6 per hour</b>, sold in 60-minute units. Not included in the subscription.</td></tr>
<tr><td>Scope</td><td>Minutes belong to the <b>account</b> and are shared by all its audio-capable trackers.</td></tr>
<tr><td>Rounding</td><td>Every call rounds up to a full minute, so a 10-second call uses 1 minute.</td></tr>
<tr><td>Delay</td><td>Usage can take 24+ hours to post. Any overage is deducted from the next purchase.</td></tr>
<tr><td>Where to buy</td><td>In the app (Info → Buy More) or at <code>my.logistimatics.com/live-audio-for-gps-trackers/</code></td></tr>
<tr><td>At zero balance</td><td>The SIM is blocked from calls. After the customer buys more, an agent can reset the SIM (about 30 minutes).</td></tr>
</table></div>
<h3>Setting the SOS number</h3>
<ol class="steps">
<li>In the app, go to Commands → New → <b>Set SOS Numbers</b>.</li>
<li>Enter the customer's <b>own cell number</b>, not the tracker's number. Entering the tracker's number is the most common mistake.</li>
<li>Wait for "OK!" to appear in the command log.</li>
<li>Call the tracker's number (shown in the Info tab) <b>from that same phone</b>. If caller ID is blocked, dial *82 first.</li>
</ol>
<div class="note warn"><b>Set expectations early</b>Two things customers often don't know when they buy: audio minutes cost extra, and audio only works while the tracker is moving. Both are among our top reasons for returns.</div>`},
  { n:16, id:"l16", title:"Car Charger, Protect Plus, Road-Wired & Pocket", mins:5, body:`
<ul>
<li><b>Car Charger:</b> a red LED means it's getting power. Some vehicles only power the accessory port while the ignition is on. To test the port, plug a phone into the tracker's USB port. It has the best audio of our models.</li>
<li><b>Protect Plus:</b> press the top button to see the blue LEDs. The power switch and SIM are under the front plate and a gasket. Anti-tamper alerts (removal, cover open, installation, vibration) can drain the battery. After 5 minutes stationary it hibernates.</li>
<li><b>Road-Wired:</b> a red LED means it has power. Wiring: <b>red</b> to 12V constant, <b>black</b> to ground, <b>orange</b> to ignition (optional). Use the PWR connector. Don't install it under the hood or in the trunk.</li>
<li><b>Pocket Tracker / Micro-431:</b> charges over USB-C. Hold SOS until it vibrates to confirm power and force a report. Battery life depends on the reporting interval: about 10 days at the default, 14–17 days at 15 minutes, and about a month at hourly.</li>
</ul>
<h3>Placement: the #1 cause of tracking problems</h3>
<ul>
<li>The tracker needs a clear view of the sky. Avoid metal, trunks, glove boxes, engine bays and garages.</li>
<li>Under a vehicle, place it near the edge of the frame. Indoors, place it near a window.</li>
<li>For audio, the tracker must be inside the cabin.</li>
</ul>`},
  { n:17, id:"l17", title:"Asset trackers & SmartLabel", mins:4, body:`
<h3>Asset 432/422 &amp; AssetTrack Mini</h3>
<ul>
<li>These report 1–4 times a day and <b>can't be woken on demand</b>. Commands and geofence alerts only go through at the next check-in. If a customer needs real-time tracking, recommend the Mobile-200 or Protect Plus.</li>
<li><b>AssetTrack Mini:</b> magnetic side toward the asset, antenna side up. Battery life is about 5 years at 24-hour reporting and about 6 months at hourly. If it only shows Wi-Fi or cell locations, move it somewhere with a better sky view.</li>
<li>Asset 432 replacement batteries aren't sold on the website. Order them manually, and charge the card on file only with the customer's OK.</li>
</ul>
<h3>SmartLabel</h3>
<ul>
<li>Serials start with <code>SL</code>. SmartLabels use Apple's <b>Find My</b> Bluetooth network, not cellular, so updates depend on iPhones passing nearby.</li>
<li><b>No subscription:</b> checkout shows $0. Customers can activate them themselves.</li>
<li>The label is inactive until its tab is cut. The first location appears 15–30 minutes after cutting, if iPhones are nearby.</li>
<li>Battery lasts up to about 2 months. Labels are splash-resistant only.</li>
<li>Gaps are normal in transit: expect hours or days on rail, and updates mostly at ports and airports for ocean and air shipments.</li>
</ul>`},
  { n:18, id:"l18", title:"Networks, SIMs & the 2G sunset", mins:4, body:`
<ul>
<li><b>SIMs are locked to their device.</b> Never swap SIMs between trackers.</li>
<li>Check the SIM type in Admin: Twilio or Super SIM (usually T-Mobile), AT&amp;T, or KORE (AssetTrack Mini, which works on both AT&amp;T and T-Mobile).</li>
<li><b>2G is gone.</b> T-Mobile has finished shutting down its 2G network, so 2G-only trackers no longer report anywhere in the US. Examples: Auto-270, Auto-325, Asset Tracker 4, Micro-299, Mobile-200 Gen 1, Mobile-200i Gen 2, Qbit, the old USB Car Charger, Wired-300.
<ul><li>A SIM swap won't revive them, and we don't accept returns on obsolete devices.</li><li>Offer a 4G upgrade with <code>TRACKMORE2026</code> (20% off).</li></ul></li>
<li><b>SIMs canceled for inactivity:</b> some older SIMs were permanently canceled because carriers recycle numbers.
<ul><li>If a customer reactivates one of these trackers, cancel the new subscription, refund it, and offer 20% off a new tracker.</li><li>Current AT&amp;T SIMs stay reusable no matter how long they've been inactive.</li></ul></li>
</ul>`},
  { n:19, id:"l19", title:"Subscription plans & pricing", mins:4, body:`
<div class="tbl"><table><tr><th>Plan</th><th>Price</th><th>Notes</th></tr>
<tr><td><b>Monthly</b></td><td><b>$19.99/month</b></td><td>Auto-renews every month</td></tr>
<tr><td><b>Annual</b></td><td><b>$149.99/year</b></td><td>About $12.50/month. Saves $89.89 compared with paying monthly ($239.88).</td></tr>
<tr><td>Legacy</td><td>$14.95/month</td><td>Grandfathered. The rate is <b>lost</b> if the subscription cancels for any reason, including a failed card.</td></tr>
<tr><td>SmartLabel</td><td>$0</td><td>No subscription</td></tr>
<tr><td>Live audio</td><td>$6/hour</td><td>Add-on, shared across the account</td></tr>
</table></div>
<ul>
<li>Each tracker has its own subscription, tied to its <b>serial number</b>.</li>
<li>Billing is automatic from the card on file (debit or credit only). Tax varies by state. Monthly plans can't be prepaid.</li>
<li>Some existing renewals still show older prices, such as $24.95 or $179.40. <b>Check the customer's actual plan in Admin</b> before quoting a price.</li>
<li><b>GPX business accounts moved to Logistimatics:</b> a legacy dealer rate (for example $6/mo) applies only to the transition purchase. After that, standard rates apply. Billing is always automatic, with no manual invoices, even for B2B.</li>
</ul>`}
  ],
  quiz:[
  {q:"A customer with a Protect Plus says live audio won't connect. What's the issue?", o:["Wrong SOS number","Protect Plus doesn't support live audio","Out of minutes","The SIM needs a reset"], a:1, why:"Only the Mobile-200 (and the legacy Car Charger) support audio."},
  {q:"A Mobile-200's green light is blinking rapidly. What does that suggest?", o:["Fully charged","Normal","The SIM may need reseating","GPS lock"], a:2, why:"A slow blink every 3 seconds is normal. A rapid blink points to the SIM."},
  {q:"A customer made 12 calls of about 10 seconds each. How many minutes did they use?", o:["2","12","0","1"], a:1, why:"Every call rounds up to a full minute."},
  {q:"A customer's tracker is parked in the driveway and calls go to \"customer not available.\" Why?", o:["Wrong SOS number","The tracker is asleep; audio needs it to be moving","No minutes","Caller ID"], a:1, why:"A parked tracker sleeps, so audio won't connect."},
  {q:"What should the SOS number be?", o:["The tracker's number","The customer's own cell phone","Our support line","Any landline"], a:1, why:"The call has to come from the SOS number."},
  {q:"What does a SmartLabel subscription cost?", o:["$19.99/mo","$149.99/yr","Nothing; there's no subscription","$6/hr"], a:2, why:"SmartLabels have no subscription."},
  {q:"An Asset 432 owner sent a command an hour ago and nothing has happened. Why?", o:["It's broken","It can't be woken; the command goes through at its next check-in","Send the command 3 times","The SIM is canceled"], a:1, why:"Asset trackers report 1–4 times a day."},
  {q:"What are the current standard plan prices?", o:["$24.95/mo or $179.40/yr","$19.99/mo or $149.99/yr","$14.95/mo","$9.99/mo"], a:1, why:"Monthly $19.99 or annual $149.99."},
  {q:"A customer on the legacy $14.95 plan had their card fail and the subscription canceled. What rate do they get when they reactivate?", o:["$14.95","Current rates, because the grandfathered rate is lost on any cancellation","Free","Their choice"], a:1, why:"Legacy pricing is lost whenever the subscription cancels."},
  {q:"A customer wants to move the SIM from an old 2G tracker into a new one. What do you tell them?", o:["Go ahead","SIMs are locked to their device and 2G is gone; recommend a 4G upgrade with TRACKMORE2026","Send a free SIM","Escalate"], a:1, why:"SIMs are device-locked and 2G trackers can't be revived."},
  {q:"A GPX account that moved to Logistimatics wants its legacy $6/mo dealer rate on a new order. What do you tell them?", o:["Honor it forever","It only applied to the transition purchase; standard rates apply now","Give 50% off","Send a manual invoice"], a:1, why:"Legacy dealer rates apply only to the transition purchase."},
  {q:"A customer traveling in Canada says tracking works but audio fails. Why?", o:["Reset the SIM","Audio only works on US networks","Buy minutes","Replace the device"], a:1, why:"Location works while roaming abroad, but audio doesn't."}
  ]
},
/* ================= PART 4 ================= */
{ id:"p4", part:4, title:"Policies & Procedures", short:"Returns, cancellations, deletion, shipping, warranty, codes, escalation",
  blurb:"The rules we follow on money, data and escalations, and when an exception makes sense.",
  quizTitle:"Policy check",
  lessons:[
  { n:20, id:"l20", title:"Return & refund policy", mins:5, body:`
<ul>
<li>Returns are accepted <b>within 30 days of delivery</b>. The device must be undamaged and come back in its <b>original box</b> with all accessories. Returns without the original packaging may get a 10% restocking fee.</li>
<li>Returns must be <b>approved by an agent</b>. We email a prepaid USPS label, and the customer ships within 2 weeks or the label expires.</li>
<li><b>No returns on obsolete or discontinued devices</b>, such as 2G trackers.</li>
<li>Shipping costs aren't refundable. Subscription fees aren't refundable or prorated under the written policy, but exceptions are made case by case (see lesson 25).</li>
<li><b>Refund timing:</b> 5–10 business days after we process it. Give the customer a date to expect it by.</li>
<li><b>Returning a device doesn't cancel its subscription.</b></li>
</ul>`},
  { n:21, id:"l21", title:"Subscription cancellation process", mins:4, body:`
<ul>
<li><b>Self-serve:</b> <code>app.logistimatics.com/manage/subscriptions</code> → select the subscription → Cancel. Agents can also cancel on the backend.</li>
<li>The status changes to "pending cancellation." The customer isn't charged again, and service continues to the end of the paid period.</li>
<li>Deleting the app, stopping use, or returning the device <b>does not</b> cancel the subscription.</li>
<li>Reactivating later starts a new billing cycle at current rates.</li>
<li><b>Save attempts:</b> make one warm attempt on routine cancellations. Never make one on data deletion requests, with customers who've clearly decided, or when misleading information was involved.</li>
</ul>`},
  { n:22, id:"l22", title:"Account deletion policy", mins:3, body:`
<ul>
<li>Customers can ask us to delete their account and data.</li>
<li>Deletion removes their name, email, phone number, geofences, commands and location history.</li>
<li>Forward these requests <b>promptly</b>, with no attempt to keep the customer.</li>
<li>If it's unclear whether they want the whole account deleted or just a subscription canceled, ask once, neutrally.</li>
<li>Confirm the data is deleted in every system before you close the conversation.</li>
<li>Deleting an account is permanent. Point customers to the Help Center's <i>Data Deletion Declaration</i>.</li>
</ul>`},
  { n:23, id:"l23", title:"Shipping policy & restrictions", mins:3, body:`
<div class="tbl"><table><tr><th>Option</th><th>Price</th><th>Timing</th></tr>
<tr><td>USPS</td><td>Free</td><td>About 3–7 days (East Coast) to 7–14 days (West Coast). PO boxes OK.</td></tr>
<tr><td>UPS 2nd Day Air</td><td>$30</td><td>Business days only. No PO boxes.</td></tr>
<tr><td>UPS Next Day Air</td><td>$50</td><td>1 business day after processing. No PO boxes.</td></tr>
</table></div>
<ul>
<li>Orders ship from Greensboro, NC, in plain packaging. They're processed on weekdays, and the cutoff is 3 PM ET.</li>
<li><b>Friday orders, including expedited ones, ship the next business day.</b></li>
<li><b>No international shipping.</b></li>
<li>An order can only be changed or canceled <b>before it ships</b>. After that, offer a return label.</li>
</ul>`},
  { n:24, id:"l24", title:"Warranty policy", mins:3, body:`
<ul>
<li>The warranty lasts <b>30 days from purchase</b>.</li>
<li>Accidental damage, loss and theft aren't covered.</li>
<li>Replacing a device outside the warranty counts as a <b>concession</b>. Ask why the customer wants it first, and log it.</li>
<li>If Tier 2 recommends a <b>recall or replacement</b>, the new unit arrives pre-activated with the same renewal date plus 1 week. The customer sends the old unit back with the prepaid label by the deadline, or is charged for the hardware.</li>
<li>If a problem can't be fixed within 5 days, offer a final resolution. That can include returning a device with a chronic fault, even after 30 days (see lesson 46).</li>
</ul>`},
  { n:25, id:"l25", title:"Discount codes & when to use them", mins:5, body:`
<div class="tbl"><table><tr><th>Code</th><th>Discount</th><th>Typical use</th></tr>
<tr><td><code>TRACKMORE2026</code></td><td>20% off the first payment</td><td>Save attempts, 2G upgrades, replacing a lost or broken tracker</td></tr>
<tr><td><code>SAVE10</code></td><td>10% off</td><td>Gentle incentives</td></tr>
<tr><td><code>LGMX50</code></td><td>50% off</td><td>Rare, high-value cases. Use it sparingly.</td></tr>
</table></div>
<p class="small muted">Old codes you'll still see in macros (TRACKMORE, TRACKMORE24, TRACKMORE2025, CS50) are retired. Don't send them.</p>
<h3>Concessions</h3>
<p>Kevin makes the final call on discounts and courtesy refunds. <b>Good reasons for a concession:</b></p>
<ul>
<li>a significant technical problem</li>
<li>a delay on our side</li>
<li>a customer who missed cancelling before renewal by about a day</li>
<li>months billed on a dead or 2G device</li>
<li>exceptional circumstances</li>
</ul>
<p><b>Say no when:</b></p>
<ul>
<li>a quick fix already solved the problem</li>
<li>the customer entered a bad address</li>
<li>we responded on time</li>
<li>the customer already got a compensated resolution</li>
<li>the customer used the service all month</li>
</ul>
<div class="note"><b>Rules</b>Solve the problem first. Log the concession type, amount and scenario. Get a second opinion if the customer got a concession in the last 3 months. Never use a concession to buy a good CSAT score.</div>`},
  { n:26, id:"l26", title:"Escalation policy & when to involve Tier 2", mins:5, body:`
<h3>Escalate when</h3>
<ul>
<li>The customer asks for a human or a phone number, or says "I give up" or "I've tried everything."</li>
<li>They've shown frustration twice or more, or used profanity.</li>
<li><b>Two fixes have already failed.</b> Don't repeat the same step.</li>
<li>The tracker has been stuck for more than 24 hours, or the case has been open for more than 24 hours.</li>
<li>The problem is a hardware or connectivity issue you can't solve: CHECK# or STATUS# don't match, the SIM is inactive, there's no GNSS fix, or audio is still blocked.</li>
</ul>
<h3>Who handles what</h3>
<div class="tbl"><table><tr><th>Issue</th><th>Owner</th></tr>
<tr><td>Device and connectivity</td><td>Tier 2: Alex, Brooks</td></tr>
<tr><td>Suspected product bugs</td><td>Mitch Belsley + the technical team</td></tr>
<tr><td>Discounts and courtesy refunds</td><td>Kevin Garma</td></tr>
<tr><td>Chargebacks and disputes</td><td>Finance</td></tr>
<tr><td>Wrong item shipped</td><td>Fulfillment</td></tr>
<tr><td>Legal and law enforcement</td><td><code>legal@logistimatics.com</code></td></tr>
<tr><td>Fleets of 5+ trackers</td><td>GPX sales</td></tr>
<tr><td>Abuse, threats, safety incidents</td><td>Mitch Belsley, immediately</td></tr>
</table></div>`}
  ],
  quiz:[
  {q:"A customer places an expedited order on Friday. When does it ship?", o:["Friday","Saturday","The next business day","Within 2 hours"], a:2, why:"Expedited shipping speeds up transit, not the day the order leaves."},
  {q:"A customer in Toronto wants to order. What do you tell them?", o:["Use UPS Next Day","We don't ship internationally","Add a fee","Ship to a PO box"], a:1, why:"We have no international shipping."},
  {q:"A customer wants to return a 2G Mobile-200i. What's the answer?", o:["Approve it","No returns on obsolete devices; offer a 4G upgrade with TRACKMORE2026","Send a SIM","Extend the plan"], a:1, why:"Obsolete devices can't be returned."},
  {q:"How long does a refund take to show up?", o:["Same day","24 hours","5–10 business days","30 days"], a:2, why:"5–10 business days."},
  {q:"How long is the warranty?", o:["1 year","90 days","30 days from purchase","Lifetime"], a:2, why:"30 days from purchase."},
  {q:"A customer asks to delete all their data. Should you make a save attempt?", o:["Yes, offer LGMX50","Yes, offer a pause","No. Forward the request promptly","Only for long-time customers"], a:2, why:"Never make a save attempt on a deletion request."},
  {q:"Which code do you offer for a stolen tracker?", o:["TRACKMORE24","CS50","TRACKMORE2026","None"], a:2, why:"TRACKMORE2026 is the current code."},
  {q:"Who handles a chargeback?", o:["You","Tier 2","Finance","legal@"], a:2, why:"Finance owns disputes."},
  {q:"A customer returned their device last week and was just charged for the subscription. Why?", o:["A bug","Returning a device doesn't cancel the subscription","UPS","A restocking fee"], a:1, why:"Always cancel the subscription as part of a return."}
  ]
},
/* ================= PART 5 ================= */
{ id:"p5", part:5, title:"Troubleshooting Guide by Device", short:"Ladder, diagnostics, per-model fixes",
  blurb:"A repeatable troubleshooting method, the Admin diagnostics behind it, and step-by-step fixes for each device.",
  quizTitle:"Troubleshooting check",
  lessons:[
  { n:27, id:"l27", title:"The universal ladder & golden rules", mins:4, body:`
<ol class="steps">
<li><b>Power:</b> check the LEDs and battery.</li>
<li><b>Placement:</b> clear sky view? No metal, trunk or garage in the way?</li>
<li><b>Coverage:</b> check the FCC map layer that matches the device's SIM.</li>
<li><b>Force a report:</b> button press, then outdoors or a short drive.</li>
<li><b>Reboot command</b> from the app (Commands → New → Reboot Device).</li>
<li><b>Backend network reset or SIM refresh</b>. Agents only. The device is offline for about 30–45 minutes.</li>
<li><b>Escalate to Tier 2</b> with every step you took.</li>
</ol>
<div class="note stop"><b>Golden rules</b><ul style="margin:4px 0 0">
<li>Write every step you took in the ticket.</li>
<li>Never send several resets in a row. Wait a few minutes between commands.</li>
<li>Never tell a customer they can do a "network reset" themselves.</li>
<li>If a command shows "queued," the device has no signal yet.</li>
<li>If you're not sure, escalate.</li>
</ul></div>`},
  { n:28, id:"l28", title:"Admin diagnostics & commands", mins:6, body:`
<ul>
<li><b>Before you send anything:</b> confirm the IMEI matches the one in Admin, check that the SIM is <b>active</b>, and check the data session and carrier.</li>
</ul>
<div class="tbl"><table><tr><th>Command</th><th>What healthy looks like</th></tr>
<tr><td><code>CHECK#</code></td><td>ICCID and IMEI match. SERVER shows <code>1,device.logistimatics.com,6004</code>. APN matches the SIM (<code>wireless.twilio.com</code> for Twilio, <code>super</code> for Super SIM). Any mismatch: escalate.</td></tr>
<tr><td><code>STATUS#</code></td><td>GNSS shows "3D Fix" with <b>7 or more satellites</b>. CELL shows LTE (or CAT-M) and "network ok." GNSS:OFF or "limited": escalate.</td></tr>
<tr><td><code>WHERE#</code></td><td>Last known location. If the timestamp is older than today, the device has no GPS signal.</td></tr>
<tr><td><code>RESET#</code></td><td>Reboots the device. Wait 10 minutes before checking again.</td></tr>
<tr><td><code>SOS#</code> / <code>MONPERMIT#</code></td><td>Audio checks: the SOS number matches the caller, and MONPERMIT is 1 (only the SOS number can call). If MONPERMIT is 0, send <code>MONPERMIT,1#</code>.</td></tr>
</table></div>
<p class="small muted">The Loom walkthroughs for each command are in the Resource Library.</p>`},
  { n:29, id:"l29", title:"Mobile-200", mins:7, body:`
<h3>Not reporting. First ask: has it ever reported?</h3>
<ul>
<li><b>Yes, and it's in a data session:</b> check placement (take it outdoors) → check coverage → <code>WHERE#</code>, <code>CHECK#</code>, <code>STATUS#</code> → <code>RESET#</code> and wait 10 minutes → have the customer take a short drive, pressing SOS a few times → escalate.</li>
<li><b>Yes, but no data session:</b> confirm it's charged (all lights flash on a button press) → check coverage and placement → confirm the SIM is active → reset → short drive → escalate.</li>
<li><b>Never reported:</b> confirm the IMEI matches → check placement, charge, SIM and coverage → <code>RESET#</code> → escalate.</li>
<li><b>Stuck for 24+ hours:</b> check the green blink rate → reseat the SIM → escalate.</li>
</ul>
<h3>Won't charge</h3>
<ol class="steps">
<li>Confirm there's no red light while charging.</li>
<li>Clean the port with a cloth dampened with alcohol.</li>
<li>Try another wall outlet, then another adapter and cable.</li>
<li>Ask for photos of the port and a video of the LEDs.</li>
<li>Escalate.</li>
</ol>
<h3>"It shows 0% even though I charged it"</h3>
<p>The battery percentage only updates when the tracker reports. Confirm three things: they saw <b>solid red</b> while charging (the magnetic charger can latch without making contact), they turned it on <b>after</b> unplugging it, and it has had time outside to report.</p>
<h3>Audio calls won't connect</h3>
<ol class="steps">
<li>Check the customer's side: minutes left, the SOS number is their phone, they're calling from that phone, the tracker is online, the tracker is <b>moving</b>, caller ID isn't blocked, and they're in the US.</li>
<li>Check the voice coverage layer and <code>SOS#</code> / <code>MONPERMIT#</code>.</li>
<li>If calls are blocked (for example, after the minutes ran out), reset the SIM and wait about 30 minutes. On AT&amp;T SIMs, confirm the comm plan includes VoLTE.</li>
<li>Send <code>RESET#</code>.</li>
<li>If it still fails, refresh the phone number and tell the customer the new number is in the Info tab.</li>
<li>Escalate.</li>
</ol>
<p><b>Call connects but there's no sound?</b> Have someone speak right at the mic, which is at the charging-port end. If it's still silent, escalate.</p>`},
  { n:30, id:"l30", title:"Protect Plus & Road-Wired", mins:4, body:`
<h3>Protect Plus</h3>
<ol class="steps">
<li>Confirm it's charged or powered.</li>
<li>Check placement and AT&amp;T coverage.</li>
<li>Confirm the IMEI matches and the SIM is active.</li>
<li>Send <code>CHECK#</code> and <code>STATUS#</code> by SMS. No response means escalate.</li>
<li>Send <code>WHERE#</code>, then <code>RESET#</code> and wait 10 minutes.</li>
<li><b>Power cycle:</b> charge for 4+ hours (7–9 is ideal), unplug, pry off the front plate at the top-right ridge, switch OFF, wait 10 seconds, switch ON.</li>
<li>Take it outdoors for 5–10 minutes, then wait 25–30 minutes for a blue pin.</li>
<li>Escalate with photos of the port and switch, and a video of the LEDs.</li>
</ol>
<p><b>Battery draining fast?</b> Check the events log and turn off the installation, removal and vibration alarms the customer doesn't need.</p>
<h3>Road-Wired</h3>
<ul>
<li><b>No red LED:</b> reinstall the wiring harness (it needs 12V or more), then try another vehicle, then escalate. Double-check the wiring: red to constant power, black to ground, PWR connector.</li>
<li><b>Red LED on but not reporting:</b> check coverage, the SIM, <code>CHECK#</code> and <code>STATUS#</code>, then <code>RESET#</code>. Garages can block the signal.</li>
</ul>`},
  { n:31, id:"l31", title:"Car Charger & Pocket Tracker", mins:4, body:`
<h3>Car Charger</h3>
<ol class="steps">
<li>Confirm power: a red LED means it's powered. Some ports only have power while the ignition is on. Test the port with a phone, or try another vehicle.</li>
<li>Check placement, coverage and the SIM.</li>
<li>Send <code>CHECK#</code> and <code>STATUS#</code> by SMS. SERVER should show "Link Up." If you see NOCONN, escalate.</li>
<li>Send <code>RESET#</code>. For a <b>cold boot</b>, leave it unplugged for several hours.</li>
<li>Escalate.</li>
</ol>
<p class="small muted">Commands can take up to 60 minutes. A Car Charger showing offline while the vehicle is off is normal. It supports only one SOS number; if the customer asks for more, escalate.</p>
<h3>Pocket Tracker / Micro-431</h3>
<ol class="steps">
<li>Confirm it's charged: hold SOS until it vibrates. A fully drained unit can take up to 5 minutes to show a charging light.</li>
<li>Check placement, coverage, the SIM and anything obstructing it.</li>
<li>Send "Request GPS Position" from the Admin commands list.</li>
<li>Have the customer go outside and hold SOS to force a report.</li>
<li>Escalate.</li>
</ol>`},
  { n:32, id:"l32", title:"Asset trackers, AssetTrack Mini & SmartLabel", mins:4, body:`
<ul>
<li><b>AssetTrack Mini:</b> power cycle with <code>RESET#</code> → check both AT&amp;T and T-Mobile coverage (it has a KORE SIM) → send <code>STATUS#</code> → check signal strength in the raw data (the <code>&amp;R</code> value, 0–31, where higher is better) → with the customer's OK, increase the reporting frequency temporarily → escalate.</li>
<li><b>Asset 432/422:</b> one dot a day is normal. Mostly cell or Wi-Fi locations means something is blocking the sky view. Over-reporting or battery drain: escalate.</li>
<li><b>SmartLabel "nothing happens":</b> check the tab was cut cleanly, the label is near iPhones with internet, the customer has waited 15–30 minutes, and the label isn't wet or damaged. If the data shows in TrackSolid but not in Admin, it's a backend issue: escalate.</li>
<li><b>SmartLabel "reported once then stopped":</b> there are probably few iPhones nearby, or it's buried deep inside a pallet. If other labels in the same shipment also stopped, the cause is the environment. If only one did, it's that label's placement.</li>
</ul>`},
  { n:33, id:"l33", title:"Location accuracy & app/alert issues", mins:4, body:`
<div class="tbl"><table><tr><th>Fix type</th><th>What it means</th><th>What to do</th></tr>
<tr><td>GPS</td><td>Accurate to about 15–50 ft in the open</td><td>Still wrong? Send <code>STATUS#</code>, collect the date, time, actual location and reported location, and escalate.</td></tr>
<tr><td>Wi-Fi</td><td>Based on nearby networks</td><td>If it's far off, escalate. New routers and hotspots can be mapped to the wrong place.</td></tr>
<tr><td>Cell</td><td>Tower estimate, shown as a light-blue circle</td><td>Explain what a cell fix is and suggest a spot with a better sky view.</td></tr>
</table></div>
<ul>
<li>A few stray dots on a <b>parked</b> tracker are normal: they come from periodic wake-ups. A cell fix can also trigger a false geofence alert.</li>
<li><b>Alerts not arriving:</b> impersonate the user to confirm alerts are on. Then have the customer check phone permissions: location set to "Always," background refresh on, notifications allowed.</li>
<li><b>Map not updating:</b> turn on auto-refresh. <b>Map showing the ocean:</b> tap the flag icon.</li>
<li><b>"Power Failure" alerts</b> are usually normal reboots. Support can turn them off.</li>
<li><b>App glitches:</b> update the app, then log out and back in.</li>
</ul>`}
  ],
  quiz:[
  {q:"A customer has already rebooted twice today and the tracker still isn't reporting. What's next?", o:["Reboot a third time","Check the SIM and coverage, then do a backend reset or escalate","Tell them to buy a new tracker","Close the ticket"], a:1, why:"Don't stack resets. Move up the ladder."},
  {q:"STATUS# shows 4 satellites used. What does that mean?", o:["Healthy","A weak sky view; move the tracker, then escalate if it doesn't improve","SIM inactive","Wrong firmware"], a:1, why:"A good fix needs 7 or more satellites."},
  {q:"A tracker in a basement shows a large light-blue circle. What is it?", o:["A geofence","A cell-tower fix","A GPS error","Audio in progress"], a:1, why:"A light-blue circle means a cell fix."},
  {q:"A customer asks how to do a network reset from the app. What do you tell them?", o:["Walk them through it","Resets are done by agents on the backend; offer to send one (it takes about 30–45 minutes)","Reinstall the app","Share the Twilio login"], a:1, why:"Only agents can run a network reset."},
  {q:"A Protect Plus battery drains in 2 days. What do you check first?", o:["Replace it","Anti-tamper alarms flooding the event log","Firmware","The SOS number"], a:1, why:"Alarms firing over and over drain the battery."},
  {q:"A customer charged their Mobile-200 overnight and it still shows 0%. What's a likely cause?", o:["The battery is dead","The percentage only updates when the tracker reports, or the magnetic charger never made contact","The app is broken","Wrong plan"], a:1, why:"Confirm they saw solid red while charging, then turn it on and take it outside."},
  {q:"What is the correct order of the troubleshooting ladder?", o:["Escalate → reset → power","Power → placement → coverage → force a report → reboot → backend reset → escalate","Coverage → refund → reboot","Reseat SIM → escalate → power"], a:1, why:"Start with the simple physical checks and escalate last."},
  {q:"A Car Charger shows offline while the car is parked with the engine off. What's going on?", o:["It's broken","Normal, since many ports lose power with the ignition off","The SIM is canceled","Escalate right away"], a:1, why:"The Car Charger only reports while the port has power."}
  ]
},
/* ================= PART 6 ================= */
{ id:"p6", part:6, title:"Customer Communication", short:"Tone, structure, hostility, retention, languages",
  blurb:"How we sound in every reply: friendly, empathetic, clear, and short enough to read at a glance.",
  quizTitle:"Communication check",
  lessons:[
  { n:34, id:"l34", title:"Our support philosophy & tone guide", mins:4, body:`
<p>Our tone is <b>Friendly, Efficient and Helpful</b>. Every reply should sound like a capable person who cares, not a script.</p>
<ul>
<li><b>Acknowledge before you solve.</b> "That's frustrating. Let's get it sorted."</li>
<li><b>Lead with empathy</b> when a customer is frustrated. Never open with forced cheer ("Great news!", "Absolutely!").</li>
<li><b>Mirror the customer.</b> Match their words and how technical they are.</li>
<li><b>Be confident and direct.</b> Say what you did and what happens next, including timing.</li>
<li><b>Going the extra mile doesn't always mean a concession.</b> Anticipate their next question, and teach them to manage their own account.</li>
</ul>`},
  { n:35, id:"l35", title:"Email writing style & structure", mins:6, body:`
<div class="email"><span class="lbl">Opener</span>Hi [Customer Name] 😊 It's [Your Name] from the Logistimatics Support Team here to assist you</div>
<div class="email"><span class="lbl">Closer</span>Best,
[Your Name] / Logistimatics Support</div>
<h3>Connect → Qualify → Resolve</h3>
<ol class="steps">
<li><b>Connect:</b> greet the customer, show empathy, and restate the issue, including the <b>tracker model and serial</b>.</li>
<li><b>Qualify:</b> explain the likely cause and ask only what you need. In your first reply, ask for everything you'll need (serial, what the lights show, a screenshot) to save a round trip.</li>
<li><b>Resolve:</b> give the fix or next step, point to self-help, and offer more help.</li>
</ol>
<ul>
<li><b>Write conversational prose.</b> Use lists only for steps.</li>
<li><b>Keep routine answers to 2–4 sentences.</b> Put the action first: "I've gone ahead and…"</li>
<li><b>One question at a time.</b> Never ask again for something the customer already gave you.</li>
</ul>
<div class="email"><span class="lbl">Example</span>Hi Dana 😊 It's Kevin from the Logistimatics Support Team here to assist you

I'm sorry the audio calls to your Mobile-200 (serial 216456) keep dropping. That's frustrating when you're counting on it. You still have 94 minutes, so that isn't the issue. I've refreshed the tracker's SIM on our end, which clears most connection blocks. Give it about 30 minutes.

After that, two quick things help calls connect:
1. Call from the phone saved as your SOS number.
2. Make sure the tracker is moving. It sleeps when parked.

If it still won't connect, just reply here and I'll take it further.

Best,
Kevin / Logistimatics Support</div>`},
  { n:36, id:"l36", title:"Handling angry or hostile customers", mins:5, body:`
<ol class="steps">
<li>Stay calm and read the whole thread. Find the real problem underneath the anger.</li>
<li>Acknowledge it in one sincere sentence, then move straight to action.</li>
<li>Keep steps short, with no more than 3 bullets.</li>
<li>Offer something real. "Here's what I <i>can</i> do today…" works better than a bare "no."</li>
<li>If the customer wants to leave in anger: "I hear you, and I don't want to lose you over this. Let me look at your account and make this right." Don't promise a refund you haven't confirmed.</li>
</ol>
<ul>
<li><b>If the customer is rude:</b> name the tone calmly, ask for respect, and ask them to keep everything in one thread.</li>
<li><b>If there are threats, abuse or personal attacks:</b> stop and bring in Mitch or your lead. You never have to absorb abuse.</li>
<li>Take a short break after a tough conversation if you need one.</li>
</ul>`},
  { n:37, id:"l37", title:"Retention techniques — cancellations & returns", mins:6, body:`
<div class="tbl"><table><tr><th>Reason</th><th>What to offer</th></tr>
<tr><td>No longer needed</td><td>Mention other uses (another car, equipment, family, luggage, pets). Offer to <b>pause for up to 3 months</b>.</td></tr>
<tr><td>Lost or stolen</td><td>20% off a new tracker with <code>TRACKMORE2026</code> and move the subscription over, or pause.</td></tr>
<tr><td>Broken or not working</td><td>Troubleshoot first, then offer a replacement at 20% off with the subscription moved over.</td></tr>
<tr><td>Price</td><td>Compare plans (annual saves $89.89 a year), or offer a pause.</td></tr>
<tr><td>Long-time customer (3+ years)</td><td>Thank them. Offer 1 free month plus 20% off a new device.</td></tr>
<tr><td>Return: "no longer needed"</td><td>Clarify how audio works and what it costs. Mention they can keep the device without activating it. Where appropriate, offer a 20% partial refund if they keep it.</td></tr>
</table></div>
<ul>
<li><b>One offer, then respect the answer.</b></li>
<li><b>No save attempts on</b> data deletion requests, customers who've clearly decided, cases involving misleading information, "Let's proceed" bot cancellations, or accounts of customers who have passed away.</li>
<li>Customers frustrated with the tech are the <b>most likely to stay</b>. Reach out early when someone has contacted us several times.</li>
</ul>`},
  { n:38, id:"l38", title:"Responding in other languages", mins:3, body:`
<ul>
<li>If a customer writes in <b>Spanish or French, reply in that language.</b> About 5% of our conversations are in Spanish.</li>
<li>Keep sentences short and simple so the translation stays accurate. Check any translated text by reading it back before you send it.</li>
<li>Keep product names, codes, URLs and commands exactly as they are (Mobile-200, TRACKMORE2026, app.logistimatics.com).</li>
<li>Lucy's Spanish answers are limited, so expect Spanish conversations to reach you.</li>
</ul>
<div class="email"><span class="lbl">Spanish opener</span>Hola [Nombre] 😊 Soy [Tu nombre] del equipo de soporte de Logistimatics y estoy aquí para ayudarte.</div>
<div class="email"><span class="lbl">French opener</span>Bonjour [Nom] 😊 Ici [Votre nom] de l'équipe d'assistance Logistimatics, je suis là pour vous aider.</div>`},
  { n:39, id:"l39", title:"Grammar & proofreading best practices", mins:3, body:`
<p>Grammar, punctuation and spelling are part of your QA score (see lesson 57). Before you hit send:</p>
<ol class="steps">
<li><b>Name check:</b> is the customer's name spelled right, and is the greeting to the right person?</li>
<li><b>Facts check:</b> are the model, serial, prices, dates and codes correct? Do all the links work?</li>
<li><b>Macro check:</b> are all placeholders like [DATE] and [AMOUNT] filled in? Does every sentence fit this customer?</li>
<li><b>Question check:</b> did you answer every question the customer asked?</li>
<li><b>Read it aloud</b>, or at least in your head. Cut anything the customer doesn't need.</li>
<li><b>Consistency check:</b> we write "Mobile-200," "live audio," "SOS number," and "Logistimatics Support."</li>
</ol>`},
  { n:40, id:"l40", title:"Do's and don'ts", mins:3, body:`
<div class="tbl"><table><tr><th>Do</th><th>Don't</th></tr>
<tr><td>Use the customer's first name and our house opener and closer</td><td>Open a frustrated reply with "Great news!"</td></tr>
<tr><td>Say what you did and when it takes effect</td><td>Promise a refund or credit you haven't confirmed</td></tr>
<tr><td>Ask one clear question</td><td>Ask again for info the customer already gave</td></tr>
<tr><td>Link to Help Center articles</td><td>Send the same reply twice in a row</td></tr>
<tr><td>Offer a callback when a customer asks for a phone number</td><td>Apologize for not having a phone line</td></tr>
<tr><td>Offer to set a new password</td><td>Ever ask for a customer's current password</td></tr>
<tr><td>Verify identity before discussing an account</td><td>Share owner info with a third party</td></tr>
<tr><td>Reply in Spanish or French when the customer does</td><td>Send retired promo codes</td></tr>
</table></div>`}
  ],
  quiz:[
  {q:"A customer writes \"your tracker is garbage, 3 days no signal.\" Which opening is best?", o:["Great news! We can help!","Absolutely! Let's fix this!","I'm sorry your tracker hasn't been reporting. Three days without it is frustrating, so let's get it sorted.","Please see our Help Center."], a:2, why:"Lead with empathy."},
  {q:"When should you use lists in a reply?", o:["Always","Never","Mainly for multi-step instructions","Only in Spanish"], a:2, why:"Use conversational prose, and lists for steps."},
  {q:"A customer writes in Spanish. What do you do?", o:["Reply in English","Reply in Spanish","Ask for English","Forward to Lucy"], a:1, why:"Reply in the customer's language."},
  {q:"What should the Connect step include?", o:["A refund offer","A greeting, empathy, and the issue restated with the tracker model and serial","Our phone number","A survey"], a:1, why:"It shows the customer you read their message."},
  {q:"A customer confirms they want to cancel after your pause offer. What next?", o:["Offer LGMX50","Cancel right away and confirm clearly","Send two more offers","Ask them to call"], a:1, why:"Make one offer, then respect the decision."},
  {q:"What do you check before sending a macro?", o:["Nothing","That every placeholder is filled in and it fits this customer","The font","The sender's avatar"], a:1, why:"Unfilled [DATE] or [AMOUNT] placeholders damage trust."}
  ]
},
/* ================= PART 7 ================= */
{ id:"p7", part:7, title:"Standard Workflows", short:"Step-by-step for the requests you'll see most",
  blurb:"Step-by-step workflows for the requests that come in every week.",
  quizTitle:"Workflow check",
  lessons:[
  { n:41, id:"l41", title:"Cancellation workflow", mins:4, body:`
<ol class="steps">
<li><b>Verify</b> that the request comes from the account email, and find the subscription (serial and plan) in Admin.</li>
<li><b>Understand why.</b> If they've already said why, don't ask again.</li>
<li><b>Make one save attempt that fits their reason</b> (see lesson 37). Skip this step for data deletion, customers who've clearly decided, bot "Let's proceed" flows, deceased account holders, or cases involving misleading information.</li>
<li><b>Once they confirm, cancel right away</b> in Admin, or point them to Manage → Subscriptions.</li>
<li><b>Confirm clearly</b>: no further charges, and service continues until the end of the period. Tell them they're welcome back anytime.</li>
<li>If the cancellation is late or disputed, decide on any <b>concession</b> (lesson 25) and log it.</li>
<li>Fill in the <b>B2C Churn Gut Check</b> and churn reason, tag the conversation, then close it.</li>
</ol>`},
  { n:42, id:"l42", title:"Return & refund workflow", mins:5, body:`
<ol class="steps">
<li><b>Check eligibility</b>: within 30 days of delivery, undamaged, original box, and not an obsolete device.</li>
<li><b>Ask why they're returning.</b> Fix the problem, or make one save offer.</li>
<li><b>Approve</b> the return and email a prepaid USPS label (ShipStation → Create Return).</li>
<li><b>Give packing instructions</b>: original box inside a shipping box, label on the outer box, ship within 2 weeks. Amazon orders should include the original order number.</li>
<li><b>Cancel the subscription</b>, or confirm it's already canceled.</li>
<li><b>Once the device arrives</b>, refund in Admin (order → ⋯ → Refund, full or partial, with a reason). Use Shopify for Shopify orders. Use Stripe only for charges with no order.</li>
<li><b>Tell the customer when to expect the refund</b>: 5–10 business days. Give them a date.</li>
</ol>
<div class="note"><b>Order not shipped yet?</b>Cancel it and refund. <b>Already shipped?</b> It can't be canceled, so offer a return label.</div>`},
  { n:43, id:"l43", title:"Subscription transfer workflow", mins:4, body:`
<h3>Moving a subscription to a new device</h3>
<ol class="steps">
<li>Collect <b>both serials</b>, the old device and the new one.</li>
<li>Confirm the new device is charged and working.</li>
<li>Transfer the subscription in Admin, keeping the renewal date.</li>
<li>Let the customer know that history from the old device may not carry over, and that the new tracker has its own phone number (in the Info tab). They need to set the SOS number again for audio.</li>
</ol>
<h3>Transferring ownership to another person</h3>
<ol class="steps">
<li>The <b>current owner</b> writes from the account email with the serial and a clear authorization, for example: "I authorize [new email] to take ownership of tracker 123456."</li>
<li>Remove the tracker from the current account. <b>Tracking history is deleted.</b></li>
<li>The new owner activates the tracker on their own account and pays for their own subscription.</li>
</ol>`},
  { n:44, id:"l44", title:"Account deletion workflow", mins:3, body:`
<ol class="steps">
<li>Acknowledge the request respectfully. <b>Don't try to keep the customer.</b></li>
<li>If it's unclear, ask once whether they want the whole account deleted or only a subscription canceled.</li>
<li>Cancel any active subscriptions so they won't be charged again.</li>
<li>Forward the request <b>promptly</b> to the team that handles deletions.</li>
<li>Confirm the data is deleted in every system before you close the conversation. Code it as Non Support – Legal.</li>
<li>Send a short confirmation once deletion is complete.</li>
</ol>`},
  { n:45, id:"l45", title:"Device activation & setup workflow", mins:5, body:`
<ol class="steps">
<li>The customer goes to <code>logistimatics.com/activate</code> and enters their email and serial exactly as printed.</li>
<li>They choose a plan, enter billing details, and click <b>Pay &amp; Activate</b>. SmartLabels skip this step and cost $0.</li>
<li>They create a password, download the app, and log in.</li>
<li>They take the tracker outside or for a short drive until the first report arrives. Until then, the app shows "No Data."</li>
<li>Walk them through onboarding: alerts, geofences, and the SOS number for audio. Offer a walkthrough call if they'd like one.</li>
</ol>
<div class="tbl"><table><tr><th>Problem</th><th>Fix</th></tr>
<tr><td>"Tracker not recognized"</td><td>Check for a typo, then check Admin. The tracker may already be active or linked to another account.</td></tr>
<tr><td>"Select Plan" is blank</td><td>The tracker is already activated or assigned. Check Admin. We can activate it from the backend.</td></tr>
<tr><td>"Email already exists"</td><td>Have them log in, or use Forgot Password.</td></tr>
<tr><td>They're using the "access code" from their email</td><td>That code isn't the serial. The serial is on the device or the packaging.</td></tr>
<tr><td>Gifted or second-hand tracker</td><td>The original owner has to give up ownership first (see lesson 43).</td></tr>
<tr><td>Bought directly from us</td><td>It arrives already active, with 5 extra days added for shipping.</td></tr>
</table></div>`},
  { n:46, id:"l46", title:"Escalation to Tier 2 workflow", mins:5, body:`
<ol class="steps">
<li>Do the first round of troubleshooting and explain each step to the customer.</li>
<li>Collect the following:
<ul>
<li>model and serial</li>
<li>what's happening</li>
<li>LED behavior</li>
<li>power or charge status</li>
<li>the date range to investigate</li>
<li>warranty status</li>
<li>photos or video</li>
<li><code>STATUS#</code> and <code>CHECK#</code> sent by SMS <b>and</b> Data</li>
</ul>
For location complaints, also get the actual vs. reported location and time.</li>
<li>Send the <b>Tier 2 escalation macro</b>.</li>
<li><b>Convert to Customer Ticket</b>, fill in the attributes, and add a note with the command responses.</li>
<li>Tier 2 moves the ticket to In Progress, investigates, and assigns it back to you.</li>
<li><b>You update the customer.</b> For follow-ups, @mention Tier 2 instead of reassigning.</li>
<li>While you're waiting on the customer, set the status to <b>Waiting on Customer</b>. Mark it <b>Resolved</b> only after Tier 2 confirms the fix and the customer acknowledges it.</li>
</ol>
<div class="note"><b>Final resolution</b>If a case can't be solved within <b>5 days</b>, offer a final resolution tailored to the customer: an exchange, a refund, an extension or free minutes, or a return even after 30 days.</div>`},
  { n:47, id:"l47", title:"Account access & verification workflow", mins:5, body:`
<ol class="steps">
<li><b>Find the account.</b> Confirm which email the tracker is registered under. Watch for Apple "Hide My Email" relay addresses.</li>
<li><b>Try self-help first</b>: the reset link at <code>app.logistimatics.com/forgot</code>.</li>
<li><b>Verify the person.</b> If they're writing from the account email, you can help directly. If not, ask them to write from their signup email. If they've lost access to that email, verify the billing name, phone, address, and the last 4 digits and expiration date of the card on file (use the Verification Questions macro).</li>
<li><b>For changes you make for them</b> (name, email, phone, password, payment), get written consent first:
<div class="email" style="margin-top:8px">"I confirm that I am the account owner and authorize Logistimatics to update [information to be changed]."</div></li>
<li><b>Password:</b> never ask for the current password. Offer to set a new one that has 8+ characters with an uppercase letter, a lowercase letter, a number and a special character.</li>
<li><b>Changing an account's email</b> requires verified ownership. If in doubt, escalate.</li>
</ol>`}
  ],
  quiz:[
  {q:"A customer returned their device. What must you also do?", o:["Nothing","Cancel the subscription, or confirm it's already canceled","Send a survey","Block their card"], a:1, why:"A return doesn't cancel the subscription."},
  {q:"What do you need to transfer a subscription to a new tracker?", o:["The customer's password","Both serials, and the new device working","A new account","Finance approval"], a:1, why:"Both serials, and confirm the new device works first."},
  {q:"An order hasn't shipped yet and the customer wants to cancel. What do you do?", o:["Offer a return label","Cancel the order and refund","Tell them to refuse delivery","Nothing"], a:1, why:"Before shipping, cancel and refund. After shipping, offer a return label."},
  {q:"Before making an account change for a customer, what do you need?", o:["Their password","Written consent from the verified owner","A phone call","Nothing"], a:1, why:"Use the written-consent template."},
  {q:"Tier 2 needs more info and you've asked the customer for it. What status should the ticket have?", o:["Resolved","Waiting on Customer","Closed","Snoozed forever"], a:1, why:"Mark it Resolved only after Tier 2 confirms and the customer acknowledges."},
  {q:"A new activation shows \"No Data.\" What should the customer do?", o:["Return it","Take it outside or for a short drive so it sends its first report","Reset the password","Buy minutes"], a:1, why:"New trackers show No Data until they report for the first time."},
  {q:"A case has gone 5 days without a fix. What next?", o:["Keep troubleshooting indefinitely","Offer a final resolution tailored to the customer","Close it","Ask them to buy a new tracker"], a:1, why:"After 5 days, offer a final resolution."}
  ]
},
/* ================= PART 8 ================= */
{ id:"p8", part:8, title:"Special Situations & Ethics", short:"Ethical use, unauthorized trackers, disputes, privacy",
  blurb:"Trackers can be misused. This part covers how we protect people, handle disputes, and keep data private.",
  quizTitle:"Ethics & privacy check",
  lessons:[
  { n:48, id:"l48", title:"Ethical use of tracking devices", mins:4, body:`
<ul>
<li>We don't condone tracking or listening to anyone without their consent.</li>
<li>Live audio is a live call only. It's never recorded, and we don't help anyone eavesdrop covertly.</li>
<li><b>Misuse</b> (stalking, or installing a tracker on someone's vehicle without consent) leads at minimum to account suspension and loss of support. It can also mean ending the customer relationship: we send the termination macro, refund recent charges, cancel subscriptions, deactivate the SIM, and suspend the user in Admin.</li>
<li>If a conversation suggests misuse, stop troubleshooting and bring in Mitch.</li>
<li>Point customers to the Help Center article <i>Understanding the Ethical Use of Our Live Audio Feature</i>.</li>
</ul>`},
  { n:51, id:"l51", title:"Unauthorized tracker complaints", mins:4, body:`
<p>Sometimes a person finds one of our trackers on their vehicle and contacts us.</p>
<ol class="steps">
<li>Respond calmly and take it seriously. Finding a tracker you didn't know about is alarming.</li>
<li><b>Share nothing about the owner</b>: no name, email, address, or account details.</li>
<li>Direct them to <b>local law enforcement</b>. We cooperate fully, and police can request owner information through proper legal channels (a subpoena or warrant sent to <code>legal@logistimatics.com</code>).</li>
<li>Flag the conversation internally so the account can be reviewed for misuse.</li>
</ol>
<p class="small muted">Help Center article to share: <i>Unintended Tracker on Your Vehicle? We're Here to Support You</i>.</p>`},
  { n:52, id:"l52", title:"Chargeback & dispute handling", mins:4, body:`
<ul>
<li><b>Chargebacks and Stripe disputes</b> are handled by <b>Finance</b>. Let the customer know Finance is reviewing it. Finance notes the account, deactivates the SIM, cancels the subscription and responds to the dispute.</li>
<li><b>"I don't recognize this charge"</b>: look for a matching order (charges show on statements as "SP AFF* Logistimatics"). If you can't find one, ask for the last 4 digits of the card. If it isn't ours, the customer should contact their bank.</li>
<li><b>Fraud (unauthorized charges from someone who isn't a customer)</b>:
<ol>
<li>Get the last 4 digits and expiration date of the card.</li>
<li>Add the card to the Stripe block list.</li>
<li>Add the note "blocked for Fraud" in Admin.</li>
<li>Cancel the related subscriptions.</li>
</ol>
<b>Never issue a refund</b>, and never share account information. Send the person to their bank's fraud department.</li>
<li><b>"I already canceled"</b>: check the account history. Deleting the app doesn't cancel a subscription. Resolve it fairly, and use a concession if the situation calls for one.</li>
<li>Watch for chargeback threats and legal "close my account" letters, and flag them early.</li>
</ul>`},
  { n:53, id:"l53", title:"Data privacy & deletion requests", mins:4, body:`
<ul>
<li>Only discuss an account with the <b>verified account owner</b>, writing from the account email.</li>
<li><b>Never</b> share owner information with a third party. The only exception is law enforcement with a subpoena or warrant, which goes through <code>legal@logistimatics.com</code>.</li>
<li><b>Lost tracker:</b> devices store no data, and we can suspend the SIM. Recommend the customer change their password.</li>
<li><b>Deletion requests:</b> forward them promptly, with no attempt to keep the customer. Deletion removes the customer's name, contact details, geofences, commands and location history (see lesson 44).</li>
<li>Don't paste sensitive details, such as full card numbers or passwords, into notes or Slack.</li>
<li>Privacy policy: <code>logistimatics.com/privacy</code></li>
</ul>`}
  ],
  quiz:[
  {q:"A police officer emails asking who owns a tracker. What do you do?", o:["Reply with the owner's name","Route it to legal@logistimatics.com","Ignore it","Ask them to call"], a:1, why:"All legal and law-enforcement requests go to legal@."},
  {q:"Someone who isn't our customer reports unauthorized charges. What's the right response?", o:["Refund immediately","Block the card, cancel the related subscriptions, don't refund, and send them to their bank","Share the account email","Ask them to open an account"], a:1, why:"That's the fraud procedure."},
  {q:"A stranger found a tracker under their car and demands the owner's name. What do you do?", o:["Give it to them","Share nothing, direct them to local police, and flag the account","Deactivate it and tell them who owns it","Close the ticket"], a:1, why:"Protect privacy, route them to law enforcement, and flag the account for review."},
  {q:"A customer asks how to listen to someone secretly without that person knowing. What do you do?", o:["Explain the SOS setup","Don't help with covert use; share our ethical-use stance and bring in Mitch","Sell them minutes","Ignore it"], a:1, why:"We don't support non-consensual monitoring."},
  {q:"Who handles a customer's chargeback?", o:["You","Tier 2","Finance","Fulfillment"], a:2, why:"Finance owns disputes."}
  ]
},
/* ================= PART 9 ================= */
{ id:"p9", part:9, title:"Performance & Growth", short:"KPIs, CSAT, EOW reports, QA & coaching",
  blurb:"How your work is measured, how the team reports on it, and how we help each other get better.",
  quizTitle:"Performance check",
  lessons:[
  { n:54, id:"l54", title:"KPIs & success metrics", mins:5, body:`
<div class="tbl"><table><tr><th>Your metric</th><th>Minimum</th><th>Target</th><th>Goal</th></tr>
<tr><td>Daily solves</td><td>15</td><td>20</td><td>30</td></tr>
<tr><td>Weekly solves</td><td>75</td><td>100</td><td>150</td></tr>
<tr><td>Monthly solves</td><td>300</td><td>400</td><td>500</td></tr>
<tr><td>CSAT (weekly / monthly)</td><td>80%</td><td>85%</td><td>90%</td></tr>
<tr><td>Tickets per hour</td><td>5</td><td>7</td><td>10</td></tr>
<tr><td>Live chats solved per hour</td><td>5</td><td>8</td><td>—</td></tr>
</table></div>
<div class="tbl"><table><tr><th>Team metric (monthly)</th><th>Minimum</th><th>Target</th><th>Goal</th></tr>
<tr><td>CSAT</td><td>85%</td><td>88%</td><td>90%</td></tr>
<tr><td>Response time</td><td>24 h</td><td>20 h</td><td>15 h</td></tr>
</table></div>
<h3>What we track in Intercom</h3>
<p>New conversations, full resolution time, first and subsequent response times, conversations closed and replied to, CSAT request and response rates, teammate CSAT/DSAT, and concessions.</p>
<h3>How to hit the numbers</h3>
<ul>
<li>Work tickets <b>oldest first</b>, and don't cherry-pick.</li>
<li>Aim for about <b>10 minutes per ticket</b>. If a ticket runs longer, it probably needs escalating.</li>
<li>Split your time about <b>75/25</b> between new tickets and your own.</li>
<li><b>Merge duplicates</b> (newest into oldest).</li>
<li>Live chat always comes first.</li>
</ul>
<p class="small muted"><b>Fruit Ninja:</b> when the median resolution time goes over 20 hours or volume exceeds capacity, a lead may assign a proven teammate to clear quick tickets fast (target 12–15 per hour).</p>`},
  { n:55, id:"l55", title:"CSAT — what it is & why it matters", mins:4, body:`
<p><b>CSAT</b> (customer satisfaction) is the rating a customer gives after a conversation. It's the clearest signal we get of whether we actually helped.</p>
<ul>
<li><b>CSAT request rate:</b> the share of conversations where a rating was requested.</li>
<li><b>CSAT response rate:</b> the share of those requests the customer answered.</li>
<li><b>Teammate CSAT / DSAT:</b> your average satisfaction and dissatisfaction scores.</li>
</ul>
<h3>What moves CSAT</h3>
<ul>
<li>Actually solving the problem, especially on the first contact.</li>
<li>Empathy at the moments that matter. For example, if a cancellation turns into a return, acknowledge that extra hassle.</li>
<li>Clear expectations: what happens next, and when.</li>
</ul>
<h3>After a bad rating</h3>
<ol class="steps">
<li>Review the conversation honestly.</li>
<li>Follow up quickly: offer a call within 1–2 shifts, or send an email with an apology and a real solution.</li>
<li>You may ask once, politely, whether they'd reconsider the rating. Never pressure them.</li>
<li>Bring it to your next 1:1 as a learning moment.</li>
</ol>
<p class="small muted">A neutral rating from a customer who praised the team is worth a personal follow-up. Never use a concession just to buy a good rating.</p>`},
  { n:56, id:"l56", title:"End of Week report — format & expectations", mins:4, body:`
<p>Every Friday, Customer Support sends an <b>EOW Update</b> for the LGMX inbox. The report covers:</p>
<div class="tbl"><table><tr><th>Section</th><th>What goes in it</th></tr>
<tr><td>Support metrics</td><td>Total tickets, average resolution time, CSAT, and a short summary (closed / snoozed / open, SLA)</td></tr>
<tr><td>Highlights</td><td>About 3 bolded wins, each with a short explanation</td></tr>
<tr><td>Lowlights</td><td>About 3 honest problem areas, for example resolution time, churn signals, untagged conversations</td></tr>
<tr><td>Call drivers</td><td>Top contact reasons: rank, category, count, % of total, and an insight for each</td></tr>
<tr><td>Churn &amp; cancellation analysis</td><td>Themes, counts, examples, and one key insight</td></tr>
<tr><td>Metrics breakdown</td><td>Conversations, handling and reply times, SLA, CSAT, AI (Lucy) participation, untagged conversations, spam</td></tr>
<tr><td>Activation update</td><td>Emails sent by touch (T0–T3) and activations</td></tr>
<tr><td>Next focus</td><td>Numbered priorities for next week</td></tr>
</table></div>
<p><b>Why tagging matters:</b> the call-driver and churn sections are only as good as the tags on each conversation. Also post your weekly reflection in Lattice (wins, challenges, and where you need support).</p>`},
  { n:57, id:"l57", title:"Feedback & coaching process", mins:5, body:`
<ul>
<li><b>Bi-weekly 1:1s</b> with your lead are an honest, casual conversation about your goals, what's going well, and where to improve.</li>
<li><b>Lattice</b> is where you post updates and complete performance reviews: a self-assessment first, then your manager's review, then a results conversation.</li>
<li>The <b>Weekly Huddle</b> is where the team shares wins and case studies.</li>
</ul>
<h3>Ticket QA scorecard (100 points)</h3>
<div class="tbl"><table><tr><th>Area</th><th>What's scored</th><th>Points</th></tr>
<tr><td>Quality of communication</td><td>Answered every question (10) · professional, respectful tone (10) · clear and concise (5) · grammar and spelling (5)</td><td>30</td></tr>
<tr><td>Protocols &amp; policies</td><td>Followed the process consistently (10) · confidentiality and data privacy (0 or 10) · product knowledge (10)</td><td>30</td></tr>
<tr><td>Resolution + extra mile</td><td>Resolved, and promises kept (20) · efficiency (15) · extra mile (5)</td><td>40</td></tr>
</table></div>
<p><b>Score bands:</b> 91–100 top performer · 71–90 performing well · 41–70 performing moderately · 0–40 needs significant improvement.</p>
<div class="note"><b>The spirit of it</b>QA isn't about keeping score or pointing fingers. It's about helping each of us shine in our roles.</div>`}
  ],
  quiz:[
  {q:"What's the individual weekly CSAT target?", o:["70%","80%","85%","100%"], a:2, why:"Minimum 80%, target 85%, goal 90%."},
  {q:"How many points is confidentiality and data privacy worth on the QA scorecard?", o:["0–5 sliding","Either 0 or 10","20","It isn't scored"], a:1, why:"It's all or nothing: 0 or 10."},
  {q:"A customer left a bad rating. What should you do?", o:["Ignore it","Review the conversation, follow up quickly with an apology and a real solution, and ask about the rating at most once","Offer LGMX50 in exchange for a better rating","Ask them repeatedly to change it"], a:1, why:"Follow up genuinely, and never buy a rating."},
  {q:"Why does tagging matter for the EOW report?", o:["It doesn't","Call drivers and churn analysis depend on accurate tags","It changes CSAT","It's required by Stripe"], a:1, why:"Untagged conversations leave gaps in the report."},
  {q:"What's the target time per ticket?", o:["2 minutes","About 10 minutes","30 minutes","No limit"], a:1, why:"If a ticket runs longer than 10 minutes, it probably needs escalating."}
  ]
},
/* ================= PART 10 ================= */
{ id:"p10", part:10, title:"Practice & Assessment", short:"Exercises, role-plays, assessments, graduation",
  blurb:"Put it all together: draft real replies, role-play tough tickets, pass the assessments, and check off graduation.",
  lessons:[
  { n:59, id:"l59", title:"Email drafting exercises", mins:30, kind:"practice", body:`
<p>Open the <b>Practice Lab</b> and write a reply for each of the 6 scenarios. They're based on our most common and most sensitive conversations. For each one:</p>
<ol class="steps">
<li>Read the customer message and the internal notes.</li>
<li>Write your reply in our house style.</li>
<li>Check it against the rubric, or use <b>AI coaching</b> for instant feedback.</li>
<li>Compare it with the model reply, then mark the scenario as practiced.</li>
</ol>
<p>This lesson counts as complete once all 6 scenarios are practiced.</p>`},
  { n:60, id:"l60", title:"Role-play scenarios — common ticket types", mins:30, body:`
<p>Pair up with a teammate. One plays the customer using the brief below, and the other responds live, as if it were a chat. Swap roles, then debrief: what landed, and what would you change?</p>
<div class="tbl"><table><tr><th>Scenario</th><th>Customer brief (for the "customer")</th><th>What the agent should do</th></tr>
<tr><td><b>1. "It's not tracking"</b></td><td>Your Mobile-200 has been gray for 2 days. It lives in your truck's glove box. You're annoyed and short on time.</td><td>Show empathy, check placement (glove box!), check power and coverage, send a network reset, and set a timing expectation.</td></tr>
<tr><td><b>2. "Audio is a scam"</b></td><td>You were charged for minutes, your calls hit voicemail, and you didn't know audio costs extra. You're thinking about a chargeback.</td><td>Acknowledge the surprise, explain the pricing and the motion requirement, check the SOS number, reset the SIM, and escalate if needed. Don't promise a refund you can't give.</td></tr>
<tr><td><b>3. "Cancel now"</b></td><td>You want to cancel. You're polite but firm, and you'll accept one offer at most.</td><td>Make one save offer (a pause), then cancel right away and confirm clearly.</td></tr>
<tr><td><b>4. "Wrong email"</b></td><td>You're writing from your work email about a tracker registered to your personal email, and you want your location history.</td><td>Verify first. Ask them to write from the account email. Share nothing until they do.</td></tr>
<tr><td><b>5. "Refund where?"</b></td><td>You returned the tracker 5 days ago and there's no refund yet. You're worried.</td><td>Check that the return arrived, explain the 5–10 business day timeline, and give a specific date.</td></tr>
<tr><td><b>6. "Found a tracker"</b></td><td>You found a tracker on your car and you're scared and angry. You want the owner's name.</td><td>Stay calm and serious. Share no owner info, direct them to police, and flag the account.</td></tr>
</table></div>
<p class="small muted">Mark this lesson complete after you've done at least 3 role-plays in each role.</p>`},
  { n:61, id:"l61", title:"Product Knowledge Assessment", kind:"assess", pools:["p3","p5"], count:12, mins:10 },
  { n:62, id:"l62", title:"Policy & Procedure Quiz", kind:"assess", pools:["p4","p7","p8"], count:12, mins:10 },
  { n:64, id:"l64", title:"Graduation checklist — ready to handle tickets", kind:"checklist", mins:5, items:[
    "I completed every lesson and passed every knowledge check in Parts 1–9",
    "I passed the Product Knowledge Assessment and the Policy & Procedure Quiz",
    "I practiced all 6 Practice Lab scenarios",
    "I did role-plays as both customer and agent",
    "I can log in to Intercom, GPX Admin, the SIM portals, Stripe, ShipStation, Slack and Notion",
    "I can send CHECK#, STATUS#, WHERE# and RESET# in Admin and read the responses",
    "I know our house opener and closer and use them in every email",
    "I know the current plans ($19.99/mo, $149.99/yr), audio pricing ($6/hr) and active codes",
    "I know when to escalate and how to convert a conversation to a Tier 2 ticket",
    "I tag every conversation and fill in its attributes before closing",
    "My lead reviewed a set of my draft replies and approved me to handle tickets"
  ]}
  ]
}
];
