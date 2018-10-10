package myntraPages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.bddmyntra.framework.DriverFactory;

public class MyntraHomePage {
	
	
	
	
	
	@FindBy(xpath="//div[@class='desktop-userIconsContainer']")
	private WebElement Loginlink;
	
	
	
	@FindBy(xpath="//a[contains(text(),'login')]")
	private WebElement SignIn;
	
	
	
	
		public MyntraHomePage() {
			
		
		WebDriver driver= DriverFactory.getInstance().getDriver();
		
		PageFactory.initElements(driver,this);
		
		}
		
		
		
		public void ClickLoginLink() {
			
			
			Loginlink.click();
			SignIn.click();
			
			
			
		}
		
		


		public void verifyLoginSuccess () throws InterruptedException{
		
			
			
			Thread.sleep(5000);
			
			Actions mclick= new Actions(DriverFactory.getInstance().getDriver());
			WebElement loginfind=DriverFactory.getInstance().getDriver().findElement(By.xpath("//div[@data-reactid='512']"));
			mclick.moveToElement(loginfind).build().perform();	
			
			Thread.sleep(5000);
		  
			WebElement verifyValidlogin=DriverFactory.getInstance().getDriver().findElement(By.xpath("//a[@data-reactid='521']"));
			String verifyUserisloggedin=verifyValidlogin.getText();
			System.out.println(verifyUserisloggedin);
			
			Thread.sleep(5000);
					
			Assert.assertEquals(MyntraLoginPage.emailAddress(), verifyUserisloggedin);
		    
		}
		
		public void VerifyTitle() {
			
			 try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
					String title1=DriverFactory.getInstance().getDriver().getTitle();
					Assert.assertEquals("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra", title1);
			
			
		}
		
		
		
}
