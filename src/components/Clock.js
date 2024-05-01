import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Clock({ onUpdate }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      try {
        // Fetch the current time from the API only once during component mount
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Manila');
        const data = await response.json();
        const currentTime = data.datetime;
        setTime(currentTime);

        // Call the onUpdate callback to pass the initial time to the parent component
        onUpdate(formatTime(currentTime));
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    // Fetch the time when the component mounts
    fetchTime();

    // Set up a setInterval to update the time locally every second
    const intervalId = setInterval(() => {
      // Update the time locally without making API calls
      const currentTime = new Date().toISOString();
      setTime(currentTime);

      // Call the onUpdate callback to pass the updated time to the parent component
      onUpdate(formatTime(currentTime));
    }, 1000); // Update time every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [onUpdate]); // Depend on onUpdate to ensure useEffect runs when it changes

  // Render nothing because we're only interested in updating the parent component's state
  return null;
}

function formatTime(datetime) {
  return format(new Date(datetime), 'h:mm aa'); // Format as "h:mm AM/PM"
}

export default Clock;
