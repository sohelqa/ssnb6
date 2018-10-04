package com.bddmyntra.framework;

import myntraPages.MyntraHomePage;
import myntraPages.MyntraLoginPage;


public class PageFactory {
	
	private static PageFactory instance = null;
	private MyntraHomePage homePage;
	private MyntraLoginPage loginPage;
	
	private PageFactory() {
	}
	
	public static PageFactory getInstance() {
		if(instance == null) {
			instance = new PageFactory();
		}
		return instance;
	}
	
	public void reset() {
		homePage = null;
		loginPage = null;
	}
	
	public MyntraHomePage homePage() {
		if(homePage == null) {
			homePage = new MyntraHomePage();
		}
		return homePage;
	}
	
	public MyntraLoginPage loginPage() {
		if(loginPage == null) {
			loginPage = new MyntraLoginPage();
		}
		return loginPage;
	}

}
