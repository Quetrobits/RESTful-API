# Security Policy 

This security policy outlines the security features implemented in version **v1.0.0** of the application.

| Version | Supported          |
| ------- | ------------------ |
| v1.0.0  | :white_check_mark: |

### Security Features in v1.0.0:
1. **XSS Protection**:
   - The application sanitizes user inputs to prevent Cross-Site Scripting (XSS) attacks. This is achieved by cleaning any potentially malicious scripts from user-generated data (e.g., form inputs, query parameters).

2. **HTTP Security Headers with Helmet**:
   - **Content Security Policy (CSP)**: Restricts sources for scripts, styles, images, and other resources to only trusted domains.
   - **XSS Filter**: Mitigates reflected XSS attacks by adding an additional layer of filtering.
   - **Frameguard**: Prevents clickjacking attacks by blocking the application from being embedded in an iframe.
   - **Referrer Policy**: Ensures that the browser sends only limited or no referrer information with requests to prevent leakage of sensitive data.

3. **Token-Based Authentication**:
   - Routes that require authentication are protected by JWT (JSON Web Token) tokens. This ensures that users are authenticated before accessing protected resources.

These features help protect against common web vulnerabilities such as XSS, clickjacking, and unauthorized access, contributing to a secure application environment.
