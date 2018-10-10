package com.myntra.steps;

import java.util.concurrent.TimeUnit;

import com.bddmyntra.framework.DriverFactory;
import com.bddmyntra.framework.MyntraPropertyReaderService;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import myntraPages.PageFactory;

public class MyntraCommonStep extends MyntraBaseStep {
	
	@Before
	public void setup() {
		
		
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
		}
	
	@After
	public void tearDown() 
	
	{
		
		DriverFactory.getInstance().removeDriver();
		PageFactory.getInstance().reset();
		
		
		
	}
	@Given("Not a valid user")
	public void not_a_valid_user() {
	   driver.manage().deleteAllCookies();
	}

	@When("User will browse to the site")
	public void user_wiil_browse_to_the_site() 
	{
	    driver.navigate().to(MyntraPropertyReaderService.getInstance().getProperty("APP_URL"));
	}

}
