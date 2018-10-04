package com.myntra.steps;

import org.openqa.selenium.WebDriver;

import com.bddmyntra.framework.DriverFactory;
import com.bddmyntra.framework.MyntraPropertyReaderService;

public class MyntraBaseStep {
	
	
	
	
	 //protected static WebDriver driver =null;
	
	
	protected WebDriver driver=DriverFactory.getInstance(MyntraPropertyReaderService.getInstance().getProperty("BROWSER")).getDriver();
	 
	//protected WebDriver driver=MyntraDriverFactory.getInstance(MyntraPropertyReaderService.getInstance().getProperty("TEST_BROWSER")).getDriver();

}
 