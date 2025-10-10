/**
 * Calendar API for Tech Grant Webinar
 * Generates downloadable .ics calendar event
 * 
 * Usage: GET /api/calendar/tech-grant-webinar.ics
 */

export const GET = async () => {
  try {
    // Event data for Tech Grant Webinar
    const title = 'DTFF 20k Grant Deadline';
    const description = 'Learn about the Digital Transformation Flexible Fund and how your Northern Ireland business can access up to £20,000 in funding for AI, IoT, robotics, AR/VR, and other advanced technologies.';
    const location = 'Online Event';
    const startDate = '2025-10-24';
    const startTime = '17:00';
    const duration = 60; // minutes
    
    // Parse date and time
    const [year, month, day] = startDate.split('-').map(Number);
    const [hours, minutes] = startTime.split(':').map(Number);
    
    // Calculate end time
    const startDateTime = new Date(year, month - 1, day, hours, minutes);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000);
    
    // Format dates for .ics file
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const uid = `tech-grant-webinar-${Date.now()}@causewaysoft.com`;
    
    // Create .ics file content
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
URL:https://causewaysoft.com/blog/tech-grant-for-ni-businesses
END:VEVENT
END:VCALENDAR`;

    // Return the .ics file with proper headers
    return new Response(icsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="tech-grant-webinar.ics"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('Error in calendar API:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
