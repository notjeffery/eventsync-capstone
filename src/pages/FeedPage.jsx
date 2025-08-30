import React, { useEffect, useMemo, useState } from "react";
import "../styles/FeedPage.css";

const FEED_VERSION = "v0.3-TM-NY-LDN";

export default function FeedPage() {
  console.log("FeedPage loaded:", FEED_VERSION);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY =
    import.meta.env.VITE_TICKETMASTER_API_KEY ||
    "aZHAqKf21iYkGuJmj8PC6uKk1dE2m8FD";

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);

        const urls = [
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=New%20York&countryCode=US&size=10&sort=date,asc`,
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=London&countryCode=GB&size=10&sort=date,asc`,
        ];

        const resps = await Promise.all(urls.map((u) => fetch(u)));
        const payloads = await Promise.all(resps.map((r) => r.json()));

        let merged = [];
        payloads.forEach((p) => {
          if (p?._embedded?.events) merged = merged.concat(p._embedded.events);
        });

        merged.sort((a, b) => {
          const aDate =
            a?.dates?.start?.dateTime || a?.dates?.start?.localDate || "";
          const bDate =
            b?.dates?.start?.dateTime || b?.dates?.start?.localDate || "";
          return aDate.localeCompare(bDate);
        });

        setEvents(merged);
      } catch (err) {
        console.error("Ticketmaster fetch error:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [API_KEY]);

  const bannerText = useMemo(
    () => `LIVE EVENTS FEED — NY + LDN • ${FEED_VERSION}`,
    []
  );

  return (
    <div className="feed-container">
      <div className="feed-banner">{bannerText}</div>

      {/* Tabs */}
      <div className="feed-tabs">
        <span className="tab">Explore</span>
        <span className="tab">Following</span>
        <span className="tab active">For You</span>
      </div>

      <div className="feed-events">
        {loading ? (
          <div className="loading">Loading events…</div>
        ) : events.length === 0 ? (
          <div className="empty">
            No events found. Try again in a minute or check your API key.
          </div>
        ) : (
          events.map((ev) => {
            const img = ev?.images?.[0]?.url || "";
            const whenDate =
              ev?.dates?.start?.localDate || ev?.dates?.start?.dateTime || "";
            const whenTime = ev?.dates?.start?.localTime || "";
            const venue = ev?._embedded?.venues?.[0]?.name || "";
            return (
              <div className="event-card" key={ev.id}>
                {img && <img className="event-image" src={img} alt={ev.name} />}
                <div className="event-overlay">
                  <h2 className="event-title">{ev.name}</h2>
                  <div className="event-meta">
                    <span>{whenDate}</span>
                    {whenTime && <span> • {whenTime}</span>}
                    {venue && <span> • {venue}</span>}
                  </div>
                  <a
                    className="event-link"
                    href={ev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
