---
publishDate: 2025-10-06T00:00:00Z
author: Matthew
title: Adding Calendar Events to Your Blog Post - AstroJS API Route Example
excerpt: Learn how to create downloadable .ics calendar events in your AstroJS blog using TypeScript API routes. This example shows how to generate calendar files that users can add to their calendars.
image: '~/assets/images/blog-post-downloadable-calendar-event.png'
category: Technical Tutorial
tags:
  - AstroJS
  - TypeScript
  - API Routes
  - Calendar Events
  - Web Development

metadata:
  canonical: https://causewaysoft.com/blog/calendar-api-example
---

# Adding Calendar Events to Your AstroJS Blog

In this tutorial, we'll explore how to create downloadable calendar events for your AstroJS blog using TypeScript API routes. This is perfect for webinars, events, workshops, or any time-sensitive content you want your readers to add to their calendars.

## What We'll Build

We'll create an API route that generates `.ics` calendar files that users can download and add to their preferred calendar application (Google Calendar, Outlook, Apple Calendar, etc.).

## The API Routes

Here's how you can link to the calendar APIs from your blog posts:

### Basic Usage (Static Events)

```html
<!-- Tech Grant Webinar -->
<a href="/api/calendar/dtff-tech-grant-webinar.ics"> 📅 Add Tech Grant Webinar to Calendar </a>
```

### Creating Custom Calendar Events

For custom events, create new API route files in `/src/pages/api/calendar/`:

```typescript
// /src/pages/api/calendar/my-event.ics.ts
export const GET = async () => {
  try {
    const title = 'My Custom Event';
    const description = 'Event description here';
    const location = 'Event Location';
    const startDate = '2024-03-20';
    const startTime = '10:00';
    const duration = 60;

    // Parse and format dates...
    const [year, month, day] = startDate.split('-').map(Number);
    const [hours, minutes] = startTime.split(':').map(Number);

    const startDateTime = new Date(year, month - 1, day, hours, minutes);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const uid = `my-event-${Date.now()}@causewaysoft.com`;

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CausewaySoft//Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTART:${formatDate(startDateTime)}
DTEND:${formatDate(endDateTime)}
DTSTAMP:${formatDate(new Date())}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
STATUS:CONFIRMED
SEQUENCE:0
ORGANIZER;CN=CausewaySoft:mailto:info@causewaysoft.com
END:VEVENT
END:VCALENDAR`;

    return new Response(icsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="my-event.ics"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  } catch (error) {
    console.error('Error in calendar API:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
```

## Example: Tech Grant Webinar Event

Let's say we're hosting a webinar about the Digital Transformation Flexible Fund:

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
  <h3 class="text-lg font-semibold text-blue-800 mb-2">🎯 20K Tech Grant Deadline</h3>
  <p class="text-blue-700 mb-3">
    <strong>Date:</strong> 24 October, 2025<br>
    <strong>Time:</strong> 5:00 PM GMT<br>
  </p>
  <p class="text-blue-600 mb-4">
    Don’t miss the DTFF grant deadline! Download the calendar event now to get automatic reminders - starting 7 days before and every day until the deadline. Add it to your calendar and don't miss your chance for up to £20,000 in funding.
  </p>
  <a 
    href="/api/calendar/dtff-tech-grant-webinar.ics"
    class="inline-flex items-center px-4 py-2 bg-blue-600 !text-white no-underline rounded-lg hover:bg-blue-700 transition-colors"
  >
    🗓️ Add to Calendar
  </a>
</div>

## Event Configuration

When creating a new calendar event, configure these parameters in your API route:

| Parameter     | Required | Description             | Example                             |
| ------------- | -------- | ----------------------- | ----------------------------------- |
| `title`       | **Yes**  | Event title             | `Tech Grant Webinar`                |
| `description` | No       | Event description       | `Learn about funding opportunities` |
| `location`    | No       | Event location          | `Online Event`                      |
| `startDate`   | **Yes**  | Start date (YYYY-MM-DD) | `2024-02-15`                        |
| `startTime`   | **Yes**  | Start time (HH:MM)      | `14:00`                             |
| `duration`    | **Yes**  | Duration in minutes     | `60`                                |
| `filename`    | No       | Custom filename         | `webinar-2024`                      |

## JavaScript Integration

You can create calendar links dynamically with JavaScript:

```javascript
// Simple calendar link generation
function createCalendarLink(eventSlug) {
  return `/api/calendar/${eventSlug}.ics`;
}

// Example usage
const techGrantLink = createCalendarLink('tech-grant-webinar');
const generalWebinarLink = createCalendarLink('general-webinar');

// Add to page dynamically
function addCalendarButton(eventSlug, buttonText) {
  const button = document.createElement('a');
  button.href = createCalendarLink(eventSlug);
  button.textContent = buttonText;
  button.className = 'calendar-link';
  return button;
}

// Usage
const calendarButton = addCalendarButton('tech-grant-webinar', '📅 Add to Calendar');
document.body.appendChild(calendarButton);
```

## Styling Calendar Links

Here are some CSS classes you can use to style your calendar links:

```css
.calendar-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.calendar-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
```

## Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Missing or invalid parameters
- **500 Internal Server Error**: Issues generating the calendar file

Always test your calendar links before publishing to ensure they work correctly.

## Browser Compatibility

The generated `.ics` files work with:

- ✅ Google Calendar
- ✅ Apple Calendar
- ✅ Microsoft Outlook
- ✅ Thunderbird
- ✅ Most calendar applications

## Important Notes for Astro Static Mode

This implementation works specifically with Astro's static mode (`output: 'static'`). Here are some important considerations:

### Why Static Events Work Best

- **Query Parameters**: Astro's static mode doesn't handle dynamic query parameters well in API routes
- **Dynamic Routes**: Dynamic routes require `getStaticPaths` which isn't suitable for calendar events
- **Static Generation**: Each calendar event needs its own dedicated API route file

### Best Practices

1. **Create Specific Routes**: Create individual `.ics.ts` files for each event
2. **Use Descriptive Filenames**: Make your API route names descriptive (e.g., `tech-grant-webinar.ics.ts`)
3. **Test Locally**: Always test your calendar files before deploying
4. **Update Events**: To change event details, update the API route file and redeploy

### Alternative Approaches

If you need truly dynamic calendar generation, consider:

- Switching to `output: 'server'` mode (requires server deployment)
- Using a separate API service
- Pre-generating calendar files at build time

## Conclusion

Adding calendar events to your blog posts is a great way to improve user engagement and help readers remember important dates. The TypeScript API routes we've created provide a reliable solution for generating downloadable calendar files that work perfectly with Astro's static mode.

Try adding calendar links to your next event or webinar post!

---

_Need help implementing this in your AstroJS project? Contact our team at CausewaySoft for custom development services._
