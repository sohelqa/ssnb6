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
formatter.scenario({
  "name": "2.InValid user with valid password",
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
  "name": "User will enter user email as \"Invalid_ahmedsohel440@gmail.com\"",
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
  "name": "Login not success message display",
  "keyword": "And "
});
formatter.match({
  "location": "MyntraLoginpageStep.verifyloginNotSuccess()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Not a valid user",
  "keyword": "Given "
});
formatter.step({
  "name": "User will browse to the site",
  "keyword": "When "
});
formatter.step({
  "name": "Myntra home page should display",
  "keyword": "Then "
});
formatter.step({
  "name": "User will click login link",
  "keyword": "When "
});
formatter.step({
  "name": "Browser will display Login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User will enter user email as \"\u003cEmailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User will enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User will click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Home page will display",
  "keyword": "Then "
});
formatter.step({
  "name": "login success message display",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ]
    },
    {
      "cells": [
        "ahmedsohel440@gmail.com",
        "Sohel@123"
      ]
    },
    {
      "cells": [
        "sohel.ccna@gmail.com",
        "Sohel@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.scenario({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User will enter user email as \"sohel.ccna@gmail.com\"",
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