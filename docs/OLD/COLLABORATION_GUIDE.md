








\ 
\ 
\ 
\ 
\ 
\ 
\ 
\ 

::: {custom-style="Title"}
**ORBYT**
:::

\ 
\ 

::: {custom-style="Subtitle"}
Hybrid Collaboration Framework
:::

::: {custom-style="Subtitle"}
Cross-Location Development Partnership
:::

\ 
\ 
\ 

────────────────────────────────────

\ 

**Version 2.0**

**January 30, 2026**

\ 

────────────────────────────────────

\ 
\ 
\ 

*Studio X AS (Norway)*
**Core Platform Development**

\ 

*External Development Team*
**Platform Integrations**

\ 
\ 
\ 
\ 
\ 
\ 
\ 
\ 

────────────────────────────────────

INTERNAL DOCUMENT

────────────────────────────────────

\newpage

**DOCUMENT INFORMATION**

| | |
|:---|:---|
| Document Title | Orbyt Hybrid Collaboration Framework |
| Version | 2.0 |
| Date | January 30, 2026 |
| Parties | Studio X AS, External Development Team |
| Classification | Internal |

\ 

**REVISION HISTORY**

| Version | Date | Author | Changes |
|:--------|:-----|:-------|:--------|
| 1.0 | Jan 28, 2026 | Studio X | Initial draft |
| 2.0 | Jan 30, 2026 | Studio X | Focused scope (Meta + YouTube + Mux) |

\newpage

## 1. Project Overview

This document outlines the collaboration structure between **Studio X** (Norway) and the **External Development Team** for the Orbyt project. The goal is to establish clear ownership, communication protocols, and integration points for efficient hybrid development.

### 1.1 Platform Scope

| Platform | Priority | Owner |
|----------|----------|-------|
| **Facebook** | MVP | External Team |
| **Instagram** | MVP | External Team |
| **YouTube** | MVP | External Team |

### 1.2 Video Infrastructure

| Component | Provider | Owner |
|-----------|----------|-------|
| Video Processing | Mux | Studio X (setup), Shared (usage) |
| Video Storage | Mux | Managed service |
| Video Delivery | Mux CDN | Managed service |

---

## 2. Team Responsibilities

### 2.1 Studio X (Norway) - Core Platform

| Area | Responsibility | Deliverables |
|------|----------------|--------------|
| **Architecture** | System design, database schema, API contracts | Technical specs, diagrams |
| **Backend Core** | Auth, user management, posts, scheduling | NestJS modules |
| **Mux Integration** | Video upload, processing, webhooks | Video service module |
| **Web Platform** | React dashboard | Complete web app |
| **Mobile App** | React Native app shell, navigation, UI | Expo app |
| **Design System** | UI/UX, component library | Figma, Storybook |
| **AI Features** | Content generation, prompt engineering | OpenAI integration |
| **DevOps** | CI/CD, hosting, monitoring | Infrastructure |

### 2.2 External Team - Platform Integrations

| Area | Responsibility | Deliverables |
|------|----------------|--------------|
| **Meta Integration** | Facebook & Instagram API | OAuth, publishing, analytics |
| **YouTube Integration** | YouTube Data API | OAuth, upload, metadata |
| **Content Validation** | Platform-specific validation | Validation service |
| **Error Handling** | Platform error mapping | Error catalog |
| **Integration Tests** | Platform-specific test suites | Test coverage |
| **Documentation** | API documentation | OpenAPI specs |

---

## 3. Technical Architecture

### 3.1 System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        STUDIO X LAYER                           │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │
│  │  React   │  │  React   │  │   AI     │  │    Backend       │ │
│  │   Web    │  │  Native  │  │ Service  │  │    (NestJS)      │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────────┬─────────┘ │
│       │             │             │                  │          │
│       └─────────────┴─────────────┴──────────────────┘          │
│                              │                                   │
│                     ┌────────┴────────┐                         │
│                     │   API Gateway   │                         │
│                     └────────┬────────┘                         │
│                              │                                   │
│              ┌───────────────┼───────────────┐                  │
│              │               │               │                  │
│              ▼               ▼               ▼                  │
│       ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│       │    Mux     │  │  Publish   │  │  Schedule  │           │
│       │  Service   │  │  Engine    │  │  Service   │           │
│       └─────┬──────┘  └─────┬──────┘  └────────────┘           │
│             │               │                                   │
└─────────────┼───────────────┼───────────────────────────────────┘
              │               │
              │    ┌──────────┴──────────┐
              │    │  INTEGRATION LAYER  │
              │    │  (External Team)    │
              │    └──────────┬──────────┘
              │               │
              │         ┌─────┴─────┐
              │         │           │
              ▼         ▼           ▼
        ┌─────────┐ ┌───────┐ ┌─────────┐
        │   Mux   │ │ Meta  │ │ YouTube │
        │   API   │ │  API  │ │   API   │
        └─────────┘ └───────┘ └─────────┘
```

### 3.2 Codebase Structure

```
orbyt/
├── apps/
│   ├── web/                    # Studio X - React web
│   ├── mobile/                 # Studio X - React Native (Expo)
│   └── api/                    # Shared - NestJS backend
│       ├── src/
│       │   ├── auth/           # Studio X
│       │   ├── users/          # Studio X
│       │   ├── posts/          # Studio X
│       │   ├── scheduling/     # Studio X
│       │   ├── video/          # Studio X - Mux integration
│       │   │   ├── video.module.ts
│       │   │   ├── video.service.ts
│       │   │   ├── video.controller.ts
│       │   │   ├── mux.service.ts
│       │   │   └── dto/
│       │   ├── analytics/      # Studio X (core) + External (platform)
│       │   ├── link-in-bio/    # Studio X
│       │   └── integrations/   # ⬅️ EXTERNAL TEAM
│       │       ├── integrations.module.ts
│       │       ├── shared/
│       │       │   ├── platform.interface.ts
│       │       │   ├── platform.errors.ts
│       │       │   └── content-validator.ts
│       │       ├── meta/
│       │       │   ├── meta.module.ts
│       │       │   ├── meta.service.ts
│       │       │   ├── facebook.publisher.ts
│       │       │   ├── instagram.publisher.ts
│       │       │   └── dto/
│       │       └── youtube/
│       │           ├── youtube.module.ts
│       │           ├── youtube.service.ts
│       │           ├── youtube.publisher.ts
│       │           └── dto/
│       └── shared/
│           ├── interfaces/
│           └── utils/
├── packages/
│   ├── ui/                     # Studio X - Component library
│   ├── types/                  # Shared TypeScript types
│   └── config/                 # Shared configuration
└── docs/
```

### 3.3 Interface Contracts

External team must implement this interface for each platform:

```typescript
// packages/types/src/platform.interface.ts

export type Platform = 'facebook' | 'instagram' | 'youtube';

export interface PlatformService {
  readonly platform: Platform;

  // ============ AUTHENTICATION ============
  
  /**
   * Generate OAuth authorization URL
   */
  getAuthUrl(userId: string, redirectUri: string): Promise<string>;

  /**
   * Exchange auth code for tokens
   */
  handleCallback(code: string, userId: string): Promise<OAuthResult>;

  /**
   * Refresh expired access token
   */
  refreshToken(refreshToken: string): Promise<TokenRefreshResult>;

  /**
   * Revoke access and clean up
   */
  disconnect(userId: string): Promise<void>;

  // ============ PUBLISHING ============

  /**
   * Publish content to platform
   * For video: videoUrl is the Mux MP4 rendition URL
   */
  publish(params: PublishParams): Promise<PublishResult>;

  /**
   * Get status of published post
   */
  getPostStatus(platformPostId: string): Promise<PostStatus>;

  /**
   * Delete a published post
   */
  deletePost(platformPostId: string): Promise<void>;

  // ============ VALIDATION ============

  /**
   * Validate content before publishing
   */
  validateContent(content: ContentToValidate): ValidationResult;

  // ============ ANALYTICS (Optional) ============

  /**
   * Fetch analytics for a post
   */
  getPostAnalytics?(platformPostId: string): Promise<PostAnalytics>;
}

// ============ TYPE DEFINITIONS ============

export interface PublishParams {
  accountId: string;        // Connected account ID
  content: {
    text?: string;
    mediaType: 'image' | 'video';
    mediaUrl: string;       // For video: Mux MP4 URL
    thumbnailUrl?: string;  // For video: Mux thumbnail URL
  };
  platformSpecific?: {
    // Facebook
    facebookPageId?: string;
    // Instagram
    instagramAccountId?: string;
    // YouTube
    title?: string;
    description?: string;
    tags?: string[];
    privacyStatus?: 'public' | 'unlisted' | 'private';
    categoryId?: string;
  };
}

export interface PublishResult {
  success: boolean;
  platformPostId?: string;
  platformUrl?: string;
  error?: PlatformError;
}

export interface PlatformError {
  code: string;
  message: string;
  platform: Platform;
  retryable: boolean;
  retryAfter?: number;  // seconds
}

export interface OAuthResult {
  accessToken: string;
  refreshToken?: string;
  expiresAt: Date;
  scope: string[];
  accounts: ConnectedAccount[];
}

export interface ConnectedAccount {
  platformAccountId: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  accountType: 'page' | 'profile' | 'channel';
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  field: string;
  message: string;
  limit?: number;
  actual?: number;
}
```

### 3.4 Video Integration Flow

Studio X provides Mux video URLs to External Team for publishing:

```typescript
// Studio X provides this to publishing engine
interface VideoForPublishing {
  // Mux asset info
  assetId: string;
  playbackId: string;
  
  // URLs for platform upload
  mp4Url: string;           // https://stream.mux.com/{id}/high.mp4
  thumbnailUrl: string;     // https://image.mux.com/{id}/thumbnail.jpg
  
  // Metadata
  duration: number;         // seconds
  aspectRatio: string;      // "16:9", "9:16", "1:1"
  width: number;
  height: number;
}

// External team uses mp4Url for platform uploads
async function publishToYouTube(video: VideoForPublishing, metadata: YouTubeMetadata) {
  // Download from Mux URL and upload to YouTube
  const response = await youtubeApi.videos.insert({
    // ... use video.mp4Url as source
  });
}
```

---

## 4. Development Workflow

### 4.1 Git Branching Strategy

```
main
├── develop                     # Integration branch
│   ├── feature/core-*          # Studio X features
│   ├── feature/integration-*   # External team features
│   └── feature/shared-*        # Collaborative features
├── staging                     # Pre-production
└── release/*                   # Release branches
```

### 4.2 Branch Naming

| Team | Pattern | Example |
|------|---------|---------|
| Studio X | `feature/core-{name}` | `feature/core-mux-webhooks` |
| External | `feature/integration-{platform}-{name}` | `feature/integration-meta-oauth` |
| Shared | `feature/shared-{name}` | `feature/shared-error-handling` |
| Bugfix | `fix/{team}-{issue}` | `fix/integration-youtube-quota` |

### 4.3 Pull Request Process

1. **Create PR** against `develop`
2. **Required Reviews:**
   - Same team: 1 reviewer
   - Cross-team: 1 from each team
3. **CI Checks:** Lint, test, build
4. **Merge:** Squash and merge

---

## 5. Communication

### 5.1 Meetings

| Meeting | Frequency | Duration | Purpose |
|---------|-----------|----------|---------|
| Daily Standup | Daily | 15 min | Progress & blockers |
| Sprint Planning | Bi-weekly | 1 hour | Sprint goals |
| Technical Sync | Weekly | 30 min | Architecture decisions |
| Demo & Review | Bi-weekly | 1 hour | Sprint review |

### 5.2 Channels

| Channel | Purpose | Response Time |
|---------|---------|---------------|
| `#orbyt-dev` | Technical discussion | 2 hours |
| `#orbyt-urgent` | Critical issues | 30 minutes |
| GitHub Issues | Bugs, features | 24 hours |

---

## 6. Deliverable Handoff

### 6.1 Integration Module Delivery

```
1. PR Created:
   ├── Implementation code
   ├── Unit tests (>80% coverage)
   ├── Integration tests
   ├── OpenAPI documentation
   └── README with examples

2. Demo Session:
   ├── Live demonstration
   ├── Error handling walkthrough
   └── Edge cases

3. Acceptance:
   ├── Code review by Studio X
   ├── Staging environment test
   └── Merge to develop
```

### 6.2 Acceptance Criteria Template

```markdown
## Integration: [Platform Name]

### Authentication
- [ ] OAuth flow complete
- [ ] Token refresh works
- [ ] Disconnect cleans up

### Publishing
- [ ] Image posts work
- [ ] Video posts work (using Mux URLs)
- [ ] Captions/descriptions handled
- [ ] Platform-specific fields work

### Error Handling
- [ ] Rate limits handled gracefully
- [ ] Auth errors trigger re-auth flow
- [ ] Validation errors are clear
- [ ] Retryable errors are marked

### Testing
- [ ] Unit test coverage > 80%
- [ ] Integration tests pass
- [ ] Manual testing complete
```

---

## 7. Environment Setup

### 7.1 Shared Environment Variables

```env
# Database (Studio X provides)
DATABASE_URL=postgresql://...

# Redis (Studio X provides)  
REDIS_URL=redis://...

# Mux (Studio X manages)
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
MUX_WEBHOOK_SECRET=

# Platform APIs (External Team manages)
META_APP_ID=
META_APP_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Shared (via 1Password)
JWT_SECRET=
ENCRYPTION_KEY=
```

### 7.2 Local Development

```bash
# Clone
git clone https://github.com/studiox/orbyt.git
cd orbyt

# Install
pnpm install

# Environment
cp .env.example .env.local

# Database
docker-compose up -d postgres redis

# Migrate
pnpm db:migrate

# Develop
pnpm dev
```

---

## 8. Project Phases

### Phase 1: Foundation (Weeks 1-4)

| Studio X | External Team |
|----------|---------------|
| Backend core setup | Meta OAuth flow |
| Database schema | Facebook publishing |
| Auth system | Instagram publishing |
| Mux integration | Content validation |
| React web shell | Error handling |

### Phase 2: Publishing (Weeks 5-8)

| Studio X | External Team |
|----------|---------------|
| Publishing UI | YouTube OAuth |
| Scheduling system | YouTube publishing |
| Calendar view | Video upload handling |
| Mobile app shell | Integration tests |

### Phase 3: Polish (Weeks 9-12)

| Studio X | External Team |
|----------|---------------|
| Link-in-Bio | Analytics fetching |
| AI content features | Performance optimization |
| Analytics dashboard | Documentation |
| App store prep | Error monitoring |

---

## 9. Quality Standards

### 9.1 Code Standards

| Area | Standard |
|------|----------|
| TypeScript | Strict mode |
| Linting | ESLint + Prettier |
| Testing | Jest, >80% coverage |
| Commits | Conventional Commits |
| Docs | JSDoc for public APIs |

### 9.2 Error Handling

```typescript
// All platform errors extend this
export class PlatformError extends Error {
  constructor(
    public platform: Platform,
    public code: string,
    message: string,
    public retryable: boolean = false,
    public retryAfter?: number
  ) {
    super(message);
  }
}

// Error codes should be documented
export const META_ERROR_CODES = {
  RATE_LIMITED: 'META_RATE_LIMITED',
  INVALID_TOKEN: 'META_INVALID_TOKEN',
  PERMISSION_DENIED: 'META_PERMISSION_DENIED',
  CONTENT_POLICY: 'META_CONTENT_POLICY',
  // ...
} as const;
```

---

## 10. Success Metrics

### 10.1 Collaboration KPIs

| Metric | Target |
|--------|--------|
| PR review time | < 24 hours |
| On-schedule delivery | > 90% |
| Critical bug response | < 4 hours |

### 10.2 Integration Quality

| Metric | Target |
|--------|--------|
| Publishing success rate | > 99% |
| OAuth success rate | > 99.5% |
| Test coverage | > 80% |

---

## Appendix: Contacts & Tools

### Team Contacts

| Role | Name | Timezone |
|------|------|----------|
| Studio X Lead | TBD | CET |
| External Lead | TBD | TBD |

### Tools

| Tool | Purpose | Owner |
|------|---------|-------|
| GitHub | Code | Studio X |
| Slack | Communication | Studio X |
| Figma | Design | Studio X |
| Linear | Project management | Studio X |
| 1Password | Secrets | Studio X |

---

**Document prepared by:** Studio X AS  
**Version:** 2.0 (Focused scope: Meta + YouTube + Mux)
