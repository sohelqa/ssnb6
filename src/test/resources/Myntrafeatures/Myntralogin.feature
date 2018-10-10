Feature: Myntra login functionality - 1
  This explain how verious login functionality will work

  
  	Scenario: 1.Valid user with valid password
	  Given Not a valid user
	  When User will browse to the site
	  Then Myntra home page should display
	  When User will click login link
	  Then Browser will display Login page
	  When User will enter user email as "ahmedsohel440@gmail.com"
	  And User will enter password as "Sohel@123"
	  And User will click login button
	  Then Home page will display
	  And login success message display
	  
	  

	Scenario: 2.InValid user with valid password
	  Given Not a valid user 
	  When User will browse to the site
	  Then Myntra home page should display
	  When User will click login link
	  Then Browser will display Login page
	  When User will enter user email as "Invalid_ahmedsohel440@gmail.com"
	  And User will enter password as "Sohel@123"
	  And User will click login button
	  Then Browser will display Login page
	  And Login not success message display
	  
	 Scenario Outline: 3.Valid user with valid password Data Driven
	  Given Not a valid user
	  When User will browse to the site
	  Then Myntra home page should display
	  When User will click login link
	  Then Browser will display Login page
	  When User will enter user email as "<EmailAddress>"
	  And User will enter password as "<Password>"
	  And User will click login button
	  Then Home page will display
	  And login success message display
	 Examples:
     |EmailAddress        |Password    |
      |ahmedsohel440@gmail.com|Sohel@123 |
      |sohel.ccna@gmail.com|Sohel@123|
    