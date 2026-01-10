# Deployment Guide - CitySaunaFinder

## Current Setup

**Domain:** citysaunafinder.com
**Hosting:** Cloudflare Pages
**Integration:** Auto-deploy from GitHub on push

---

## Deployment Steps

### 1. Commit the New Next.js App

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Migrate to Next.js 16 with v3 design and SEO optimization

- Archive legacy React SPA
- Implement Next.js 16 with SSG for all venue pages
- Add v3 design system (coastal + wood aesthetic)
- Create 21 static pages (homepage, 10 venues, static pages)
- Add RSS feed, sitemap, robots.txt
- Set up blog infrastructure with MDX
- Schema.org structured data for SEO

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to GitHub (triggers Cloudflare Pages build)
git push origin main
```

### 2. Update Cloudflare Pages Build Settings

Go to: **Cloudflare Dashboard → Pages → citysaunafinder → Settings → Builds & deployments**

**Update these settings:**

| Setting | Old Value | New Value |
|---------|-----------|-----------|
| **Framework preset** | Create React App (or None) | **Next.js** |
| **Build command** | `npm run build` (or similar) | **`npm run build`** |
| **Build output directory** | `build/` or `/` | **`.next`** |
| **Root directory** | `/` | **`citysaunafinder-app`** |
| **Node version** | (any) | **18 or higher** |

**Environment Variables to Add:**
- `NEXT_PUBLIC_SITE_URL` = `https://citysaunafinder.com`
- (Optional) `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = your key (when ready)

### 3. Trigger Manual Deploy (if auto-deploy doesn't work)

If the auto-deploy fails or doesn't pick up the new settings:

1. Go to **Deployments** tab
2. Click **Retry deployment** on latest build
3. Or click **Create deployment** → Select branch `main`

### 4. Verify Deployment

Once deployed, check:
- ✅ https://citysaunafinder.com/ - Homepage loads
- ✅ https://citysaunafinder.com/sauna/olympus-spa - Venue page loads
- ✅ https://citysaunafinder.com/feed.xml - RSS feed works
- ✅ https://citysaunafinder.com/sitemap.xml - Sitemap loads
- ✅ https://citysaunafinder.com/robots.txt - Robots.txt loads

---

## Troubleshooting

### Build Fails on Cloudflare

**Check:**
1. Root directory is set to `citysaunafinder-app`
2. Build output is `.next` (not `out` or `build`)
3. Node version is 18+

### "404 Not Found" on All Pages

**Cause:** Output directory wrong or Next.js not configured for static export

**Fix:**
- Ensure build output is `.next`
- Framework preset should be "Next.js" (not static)

### Old Site Still Showing

**Cause:** Cloudflare Pages cache or still building old directory

**Fix:**
1. Go to **Settings → Build configuration**
2. Confirm root directory is `citysaunafinder-app`
3. Clear cache: **Deployments → (latest) → Manage deployment → Delete**
4. Create new deployment from main branch

### Environment Variables Not Working

**Fix:**
1. Go to **Settings → Environment variables**
2. Add variables for **Production** environment
3. Redeploy

---

## GitHub Workflow

**Normal workflow after this:**

```bash
# Make changes to citysaunafinder-app/
cd citysaunafinder-app
# Edit files...

# Test locally
npm run dev

# Build to verify
npm run build

# Commit and push (auto-deploys)
git add .
git commit -m "Your change description"
git push origin main
```

Cloudflare Pages will:
1. Detect the push
2. Run `npm install` in `/citysaunafinder-app/`
3. Run `npm run build`
4. Deploy `.next/` output
5. Live in ~2-3 minutes

---

## First-Time Setup Checklist

- [ ] Push new code to GitHub
- [ ] Update Cloudflare Pages root directory to `citysaunafinder-app`
- [ ] Update build output to `.next`
- [ ] Set framework preset to Next.js
- [ ] Add environment variables (if any)
- [ ] Test deployment at citysaunafinder.com
- [ ] Verify all pages load (homepage, venues, RSS, sitemap)
- [ ] Submit new sitemap to Google Search Console

---

## DNS Settings (Already Configured)

Your domain citysaunafinder.com is already pointed to Cloudflare Pages.
No DNS changes needed - just update the build settings.

**Current setup:**
- citysaunafinder.com → Cloudflare Pages
- Auto-deploy on push to `main` branch
- HTTPS enabled via Cloudflare

---

## Future Deployments

After initial setup, deployments are automatic:
1. Make changes
2. `git push origin main`
3. Wait 2-3 minutes
4. Changes live at citysaunafinder.com

**No manual intervention needed** once Cloudflare Pages settings are updated.
