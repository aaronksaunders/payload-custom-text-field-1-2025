# Payload CMS Custom Field Demo

This project demonstrates how to create a custom field in Payload CMS that automatically combines and synchronizes multiple field values.

## Features

### Full Name Field Synchronization

- Demonstrates a custom field that automatically combines `firstName` and `lastName` into a `serverFullName` field
- Shows how to handle both client-side and server-side field updates
- Implements real-time synchronization between fields

### Implementation Details

- `CustomFullNameTextFieldClient.tsx`: Client-side component that handles real-time display updates
- `CustomFullNameTextFieldServer.tsx`: Server-side component that manages database synchronization
- Uses Payload's field hooks and components to maintain field consistency

## How It Works

1. When a user updates either the `firstName` or `lastName` field:

   - The client component immediately updates the display value
   - The server component detects the change and updates the `serverFullName` in the database

2. The field remains read-only to prevent direct editing, as it's automatically generated from the source fields

## Example Usage
