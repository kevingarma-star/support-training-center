import { useState, useEffect } from 'react';

const DEVICES = [
  {
    id: 'mobile200',
    name: 'Mobile-200 (200G)',
    badge: 'Flagship',
    badgeMod: 'prog',
    power: 'Rechargeable · Magnetic · IP67',
    reporting: '30 s moving · 1 h parked',
    battery: '~7–10 days',
    audio: true,
    detail: `
<p class="lead">The device behind about 88% of all support conversations. Portable and rechargeable with a magnetic mount — customers attach it to vehicles, bags, and backpacks. This is the one you'll know inside out.</p>
<h3>LED status</h3>
<ul>
<li><b>Solid red:</b> charging. <b>Slow-blinking red:</b> fully charged.</li>
<li><b>Green blinking every ~3 s:</b> connected, normal. <b>Rapid green blink:</b> SIM may need reseating.</li>
</ul>
<h3>Power &amp; charging</h3>
<ul>
<li>The power button <b>cannot turn the tracker off</b> — that's by design. To confirm it's on: press the button; if all lights flash briefly, it's on.</li>
<li>Charge from a wall outlet with the included adapter. A laptop USB port may not supply enough current. Full charge takes 4–5 hours; on a completely drained unit, the red charging light can take up to 30 minutes to appear.</li>
<li>Battery drains faster indoors, in weak signal areas, and during live audio use.</li>
</ul>
<h3>Common support patterns</h3>
<ul>
<li><b>"My tracker isn't updating."</b> Start with placement. Metal surfaces, trunks, engine bays, glove boxes, and underground parking all block GPS. For audio, the tracker must be inside the cabin.</li>
<li><b>Rapid green blink:</b> open the case (#0 Phillips, 6 screws), slide the SIM out and back in, and test before closing.</li>
<li><b>Tracker appears offline in Admin:</b> check the SIM portal link under the ICCID. Confirm the SIM is active and has data sessions before escalating to hardware.</li>
</ul>
<h3>Live audio</h3>
<ul>
<li>Supported. Costs $6/hour in 60-minute blocks — not included in the subscription.</li>
<li>The tracker must be <b>moving</b>. A parked tracker sleeps; callers hear voicemail or "customer not available."</li>
<li>US networks only (contiguous US). Location still works abroad, but audio won't connect.</li>
</ul>
<div class="note warn"><b>Set expectations before they buy</b>Two things customers consistently don't know: audio costs extra, and it only works while moving. Both are top reasons for returns.</div>
`,
  },
  {
    id: 'carcharger',
    name: 'Car Charger',
    badge: 'Discontinued',
    badgeMod: 'warn',
    power: '12V accessory port',
    reporting: 'Every 400 m traveled',
    battery: 'Runs on vehicle power',
    audio: true,
    detail: `
<p class="lead">The Car Charger draws power from the 12V accessory port (cigarette lighter socket). It has been discontinued — we still support existing customers, but <b>never recommend it as a new purchase</b>.</p>
<h3>Key details</h3>
<ul>
<li>Reports every 400 meters traveled — not on a fixed time interval. A parked vehicle won't ping until it moves.</li>
<li>Only supports <b>one SOS number</b> (vs. two on the Mobile-200).</li>
<li>Has the best audio quality of any model in the lineup. Moot for new customers since it's discontinued.</li>
</ul>
<h3>Common support issue</h3>
<ul>
<li><b>"It stops reporting when I park."</b> Some vehicles only power the 12V port while the ignition is on. To test: plug a phone charger into the same port with the car off. If it doesn't charge, that's the cause — the port loses power when the ignition is off. The tracker is working correctly.</li>
</ul>
<h3>What not to do</h3>
<ul>
<li>Don't recommend the Car Charger to a customer shopping for a new device. Guide them to the Mobile-200 (which also supports audio) or the Protect Plus (no audio, longer battery).</li>
</ul>
<div class="note"><b>Red LED = getting power</b>A red LED means the Car Charger is receiving power from the port. If the customer reports no light and no updates, check whether the port is ignition-controlled first.</div>
`,
  },
  {
    id: 'protectplus',
    name: 'Protect Plus',
    badge: null,
    power: 'Rechargeable',
    reporting: '30 s moving · 1 h parked',
    battery: '~2 weeks',
    audio: false,
    detail: `
<p class="lead">The Protect Plus has the same real-time reporting cadence as the Mobile-200 (30 seconds while moving, hourly while parked), but no live audio and roughly double the battery life at about two weeks.</p>
<h3>When to recommend it</h3>
<ul>
<li>Customer wants real-time tracking and doesn't need audio.</li>
<li>Customer can't charge every week — the ~2-week battery is a meaningful upgrade over the Mobile-200's 7–10 days.</li>
<li>Tracking a vehicle or asset where audio is irrelevant (equipment, trailers, a secondary car).</li>
</ul>
<h3>When not to recommend it</h3>
<ul>
<li>Customer mentions wanting to listen in — that's a Mobile-200 conversation only. Confirm audio isn't needed before recommending the Protect Plus.</li>
</ul>
<h3>Support patterns</h3>
<p>Similar to the Mobile-200 — placement is the first thing to check when a customer reports missed updates. Same Admin diagnostics apply.</p>
<div class="note"><b>Confirm no audio needed</b>Protect Plus has no audio and never will. If a customer buys it expecting audio, that's a return. Ask directly before recommending.</div>
`,
  },
  {
    id: 'roadwired',
    name: 'Road-Wired',
    badge: null,
    power: 'Hardwired to 12V',
    reporting: '30 s moving · 1 h parked',
    battery: 'Backup battery &lt;24 h',
    audio: false,
    detail: `
<p class="lead">The Road-Wired is hardwired directly into the vehicle's 12V system, so it never needs to be removed and recharged. Designed for permanent, hidden installs.</p>
<h3>Key details</h3>
<ul>
<li>Same real-time cadence as Mobile-200 and Protect Plus (30 s moving, 1 h parked) while the vehicle is running.</li>
<li>Has a backup battery, but it only lasts <b>under 24 hours</b> once disconnected from vehicle power. It's a failsafe — not a long-term power source.</li>
<li><b>Professional mechanic install is strongly recommended.</b> Incorrect wiring can damage the vehicle or the tracker. Customers who DIY and run into issues — start by asking how it was installed.</li>
</ul>
<h3>When to recommend it</h3>
<ul>
<li>Customer wants a permanent, discreet install in a vehicle — something that can't be found and removed.</li>
<li>Fleet vehicles where removing for charging isn't practical.</li>
</ul>
<h3>Support patterns</h3>
<ul>
<li>Most support questions are about <b>installation</b>, not the tracker itself. Confirm they used a mechanic before diagnosing hardware.</li>
<li>If the tracker goes offline unexpectedly: check whether the vehicle power wire was accidentally disconnected, or if there's a fuse issue.</li>
</ul>
`,
  },
  {
    id: 'pocket',
    name: 'Pocket Tracker / Micro-431',
    badge: null,
    power: 'USB-C rechargeable',
    reporting: 'Every 400 m traveled',
    battery: '~10 days',
    audio: false,
    detail: `
<p class="lead">A small, portable USB-C tracker. Its biggest differentiator — and its most common source of confusion — is that it reports on <b>distance traveled, not time</b>.</p>
<h3>Distance-based reporting — the key gotcha</h3>
<ul>
<li>The tracker pings every <b>400 meters moved</b>. If the device is sitting still, it does not send updates.</li>
<li>Customers who expect a regular heartbeat (like the Mobile-200's 30-second ping) will be confused when a parked device shows no new updates. This is expected behavior — not a malfunction.</li>
<li>For stationary monitoring, this is the wrong device. Recommend the Mobile-200 or Protect Plus instead.</li>
</ul>
<h3>When to recommend it</h3>
<ul>
<li>Tracking a person, bag, or moving asset where you only care about the trail and don't need a real-time "is it moving right now" feed.</li>
<li>Battery lasts up to ~10 days on a charge.</li>
</ul>
<h3>Support patterns</h3>
<ul>
<li><b>"It's not updating."</b> First question: is the device currently stationary? If it hasn't moved 400 m, it won't ping. This alone resolves most calls on this device.</li>
</ul>
<div class="note warn"><b>Distance, not time</b>Always set this expectation before a customer buys. Customers expecting minute-by-minute updates will be frustrated — this device only pings when it moves 400 m.</div>
`,
  },
  {
    id: 'assetmini',
    name: 'AssetTrack Mini',
    badge: null,
    power: 'Long-life battery',
    reporting: 'Every 24 hours',
    battery: '~5 years',
    audio: false,
    detail: `
<p class="lead">A set-it-and-forget-it tracker built for equipment and assets that sit for extended periods. Runs on a long-life battery rated for about five years and checks in once a day.</p>
<h3>Critical: not real-time</h3>
<ul>
<li>Reports once every 24 hours. There is no way to get a more frequent update.</li>
<li><b>Cannot be woken on demand.</b> Commands and geofence alerts only trigger at the next scheduled check-in. If a customer sends a command and nothing happens for hours, that's normal.</li>
</ul>
<h3>When to recommend it</h3>
<ul>
<li>Tracking trailers, heavy equipment, tools, or containers that sit in one place for days, weeks, or months at a time.</li>
<li>Customer doesn't need live tracking — just a once-a-day location snapshot.</li>
<li>Five-year battery makes it ideal for assets that are hard to access regularly.</li>
</ul>
<h3>Common mismatch scenario</h3>
<p>A customer orders an AssetTrack Mini and calls in expecting live updates. Before troubleshooting anything, confirm what they actually need. If they need real-time, this is the wrong device — recommend the Mobile-200 or Protect Plus and initiate a return/swap.</p>
<div class="note stop"><b>Wrong product, not a bug</b>If a customer with an AssetTrack Mini is frustrated about no live updates — they're not reporting a fault, they have the wrong device. Redirect before spending time on diagnostics.</div>
`,
  },
  {
    id: 'asset432',
    name: 'Asset 432 / 422',
    badge: null,
    power: 'Battery',
    reporting: '1–4 times a day',
    battery: 'Long life',
    audio: false,
    detail: `
<p class="lead">Battery-powered asset trackers similar to the AssetTrack Mini. They check in more frequently — 1 to 4 times a day — but are still not real-time devices.</p>
<h3>Key details</h3>
<ul>
<li>Check-in frequency of 1–4 times a day depending on settings.</li>
<li><b>Cannot be woken on demand.</b> Commands and geofence alerts only process at the next check-in. A customer who sends a command and waits hours is experiencing normal behavior.</li>
<li>Long battery life — designed to last months between charges depending on reporting frequency.</li>
</ul>
<h3>When to recommend it</h3>
<ul>
<li>Customer needs slightly more frequent check-ins than the AssetTrack Mini's once-a-day, but still doesn't need real-time tracking.</li>
<li>Trailers, equipment, or containers that move occasionally and need location snapshots a few times a day.</li>
</ul>
<h3>Support patterns</h3>
<ul>
<li>Same as AssetTrack Mini: the most common call is a customer expecting real-time updates. Confirm their use case first.</li>
<li>If a customer reports commands not working: confirm they waited for the next check-in window before escalating.</li>
</ul>
`,
  },
  {
    id: 'smartlabel',
    name: 'SmartLabel',
    badge: 'No subscription',
    badgeMod: 'good',
    power: 'Disposable',
    reporting: 'Broadcasts every 2 min',
    battery: '~2 months',
    audio: false,
    detail: `
<p class="lead">A disposable Bluetooth label for tracking shipments and envelopes. Fundamentally different from every other device in the lineup — it uses <b>Bluetooth, not GPS</b>, and requires no subscription.</p>
<h3>How it actually works</h3>
<ul>
<li>The label broadcasts a Bluetooth signal every 2 minutes. It does not connect to GPS satellites or cellular networks.</li>
<li>Location is reported when <b>an iPhone with Find My enabled passes nearby</b> and picks up the broadcast. Apple's Find My network relays the location — this is not the Logistimatics app.</li>
<li>In areas with few iPhones nearby, the label goes silent — even if it's still powered on and broadcasting.</li>
</ul>
<h3>When to recommend it</h3>
<ul>
<li>Tracking packages, envelopes, or shipments in transit through populated areas (cities, major shipping hubs).</li>
<li>Customer wants one-time tracking without a monthly subscription — it's a single purchase.</li>
<li>Battery lasts approximately 2 months, then it's disposable.</li>
</ul>
<h3>When not to recommend it</h3>
<ul>
<li>Customer wants real-time GPS location — this isn't that. Recommend the Mobile-200 instead.</li>
<li>Tracking in rural areas where there are unlikely to be iPhones nearby to relay the signal.</li>
</ul>
<div class="note warn"><b>Set this expectation clearly</b>Customers who expect GPS accuracy from a SmartLabel will always be disappointed. Make sure they understand it's Bluetooth-based and relies on Apple's Find My network before they buy — this is a top return reason for this product.</div>
`,
  },
];

export default function LineupLesson() {
  const [openId, setOpenId] = useState(null);
  const device = DEVICES.find(d => d.id === openId);

  useEffect(() => {
    if (!openId) return;
    const handler = (e) => { if (e.key === 'Escape') setOpenId(null); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openId]);

  useEffect(() => {
    document.body.style.overflow = openId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openId]);

  return (
    <>
      <div className="prose">
        <p className="lead">Eight trackers. One dominates. The Mobile-200 accounts for about 88% of all device conversations — so start there. But knowing the full lineup means you&apos;ll catch the right fit for the other 12%, and you&apos;ll never send a customer down the wrong path.</p>
        <p style={{ fontSize: 13.5, color: 'var(--ink-3)', margin: '0 0 20px' }}>Tap any device for support notes and common call patterns.</p>
      </div>

      <div className="dev-grid">
        {DEVICES.map(d => (
          <button key={d.id} className="dev-card" onClick={() => setOpenId(d.id)}>
            <div className="dev-card-top">
              <span className="dev-card-name">{d.name}</span>
              {d.badge && <span className={`chip ${d.badgeMod ?? ''}`}>{d.badge}</span>}
            </div>
            <div className="dev-specs">
              <div className="dev-spec"><span className="dev-spec-lbl">Power</span><span>{d.power}</span></div>
              <div className="dev-spec"><span className="dev-spec-lbl">Reports</span><span>{d.reporting}</span></div>
              <div className="dev-spec"><span className="dev-spec-lbl">Battery</span><span>{d.battery}</span></div>
            </div>
            <div className="dev-card-ft">
              {d.audio
                ? <span className="chip good">Audio ✓</span>
                : <span className="chip bad">No audio</span>
              }
              <span className="dev-more">Details →</span>
            </div>
          </button>
        ))}
      </div>

      <div className="prose">
        <h3>Which tracker to recommend</h3>
        <p>Ask yourself: <em>Does this person need to see it moving live, or just know where it is?</em> That one question resolves about half of all recommendation calls.</p>
      </div>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>The customer needs…</th>
              <th>Recommend</th>
              <th>Key thing to say upfront</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Real-time tracking plus the ability to listen in</td>
              <td><strong>Mobile-200</strong></td>
              <td>Audio costs $6/hour in 60-min blocks, and only works while the tracker is moving.</td>
            </tr>
            <tr>
              <td>Real-time tracking, no audio, longer battery life</td>
              <td><strong>Protect Plus</strong></td>
              <td>~2-week battery. No audio, ever — confirm they don&apos;t need it.</td>
            </tr>
            <tr>
              <td>A permanent, hidden install in a vehicle</td>
              <td><strong>Road-Wired</strong></td>
              <td>Professional install is strongly recommended. Backup battery lasts under 24 h without vehicle power.</td>
            </tr>
            <tr>
              <td>Tracking equipment or trailers that sit for months</td>
              <td><strong>AssetTrack Mini</strong> or <strong>Asset 432</strong></td>
              <td>These are not real-time. They check in 1–4 times a day. If they need live tracking, recommend the Mobile-200 instead.</td>
            </tr>
            <tr>
              <td>Tracking a shipment, package, or envelope</td>
              <td><strong>SmartLabel</strong></td>
              <td>No subscription — one-time purchase. Uses Bluetooth, not GPS. Accuracy depends on other app users being nearby.</td>
            </tr>
            <tr>
              <td>A fleet of 10+ trackers</td>
              <td>Route to <strong>GPX sales</strong></td>
              <td>Collect company name, quantity, and what they&apos;re tracking. See fleet routing note below.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose">
        <h3>Questions to ask before recommending</h3>
        <ol className="steps">
          <li><strong>What are you tracking?</strong> — Vehicle, person, equipment, shipment? Each has a natural fit.</li>
          <li><strong>Do you need real-time updates?</strong> — If yes, rule out asset trackers and SmartLabel immediately.</li>
          <li><strong>Do you need live audio?</strong> — If yes, it&apos;s the Mobile-200. Full stop.</li>
          <li><strong>How often can you charge it?</strong> — Someone who can&apos;t charge regularly should consider the Protect Plus (2 weeks) or Road-Wired.</li>
          <li><strong>Is it going in a vehicle permanently?</strong> — If they want it out of sight and don&apos;t want to deal with charging, Road-Wired is worth discussing.</li>
        </ol>
        <div className="note">
          <b>Fleet routing</b> — When a customer mentions 10 or more trackers, route to GPX sales. Collect: (1) company name, (2) approximate number of trackers, (3) what they&apos;re tracking (vehicles, equipment, trailers), and (4) their contact info. These deals involve custom pricing and are handled by the sales team.
        </div>
      </div>

      {openId && (
        <>
          <div className="dev-backdrop" onClick={() => setOpenId(null)} />
          <div className="dev-modal" role="dialog" aria-modal="true">
            <div className="dev-modal-hd">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span className="dev-modal-title">{device.name}</span>
                {device.badge && <span className={`chip ${device.badgeMod ?? ''}`}>{device.badge}</span>}
              </div>
              <button className="dev-modal-close" onClick={() => setOpenId(null)} aria-label="Close">✕</button>
            </div>
            <div className="dev-modal-body">
              <div className="prose" dangerouslySetInnerHTML={{ __html: device.detail }} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
