import { Tabs, Tab } from "react-bootstrap";
import logo from "../../Assets/media/logo-vetplan-basico.png"
import { Link } from "react-router-dom";
import "../../../Styles/GeneralStyles.css"

const PlanesTabbed = () => {
    return (
        <div className="container"> 
            <div className="text-center">
                <h1 className="fw-bold my-5">NUESTROS PLANES PARA VOS Y TU MASCOTA</h1>
                <img className="mb-5" src={logo} alt="logo vet" />
            </div>
            <Tabs defaultActiveKey="Plan Primeros Pasos" id="plan_primeros_pasos" className="mb-3">
                <Tab eventKey="Plan Primeros Pasos" title="Plan Primeros Pasos">
                    <div className="d-flex justify-content-center">
                        <img height={800} width={800} className="img-fluid" alt="mascotas" src="https://s1.1zoom.me/b5050/279/430766-svetik_1600x1200.jpg"></img>
                    </div>
                    <h3 className="my-3 fw-bold text-warning text-center my-5">PLAN PRIMEROS PASOS</h3>
                    <p className="lead"><i>"Servicios para mascotas de 0 a 5 años. Contratando Primeros Pasos para tu mascota desde cachorro te asegurarás que viva más feliz durante más tiempo. No sólo es un ahorro, es una garantía de que tu mascota crecerá sana y se convertirá en un adulto que vivirá muchos años"</i></p>
                    <p>Con <strong>Plan Primeros Pasos</strong>, tú y tu mascota se sentiran siempre clientes “VIP”, porque en él incluimos:</p>
                    <ul>
                        <li><strong>Vacunación antirrábica:</strong> Las vacunaciones necesarias contra la Rabia.</li>
                        <li><strong>Vacunación extra:</strong> Las vacunaciones necesarias para la prevención de las enfermedades víricas y bacterianas más comunes en nuestra geografía incluyendo la Leptospirosis (transmisible a personas), Moquillo canino, Hepatitis vírica canina y Parvovirosis canina o en el caso de los felinos la prevención contra Calicivirus, Rinotraqueitis, Panleucopenia y Leucemia Felina.</li>
                        <li><strong>Desparasitaciones internas:</strong> Se aplicarán trimestralmente en su centro veterinario asociado los tratamientos necesarios para la prevención de los parásitos intestinales más comunes incluyendo entre ellos el de la enfermedad transmisible al hombre de la Equinococosis.</li>
                        <li><strong>Desparasitaciones externas:</strong> Se aplicarán mensualmente en su centro veterinario asociado los tratamientos necesarios para la prevención de pulgas y garrapatas previniendo así también las enfermedades transmitidas por éstas.</li>
                        <li><strong>Revisión anual:</strong> Incluida una revisión veterinaria anual de su mascota junto con un análisis sanguíneo de control de los principales parámetros hematológicos y bioquímicos para la detección temprana de posibles alteraciones en su salud</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                    <Link className="btn-reservar text-decoration-none my-3" to="/Contacto">Hace click para realizar tu consulta</Link>
                    </div>
                    <div>
                        <img className="container my-5" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/purina-pro-plan-puppy.jpg" alt="publicidad" />
                    </div>
                </Tab>
                <Tab eventKey="Plan Madurando" title="Plan Madurando">
                    <div className="d-flex justify-content-center">
                        <img height={800} width={800} className="img-fluid" alt="mascotas" src="https://otvtelevision.com/wp-content/uploads/2021/10/bigstock-chartreux-cat-months-old-a-21323912.jpeg"></img>
                    </div>
                    <h3 className="my-3 fw-bold text-warning text-center my-5">PLAN MADURANDO</h3>
                    <p className="lead"><i>"Servicios para mascotas de 5 a 10 años. Contratando plan madurando tenes cobertura para tu mascota que incluye uno de nuestros servicios especiales gratuito siempre que necesiten usarlo, cuida a tu mascota de la mejor manera"</i></p>
                    <p>Todas las coberturas incluidas en Plan Madurando más 3 días de hospitalización si es necesario.</p>
                    <ul>
                        <li><strong>Radiología simple</strong> ( un sólo posicionamiento )</li>
                        <li><strong>Ecografía abdominal simple</strong></li>
                        <li><strong>Electrocardiograma</strong></li>
                        <li><strong>Exploración oftalmológica simple</strong></li>
                        <li><strong>Exploración ótica simple</strong></li>
                        <li><strong>Hemograma completo estándar</strong></li>
                        <li><strong>Perfil bioquímico</strong> (hasta 7 parámetros bioquímicos comunes )</li>
                        <li><strong>Test inmunológicos comunes</strong> (Leishmaniosis canina, Dirofilariosis canina, Moquillo canino, Parvovirus canino, Coronavirus canino, Erlichiosis canina, Giardiasis, Inmunodeficiencia Felina y Leucemia Felina )</li>
                        <li><strong>Raspado cutáneo para análisis microscópico y cultivo para dermatofitos</strong></li>
                        <li><strong>Urianálisis mediante tiras dignósticas hasta 9 parámetros</strong></li>
                        <li><strong>Citología vaginal</strong></li>
                        <li><strong>Realización de biopsias cutáneas para envío a laboratorio anatomopatológico (no incluidos los costes del laboratorio externo)</strong></li>
                        <li><strong>Aspiraciones simples para análisis microscópico</strong></li>
                    </ul>
                    <div className="d-flex justify-content-center">
                    <Link className="btn-reservar text-decoration-none my-3" to="/Contacto">Hace click para realizar tu consulta</Link>
                    </div>
                    <div>
                        <img className="container my-5" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/Pro-Plan-La-nueva-imagen.png" alt="publicidad" />
                    </div>
                </Tab>
                <Tab eventKey="Plan Adultos" title="Plan Adultos" >
                    <div className="d-flex justify-content-center">
                        <img height={800} width={800} className="img-fluid" alt="mascotas" src="https://www.65ymas.com/uploads/s1/56/03/51/bigstock-dog-and-cat-under-white-blanke-361477333.jpeg"></img>
                    </div>
                    <h3 className="my-3 fw-bold text-warning text-center my-5">PLAN ADULTOS</h3>
                    <p className="lead"><i>"Servicios para mascotas de mas de 10 años. Nuestro plan para mascotas adultas cuenta con diversos beneficios, entre ellos el cuidado y la atencion 24hs del dia para tu mascota con grandes descuentos ante emergencias de salud y un servicio plus para la higiene de tu animal"</i></p>
                    <h4 className="bw-bold">Cirujias medias o con acceso a abdomen:</h4>
                    <ul>
                        <li><strong>Extirpacion de Zepp</strong></li>
                        <li><strong>Cirugia glandulas salivares</strong></li>
                        <li><strong>Reseccion glandula mandibular</strong></li>
                        <li><strong>Resección paladar blando</strong></li>
                        <li><strong>Hernia perineal</strong></li>
                        <li><strong>Hernia diafragmatica</strong></li>
                        <li><strong>Hernia resolucion malla</strong></li>
                    </ul>
                    <h4>Resolucion de fracturas oseas por traumatismos mediante:</h4>
                    <ul>
                        <li>Reducción + inmovilizacion extern</li>
                        <li>Clavos/cerclajes</li>
                        <li>Fijadores externos</li>
                        <li>Placas de osteosíntesis</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                    <Link className="btn-reservar text-decoration-none my-3" to="/Contacto">Hace click para realizar tu consulta</Link>
                    </div>
                    <div>
                        <img className="container my-5" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/BANNER_PROPLAN_PERRO-GATO-ADULTO.jpg" alt="publicidad" />
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default PlanesTabbed;

