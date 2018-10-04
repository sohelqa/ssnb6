$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Myntrafeatures/Myntralogin.feature");
formatter.feature({
  "name": "Myntra login functionality - 1",
  "description": "  This explain how verious login functionality will work",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "1.Valid user with valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a valid user",
  "keyword": "Given "
});
formatter.match({
  "location": "MyntraCommonStep.not_a_valid_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "MyntraCommonStep.user_wiil_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Myntra home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyntraHomePageStep.myntra_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click login link",
  "keyword": "When "
});
formatter.match({
  "location": "MyntraHomePageStep.user_will_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser will display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyntraLoginpageStep.browser_will_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will enter user email as \"ahmedsohel440@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "MyntraLoginpageStep.user_will_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will enter password as \"Sohel@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyntraLoginpageStep.user_wiil_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click login button",
  "keyword": "And "
});
formatter.match({
  "location": "MyntraLoginpageStep.user_will_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page will display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyntraHomePageStep.home_page_will_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "MyntraHomePageStep.login_success_message_will_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});