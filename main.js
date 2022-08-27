class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="top">
        <div class="toptxt">
            <div class="first">Firstbase Live: All about taxes ·</div>
            <div class="second"><a href="">Register ></a></div>
        </div>
    </div>
    <div class="navbar">
        <div class="logo"><a href="">
        <img
        src="https://assets.website-files.com/609486d2fafa37698a57db5b/609bf4ae6380ac34e545f653_firstbase-logo.svg"
        alt="">
        </a>
        </div>
        <div class="navbtns">
            <div class="navbtn">
                <a href="product.html">Product</a> 
            </div>
            <div class="navbtn">Company</div>
            <div class="navbtn">Pricing</div>
            <div class="navbtn">Rewards</div>
            <div class="navbtn">Partners</div>
            <div class="navbtn">Resources</div>
        </div>
        <div class="startBusiness">
            <div class="signin">Sign in</div>
            <div class="startbtncover">
                <div class="startbtn">Start my business</div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-header', myHeader);

class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer id="footer" class="footer-2 wf-section">
        <div class="footer-container w-container">
            <div class="footer-flex-container-2"><a href="#" class="footer-logo-link-2"><img
                        src="https://assets.website-files.com/609486d2fafa37698a57db5b/609bf4ae6380ac34e545f653_firstbase-logo.svg"
                        width="92" alt="Firstbase" class="image-108"></a>
                <div class="div-block-368">
                    <div class="div-block-369">
                        <h2 class="footer-heading-2">Products</h2>
                        <ul role="list" class="list-5 w-list-unstyled">
                            <li class="list-item-3"><a href="/start" class="footer-link">Firstbase Start™</a></li>
                            <li class="list-item-3"><a href="/loop" class="footer-link">Firstbase Loop™</a></li>
                            <li class="list-item-3"><a href="/mailroom" class="footer-link">Firstbase Mailroom™</a>
                            </li>
                            <li class="list-item-3"><a href="/agent" class="footer-link">Firstbase Agent™</a></li>
                            <li class="list-item-3"><a href="/api" class="footer-link">Incorporation API</a></li>
                            <li class="list-item-3"><a href="/pricing" class="footer-link">Pricing</a></li>
                            <li class="list-item-3"><a href="/rewards" class="footer-link">Rewards</a></li>
                        </ul>
                    </div>
                    <div class="div-block-369">
                        <h2 class="footer-heading-2">Company</h2>
                        <ul role="list" class="list-5 w-list-unstyled">
                            <li class="list-item-3"><a href="/about" class="footer-link">About Us</a></li>
                            <li class="list-item-3"><a href="/careers" class="footer-link">Careers</a></li>
                        </ul>
                    </div>
                    <div class="div-block-369">
                        <h2 class="footer-heading-2">Resources</h2>
                        <ul role="list" class="list-5 w-list-unstyled">
                            <li class="list-item-3"><a href="/blog" class="footer-link">Blog</a></li>
                            <li class="list-item-3"><a href="/guide" class="footer-link">Founder's Guide</a></li>
                            <li class="list-item-3"><a href="/business-name-check" class="footer-link">Free Business
                                    Name Check</a></li>
                            <li class="list-item-3"><a href="/business-name-check-partners" class="footer-link">Name
                                    Check Widget</a></li>
                            <li class="list-item-3"><a
                                    href="https://form.typeform.com/to/Tr7SUD3Y?typeform-source=firstbase-io.webflow.io"
                                    target="_blank" class="footer-link">LLC vs. C-Corp</a></li>
                        </ul>
                    </div>
                    <div class="div-block-369">
                        <h2 class="footer-heading-2">Support</h2>
                        <ul role="list" class="list-5 w-list-unstyled">
                            <li class="list-item-3"><a href="https://help.firstbase.io/" target="_blank"
                                    class="footer-link">Help Center</a></li>
                            <li class="list-item-3"><a href="https://help.firstbase.io/hc/en-us/requests/new"
                                    target="_blank" class="footer-link">Contact Us</a></li>
                            <li class="list-item-3 no"><a href="https://www.firstbase.io/search"
                                    class="footer-link">Search</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="div-block-367"></div>
            <div class="div-block-246">
                <div class="div-block-247">
                    <div class="heading-56">Subscribe to receive our latest updates, features, founder guides, and
                        success stories right to your inbox 🚀</div>
                </div>
                <div class="form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form"
                        aria-label="Email Form" data-hs-cf-bound="true"><input type="email"
                            class="text-field w-input" maxlength="256" name="email-2" data-name="Email 2"
                            placeholder="Enter your email" id="email-2" required=""><input type="submit"
                            value="Submit" data-wait="Please wait..." class="submit-button w-button"></form>
                    <div class="success-message w-form-done" tabindex="-1" role="region"
                        aria-label="Email Form success">
                        <div class="text-block-51">Thank you! We'll send you the latest news right to your inbox.
                        </div>
                    </div>
                    <div class="error-message w-form-fail" tabindex="-1" role="region"
                        aria-label="Email Form failure">
                        <div class="text-block-51">Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
            <div class="div-block-367"></div>
            <div class="div-block-405">
                <div class="text-block-98">© 2022 Firstbase.io, Inc. All rights reserved. &nbsp;· &nbsp;<a
                        href="/terms" class="link-3">Terms of Use</a> &nbsp;· &nbsp;<a href="/privacy-policy"
                        class="link-3">Privacy Policy</a></div>
                <div class="text-block-98"><a href="https://twitter.com/tryfirstbase" target="_blank"
                        class="link-3">Twitter</a> &nbsp;· &nbsp;<a
                        href="https://www.linkedin.com/company/firstbase-io" target="_blank"
                        class="link-3">LinkedIn</a> · &nbsp;<a href="https://www.instagram.com/firstbase.io/"
                        target="_blank" class="link-3">Instagram</a> · &nbsp;<a
                        href="https://www.youtube.com/c/Firstbase" target="_blank" class="link-3">YouTube</a></div>
            </div>
        </div>
    </footer>


    <button class="feedback">
       <div class="feed"> Feedback</div>
    </button>
        `
    }
}

customElements.define('my-footer', myFooter);




class getStarted extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="section us cta wf-section">
            <div class="section-container-lg w-container">
                <div class="call-to-action">
                    <div class="div-block-377">
                        <h2 class="heading-86">Get started with Firstbase</h2>
                        <p class="paragraph-25">Start, grow, and manage your business. We're with you each step of the
                            way. </p>
                        <div class="cta-btn-container">
                            <div class="gradient-btn">
                                <div class="gradient--btn"><a href="https://app.firstbase.io/start"
                                        class="gradient---btn w-button">Start my business</a></div>
                            </div><a href="https://app.firstbase.io/auth/login" class="secondary-btn w-button">Already
                                incorporated?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('get-started', getStarted);