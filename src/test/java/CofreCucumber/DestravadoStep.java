
package CofreCucumber;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author juliano
 */
public class DestravadoStep {
    
    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);
    

    @Given("^que a porta estiver aberta$")
    public void que_a_porta_estiver_aberta() throws Exception {
        when(sensorMock.travada()).thenReturn(Boolean.FALSE);    
        when(sensorMock.fechada()).thenReturn(Boolean.FALSE);
    }
    
    @Given("^entrei com a string \"([^\"]*)\"$")
    public void entrei_com_a_string(String arg1) throws Exception {
        for (int botao = 0; botao <= 9; botao++) {
            cofrePM.pressButton(botao);
        }
            assertEquals("Feche a porta antes de digitar a senha", cofrePM.getDisplay());
            cofrePM.clear();
        
    }

    @Given("^que a porta estiver fechada$")
    public void que_a_porta_estiver_fechada() throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
      
    }

    @Given("^entrei com \"([^\"]*)\"$")
    public void entrei_com(String arg1) throws Exception {
        cofrePM.pressButton(0);
    }

    @Then("^o valor \"([^\"]*)\" deve aparecer no display$")
    public void o_valor_deve_aparecer_no_display(String arg2) throws Exception {
          assertEquals("0", cofrePM.getDisplay());
    }

    @Given("^entrei com a senha \"([^\"]*)\"$")
    public void entrei_com_a_senha(String arg1) throws Exception {
        cofrePM.pressButton(1);
        cofrePM.pressButton(9);
        cofrePM.pressButton(3);
        cofrePM.pressButton(5);
        cofrePM.pressButton(6);
        cofrePM.pressButton(6);
        cofrePM.setDisplay("Senha salva. Cofre trancado");
        
    }
    
    @Then("^a mensagem \"([^\"]*)\" deve aparecer no display$")
    public void a_mensagem_deve_aparecer_no_display(String arg3) throws Exception {
        assertEquals("Senha salva. Cofre trancado", cofrePM.getDisplay());
    }

    
}
