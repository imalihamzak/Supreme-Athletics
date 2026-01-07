# EmailJS Setup Guide

This guide will help you configure EmailJS to receive form submissions from the "Get Started" page.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy your Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{to_email}}` - Your email address
   - `{{from_name}}` - User's full name
   - `{{from_email}}` - User's email
   - `{{phone}}` - User's phone number
   - `{{address}}` - User's address
   - `{{fitness_goals}}` - User's fitness goals
   - `{{experience_level}}` - User's experience level
   - `{{preferred_time}}` - Preferred training time
   - `{{additional_info}}` - Additional information
   - `{{subject}}` - Email subject

4. **Example Template:**
   ```
   Subject: {{subject}}
   
   New Membership Inquiry
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Address: {{address}}
   
   Fitness Goals: {{fitness_goals}}
   Experience Level: {{experience_level}}
   Preferred Time: {{preferred_time}}
   
   Additional Information:
   {{additional_info}}
   ```

5. **Copy your Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key**
3. **Copy your Public Key**

## Step 5: Update the Code

1. Open `src/pages/GetStarted.jsx`
2. Find these lines and replace with your actual values:
   ```javascript
   const serviceId = "YOUR_SERVICE_ID";      // Replace with your Service ID
   const templateId = "YOUR_TEMPLATE_ID";    // Replace with your Template ID
   const publicKey = "YOUR_PUBLIC_KEY";      // Replace with your Public Key
   ```
3. Also update the email address:
   ```javascript
   const templateParams = {
     to_email: "your-email@example.com",  // Replace with your email
     // ... rest of the code
   };
   ```
4. In the `useEffect` hook, update:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your Public Key
   ```

## Step 6: Test

1. Start your development server: `npm run dev`
2. Navigate to the "Get Started" page
3. Fill out and submit the form
4. Check your email inbox for the submission

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Email not received**: Verify your EmailJS service is connected correctly
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)

## Alternative: Using Formspree

If you prefer not to use EmailJS, you can use Formspree instead:
1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Replace the EmailJS code with a fetch request to your Formspree endpoint

