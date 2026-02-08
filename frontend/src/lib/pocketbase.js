import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://web-mapala-backend.hf.space');

// Optionally, you can enable debug mode for PocketBase
// pb.autoCancellation(false); // Disable auto cancellation of requests
// pb.debug = true; // Enable debug logging