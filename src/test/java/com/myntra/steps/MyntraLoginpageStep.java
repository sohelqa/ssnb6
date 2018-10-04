package com.myntra.steps;

import com.bddmyntra.framework.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import myntraPages.MyntraLoginPage;

public class MyntraLoginpageStep extends MyntraBaseStep {
	
	MyntraLoginPage loginpage=PageFactory.getInstance().loginPage();
	
	
@Then("Browser will display Login page")
	
	public void browser_will_display_Login_page() 
		{
		loginpage.verifyTitle();
	    }

	@When("^User will enter user email as \"([^\"]*)\"$")
	public void user_will_enter_user_email_as(String email) 
	{
		loginpage.setEmailAddress(email);
		
	}
	
	
	@When("^User will enter password as \"([^\"]*)\"$")
	public void user_wiil_enter_password_as(String password)
	{
		
		loginpage.setPassWord(password);
	}

	@When("User will click login button")
	public void user_will_click_login_button() 
	{
		loginpage.clickLogin();
	}
	
	@Then("Login not success message display")
	public void verifyloginNotSuccess()
	
	{
		
		loginpage.verifyloginNotSuccess();
		
	}
	

}

	

	
//	@Then("Browser will display Login page")
//	
//	public void browser_will_display_Login_page() {
//		
	
//			 try {
//				Thread.sleep(2000);
//			} catch (InterruptedException e) {
//				e.printStackTrace();
//			}
//			 
//				String title1=driver.getTitle();
//				Assert.assertEquals(title1, "Login");
//			}
//	    }
//
//	@When("^User will enter user email as \"([^\"]*)\"$")
//	public void user_will_enter_user_email_as(String email) 
//	{
//		WebElement EmailAddress=driver.findElement(By.name("email"));
//		EmailAddress.sendKeys(email);
//	}
//
//	@When("^User will enter password as \"([^\"]*)\"$")
//	public void user_wiil_enter_password_as(String password) {
//		WebElement Password= driver.findElement(By.name("password"));
//		Password.sendKeys(password);
//	}
//
//	@When("User will click login button")
//	public void user_will_click_login_button() {
//		WebElement SignIN=driver.findElement(By.className("login-login-button"));
//		SignIN.click();
//	}
//	
//	@Then("Login not success message display")
//	public void verifyloginNotSuccess()
//	
//	{
//	WebElement invalidLogin= driver.findElement(By.xpath("//p[@class='notify-icon-text']"));
////	String invalidtext=invalidLogin.getText();
//	Boolean vl= invalidLogin.isDisplayed();
//	//System.out.println(invalidtext);
//	if(vl=true) 
//		{
//		System.out.println("The User name or Password you Enter is incorrect");
//		}
//	
//	String homeURL=driver.getCurrentUrl();
//	System.out.println(homeURL);
//	}
//
//}
