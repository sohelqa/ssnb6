package com.myntra.steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import myntraPages.MyntraHomePage;
import myntraPages.PageFactory;

public class MyntraHomePageStep extends MyntraBaseStep {
	
	

	private MyntraHomePage homePage=PageFactory.getInstance().homePage();
	
	
	@Then("Myntra home page should display")
	public void myntra_home_page_should_display() 
	
	
		{
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		homePage.VerifyTitle();
		}

	@When("User will click login link")
	public void user_will_click_login_link() throws InterruptedException 
	
		{
		homePage.ClickLoginLink();
		}
	
	
	@Then("Home page will display")
	public void home_page_will_display() 
		
		{
		homePage.VerifyTitle();
		}
	
	@Then("login success message display")
	public void login_success_message_will_display() throws InterruptedException 
	
	
		{
		homePage.verifyLoginSuccess();
		}
}
