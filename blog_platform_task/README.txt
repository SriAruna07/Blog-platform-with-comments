========================================================================
FULL-STACK MULTI-PAGE BLOG PLATFORM (JAVA SPRING BOOT + VANILLA JS ENGINE)
========================================================================

APPLICATION HIGHLIGHTS:
- Complete production-grade multi-page routing layout simulation.
- Contains robust view navigation blocks for all key modules:
  * User Identity Verification & Authorization Dashboard
  * Interactive Multi-Author Content Management Center
  * Fully Layered Dynamic Feed and Nested Engagement Module
- Engineered in strict alignment with task model requirements.

PROJECT DIRECTORY TOPOLOGY:
.
├── backend-spring-engine/
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── thiranex/
│                       └── blogplatform/
│                           ├── BlogPlatformApplication.java
│                           ├── controller/
│                           │   ├── AuthController.java
│                           │   ├── PostController.java
│                           │   └── CommentController.java
│                           ├── model/
│                           │   ├── User.java
│                           │   ├── Post.java
│                           │   └── Comment.java
│                           └── payload/
│                               ├── LoginRequest.java
│                               └── PostRequest.java
└── frontend-multi-page/
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── auth.js
    │   ├── dashboard.js
    │   ├── post-detail.js
    │   └── create-post.js
    ├── index.html         (Landing / Login View)
    ├── register.html      (User Registration View)
    ├── dashboard.html     (Main Feed / Management Grid)
    ├── post.html          (Detailed Blog Analytics & Interaction)
    └── create.html        (Composition Studio)

OPERATIONAL RUNTIME STEPS:
1. REST API Setup: Import backend-spring-engine inside your favorite IDE (IntelliJ IDEA / Eclipse). Ensure dependencies resolve via Maven and boot the Spring runtime.
2. Interface Deployment: Open frontend-multi-page/index.html inside any modern desktop web browser window to walk through the fully multi-paged visual journey.
