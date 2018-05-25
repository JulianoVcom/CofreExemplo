
package CofreCucumber;

import cofre.ValidacaoHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 *
 * @author juliano
 */
public class ValidacaoStep {
    
    String arg1;
    String arg2;
    String arg3;
    String arg4;
    
    @Given("^que eu entrei com \"([^\"]*)\"$")
    public void que_eu_entrei_com(String arg) throws Exception {
        arg1 = "123";
        arg2 = "123456";
        arg3 = "123aaaa";
        arg4 = "12f45a";
    }

    @Then("^o resultado deve ser True$")
    public void o_resultado_deve_ser_True() throws Exception {
        assertTrue(ValidacaoHelper.ehNumero(arg1));
        assertTrue(ValidacaoHelper.ehSenhaValida(arg2));
    }

    @Then("^o resultado deve ser False$")
    public void o_resultado_deve_ser_False() throws Exception {
        assertFalse(ValidacaoHelper.ehNumero(arg3));
        assertFalse( ValidacaoHelper.ehSenhaValida(arg4) );
    }
        
}
