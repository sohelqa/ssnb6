package com.myntra.runner;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
//monochrome = true,

//tags= {"@Aceptance"},


features = "src/test/resources/Myntrafeatures/Myntralogin.feature/",
//features = "src/test/resources/Myntrafeatures/Myntralogin1.feature",
glue = {"com.myntra.steps"},
strict=true,
//dryRun = true,


plugin={
        "pretty:target/cucumber-test-report/cucumber-pretty.txt",
        "html:target/cucumber-test-report",
        "json:target/cucumber-test-report/cucumber-report.json",
        "junit:target/cucumber-test-report/test-report.xml"
}
)




public class BDDRunner {
	
	
}
