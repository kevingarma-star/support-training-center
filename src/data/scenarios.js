export const SCENARIOS = [
{ id:"sc1", title:"Audio won't connect after buying minutes", tag:"Live audio",
  customer:`Subject: this is ridiculous\n\nI bought 2 hours of audio YESTERDAY and every time I call the tracker it says "the call cannot be completed as dialed." My son drives the car and this is the whole reason I bought this thing. Fix it or refund me.\n— Renee`,
  notes:`Mobile-200, serial 218844, active monthly plan. Minutes balance: 120. SOS number is set to her cell (matches the caller). Tracker is online and was moving 10 minutes ago. The SIM still shows restricted from before the purchase (her balance had hit zero last week). You've just reset the SIM on the backend.`,
  rubric:["Opens with empathy; no forced positivity","States what you did (SIM reset) and the timing (about 30 minutes)","Explains why: the zero balance blocked calls","Reminds her to call from the SOS phone while the tracker is moving","Doesn't promise a refund before the fix has had a chance to work; invites her to reply if it still fails","Uses the house opener and sign-off; short and conversational"],
  model:`Hi Renee 😊 It's Kevin from the Logistimatics Support Team here to assist you

I'm really sorry. You bought those minutes so you could check in on your son, and hearing "cannot be completed" every time is frustrating. I found the cause: when your balance hit zero last week, the tracker's SIM was blocked from calls, and it hadn't reset after your purchase. I've just reset it on our end, so give it about 30 minutes.

Your 120 minutes are all there. When you try again, call from your cell (the SOS number) while the car is moving, because the tracker sleeps when it's parked.

If it still won't connect after that, reply here and I'll take it straight to our device specialists.

Best,
Kevin / Logistimatics Support`},
{ id:"sc2", title:"Routine cancellation", tag:"Billing",
  customer:`hi please cancel my subscription. dont need it anymore. thanks`,
  notes:`Customer for 14 months, monthly plan at $19.99, Mobile-200. No open issues. The request came in by email, not through the bot flow.`,
  rubric:["Acknowledges the request warmly and briefly","Makes one relevant save offer (a pause of up to 3 months, or pointing out other uses)","Makes it easy to confirm, and promises to cancel right away","Explains that service continues through the end of the period","No pressure, no multiple offers","House opener and sign-off"],
  model:`Hi there 😊 It's Kevin from the Logistimatics Support Team here to assist you

Thanks for letting me know, happy to help. Before I close it out, one option: I can pause your subscription for up to 3 months instead. The tracker stays ready for a trip, a second car, or equipment, and you won't be charged in the meantime.

If you'd rather cancel, just reply "cancel" and I'll take care of it right away. You'll still have service through the end of your current billing period.

Best,
Kevin / Logistimatics Support`},
{ id:"sc3", title:"Return on day 20, box thrown away", tag:"Returns",
  customer:`I'd like to return my tracker. I got it about 3 weeks ago but it's just too bulky for my bike. I threw out the box though, is that a problem?`,
  notes:`Protect Plus delivered 20 days ago. Undamaged per the customer. Annual plan purchased with it. The returns policy requires the original box; returns without it may carry a 10% restocking fee.`,
  rubric:["Thanks them and acknowledges the size concern","Confirms they're within the 30-day window","Clearly and kindly explains the original-box requirement and the possible 10% restocking fee","Explains next steps (we email a prepaid USPS label; ship within 2 weeks; label goes on the outer box)","Addresses the subscription (cancel it or confirm it's canceled; returning doesn't cancel it)","Gives refund timing (5–10 business days after we receive it)"],
  model:`Hi there 😊 It's Kevin from the Logistimatics Support Team here to assist you

Thanks for reaching out, and I get it: a tracker that doesn't fit your bike isn't much use. You're still within the 30-day return window. One thing to know: our policy asks for the original box, so without it a 10% restocking fee may apply to your refund.

If you'd like to go ahead, I'll email you a prepaid USPS label. Pack the tracker and its accessories securely, put the label on the outside of the package, and send it within 2 weeks. I'll also cancel the annual subscription that came with it, since returning the device doesn't cancel it on its own. Once we receive the tracker, your refund will show up within 5–10 business days.

Want me to send the label?

Best,
Kevin / Logistimatics Support`},
{ id:"sc4", title:"Old tracker reactivated but dead", tag:"2G / devices",
  customer:`I found my old tracker in the garage and paid to turn it back on yesterday but it just shows gray. Charged it all night.`,
  notes:`Mobile-200i (Gen 2), a 2G-only device. They reactivated yesterday for $19.99 monthly. 2G service is shut down, so the device can't report anywhere in the US.`,
  rubric:["Empathetic, plain-language explanation of the 2G shutdown","Makes clear a SIM swap or charging won't fix it","Cancels the new subscription and refunds the $19.99","Offers 20% off a 4G tracker with TRACKMORE2026 and includes the link","Doesn't offer a return on the obsolete device","Short, conversational, house opener and sign-off"],
  model:`Hi there 😊 It's Kevin from the Logistimatics Support Team here to assist you

Thanks for charging it and giving it a try. I'm sorry to be the bearer of bad news. Your Mobile-200i only runs on the 2G network, which carriers have now shut down completely, so it can't connect anywhere in the US, even with a full battery or a new SIM.

I've canceled the subscription you started yesterday and refunded the $19.99, which should reach your card within 5–10 business days. If you'd like to keep tracking, here's 20% off a new 4G tracker with code TRACKMORE2026: https://logistimatics.com/collections/gps-trackers

Best,
Kevin / Logistimatics Support`},
{ id:"sc5", title:"Data deletion request", tag:"Privacy",
  customer:`Please delete my account and all of my data. I no longer use your service.`,
  notes:`Automated data deletion request from the account email. One inactive tracker, no active subscription.`,
  rubric:["Acknowledges the request respectfully","NO save attempt of any kind","Confirms it's being forwarded to the team that handles deletion and explains what gets deleted","Sets expectations for a confirmation","Brief"],
  model:`Hi there 😊 It's Kevin from the Logistimatics Support Team here to assist you

Thank you for letting us know. I've forwarded your request to the team that handles data deletion. They'll remove your account along with your name, contact details, geofences and location history. You'll get a confirmation once it's complete.

Best,
Kevin / Logistimatics Support`},
{ id:"sc6", title:"Stranger found a tracker", tag:"Legal",
  customer:`I found one of your trackers stuck under my car. Who put it there?? I want their name and address right now.`,
  notes:`The serial they sent belongs to an active account. The writer is not the account holder.`,
  rubric:["Calm, serious, empathetic tone; takes the concern seriously","Does NOT reveal any owner information","Directs them to local law enforcement","Explains that we cooperate with law enforcement through proper legal channels (subpoena or warrant, via legal@logistimatics.com)","Flags the conversation internally for possible misuse"],
  model:`Hi there, it's Kevin from the Logistimatics Support Team.

I'm really sorry. Finding a tracker you didn't know about is alarming, and we take it seriously. For privacy and legal reasons, we can't share any information about the owner of a device. The best step right now is to contact your local police department. We cooperate fully with law enforcement, and they can request owner information from us through the proper legal channels.

If you have more questions in the meantime, reply here and I'll help however I can.

Best,
Kevin / Logistimatics Support`}
];
