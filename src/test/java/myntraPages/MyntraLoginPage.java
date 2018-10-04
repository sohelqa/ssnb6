package myntraPages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.bddmyntra.framework.DriverFactory;




public class MyntraLoginPage {
	
	@FindBy(name="email")
	private WebElement emailTextbox;
	
	@FindBy(how=How.NAME,using="password")
	private WebElement passwordTextbox;
	
	@FindBy(className="login-login-button")
	private WebElement LoginButton;
	
	
	
	
	public MyntraLoginPage() {
	
	WebDriver driver= DriverFactory.getInstance().getDriver();
	PageFactory.initElements(driver, this);
	
}
	
	
	
	
	public void setEmailAddress(String emailaddress) {
		
		emailTextbox.clear();
		emailTextbox.sendKeys(emailaddress);
		
		
	}
	
	
	public void setPassWord(String password) {
		
		
		passwordTextbox.clear();
		passwordTextbox.sendKeys(password);
		
		
	}
	
	public void clickLogin() {
		
		LoginButton.click();
		
		}
	
	
	public void login(String emailaddress, String password ) {
		
		
		setEmailAddress(emailaddress);
		setPassWord(password);
		clickLogin();
		
	
			
		}
	
	public void verifyTitle() {
		
		{
			 try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
				String title1=DriverFactory.getInstance().getDriver().getTitle();
				Assert.assertEquals(title1, "Login");
			}
	    }
		
		
		
		
		
	
	
	

		
		public void verifyloginNotSuccess()
		{
			WebElement invalidLogin=DriverFactory.getInstance().getDriver().findElement(By.xpath("//p[@class='notify-icon-text']"));
//			String invalidtext=invalidLogin.getText();
			Boolean vl= invalidLogin.isDisplayed();
			//System.out.println(invalidtext);
			if(vl=true) 
				{
				System.out.println("The User name or Password you Enter is incorrect");
				}
			
			String homeURL=DriverFactory.getInstance().getDriver().getCurrentUrl();
			System.out.println(homeURL);
		
		}
		
}


	
	
		
		
	
	


	

