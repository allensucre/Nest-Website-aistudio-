<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/04f733ba-1da0-45d8-af95-be301be6800c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Configure waitlist submission:
   - Primary (Supabase): set `VITE_SUPABASE_WAITLIST_ENDPOINT` + `VITE_SUPABASE_ANON_KEY`
   - Fallback: set `VITE_WAITLIST_FALLBACK_EMAIL` (only used when Supabase config is missing or manual fallback is clicked on error)
4. Run the app:
   `npm run dev`
