# SMHOS-Inspired Refinement Tasks

- [x] Inspect SMHOS typography, navigation and section order from the live reference.
- [x] Translate the reference layout patterns into an original Great Mandate page hierarchy.
- [x] Update the website typography, header treatment and section sequencing.
- [x] Verify the revised desktop and mobile presentation, then save a new project checkpoint.

## Accent and Structure Refinement Tasks

- [x] Remove visible numbering from Vision, Mission, Core Values, Who We Reach and Ministry Arms.
- [x] Replace the gold-based accent system with a distinct non-gold colour treatment.
- [x] Validate the revised desktop and mobile presentation.
- [x] Prepare future sub-page recommendations without creating new routes.

## Repository and Deployment Tasks

- [x] Inspect the connected deployment access and create a dedicated repository plan.
- [x] Create the `great-mandate-ministries` GitHub repository and push the website code.
- [x] Verify whether a Vercel project and live deployment are available; no linked Great Mandate Vercel project exists.
- [x] Confirm the repository and deployment links, including any remaining user action.

## Vercel Troubleshooting Tasks

- [x] Locate the linked Great Mandate Vercel project and latest deployment.
- [x] Inspect its build, deployment and runtime status.
- [x] Apply a safe source fix if the evidence identifies a repository-side configuration issue.
- [x] Confirm the exact recovery path and final accessible URL status.

> Diagnosis: the Vercel deployment was READY but initially blocked by Vercel Authentication. After access was opened, the project served a raw `server/index.ts` file because the Vite build output was not explicitly configured for Vercel. A project-level `vercel.json` now directs Vercel to build with Vite and serve `dist/public`. The compiled site then exposed Manus-only asset paths, so the external deployment has been updated to use public repository asset URLs.

> Verified outcome: the latest production deployment is READY and publicly renders the complete Great Mandate website, including the hero background, founder portrait and ministry logo.

## Ministry Sub-Page Integration Tasks

- [x] Define routes for About, Founder, Outreaches, Sermons, Events, Gallery, Prayer, Partner, Give and Contact.
- [x] Create shared ministry navigation, footer and page-shell components.
- [x] Build each dedicated ministry page with original Great Mandate content and focused calls to action.
- [x] Apply the routed-page Sacred Journey editorial refinement and remove remaining ministry-arm numbering.
- [x] Verify all routes locally and confirm dedicated About and Prayer routes directly on the live Vercel deployment.
- [x] Publish the route update and provide the public page links.

## Homepage Restoration Tasks

- [x] Restore the sunrise-led primary homepage visual treatment.
- [x] Remove the founder portrait and related desktop hero composition from the homepage.
- [x] Keep the supplied portrait exclusive to the dedicated Founder page.
- [x] Verify the corrected desktop and mobile homepage, then update Vercel.

## Market Evangelism Photograph

- [x] Upload the supplied Market Evangelism photograph to the public website asset path.
- [x] Replace the Market Evangelism gallery placeholder with the authentic photograph.
- [x] Verify the Gallery and Outreaches pages, then update Vercel.
