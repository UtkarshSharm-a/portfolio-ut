# EmailJS Setup Guide

To enable email functionality in your contact form, follow these steps:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose "Gmail" (or your email provider)
4. Connect your Gmail account (utkarshsharma8369@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form
**Subject:** New Contact Form Submission from {{from_name}}
**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Your Code
Open `src/App.jsx` and replace these values in the `ContactSection` function:

```javascript
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### Using Vite environment variables (recommended)

For local development and to avoid committing secrets, create a file named `.env.local` at the project root and add the following variables (replace values with your EmailJS values):

```env
# .env.local
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The app reads these variables using `import.meta.env.VITE_EMAILJS_SERVICE_ID`, etc. Restart the dev server after creating or changing `.env.local`.

## That's it!
Your contact form will now send emails directly to utkarshsharma8369@gmail.com when someone submits the form.
