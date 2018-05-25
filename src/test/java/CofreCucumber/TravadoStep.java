
package CofreCucumber;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author juliano
 */
public class TravadoStep {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM = new CofrePM(sensorMock, memoriaMock);

    @Given("^que eu inicializei o cofre$")
    public void que_eu_inicializei_o_cofre() throws Exception {
        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
        when(sensorMock.travada()).thenReturn(Boolean.TRUE);

        when(memoriaMock.getSenha()).thenReturn("123456");

    }

    @Given("^entrei com argumentoA (\\d+)$")
    public void entrei_com_argumentoA(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }
    
    @Given("^entrei com argumentoB (\\d+)$")
    public void entrei_com_argumentoB(int arg2) throws Exception {
        cofrePM.pressButton(arg2);
    }

    @Given("^entrei com argumentoC (\\d+)$")
    public void entrei_com_argumentoC(int arg3) throws Exception {
        cofrePM.pressButton(arg3);
    }

    @Given("^entrei com argumentoD (\\d+)$")
    public void entrei_com_argumentoD(int arg4) throws Exception {
        cofrePM.pressButton(arg4);
    }

    @Given("^entrei com argumentoE (\\d+)$")
    public void entrei_com_argumentoE(int arg5) throws Exception {
        cofrePM.pressButton(arg5);
    }

    @Given("^entrei com argumentoF (\\d+)$")
    public void entrei_com_argumentoF(int arg6) throws Exception {
        cofrePM.pressButton(arg6);
    }

    @When("^eu pressionei OK$")
    public void eu_pressionei_OK() throws Exception {
        cofrePM.ok();
    }

    @Then("^Cofre é destravado$")
    public void cofre_é_destravado() throws Exception {
        assertEquals("senha correta. Cofre aberto", cofrePM.getDisplay());
        verify(sensorMock, times(2)).destravar(); 
   }
    
    @Then("^a mensagem \"([^\"]*)\" deve aparecer$")
    public void a_mensagem_deve_aparecer(String msg) throws Exception {
        assertEquals(msg, cofrePM.getDisplay());
    }

}
