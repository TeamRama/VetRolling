import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiciosTabbed = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <img src="https://www.clinicaveterinariaperales.com/uploads/wyVYlPns/767x0_1170x0/banner.jpg" alt="portada veterinaria prestigio y calidad" />
                <h1 className="fw-bold my-5">NUESTROS SERVICIOS PARA TU MASCOTA</h1>
            </div>
            <Tabs defaultActiveKey="Laser Terapeutico" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="Laser Terapeutico" title="Laser Terapeutico">
                    <div className="d-flex justify-content-center">
                        <img height={500} width={500} className="img-fluid" alt="consulta laser terapeutico de perro" src="https://i.ytimg.com/vi/6tEum2ezLMY/maxresdefault.jpg"></img>
                    </div>
                    <h3 className="my-3 fw-bold text-warning text-center my-5">Consulta de Laser Terapeutico</h3>
                    <p className="lead">El láser terapéutico es una de las técnicas veterinarias más útiles y eficaces en cuanto a la curación y rehabilitación de múltiples dolencias y problemas traumatológicos de nuestra mascota se refiere. Heridas en la piel comunes o postoperatorias, edemas, artritis (patología especialmente frecuente en perros de edad avanzada) y lesiones en las articulaciones y ligamentos son algunas de las dolencias susceptibles de ser tratadas con este método no invasivo y, por tanto, indoloro, seguro,  rápido y que destaca por su fácil aplicación y efectividad.
                        <br></br>
                        Este herramienta veterinaria constituye una de las mejores métodos de tratar el dolor crónico y el agudo, puesto que los fotones de luz emitidos por se dirigen a la zona objeto del tratamiento, reduciendo la inflamación, favoreciendo la circulación local, estimulando el sistema inmunitario  y afectando positivamente a la regeneración celular y cicatrización de nuestra mascota.</p>
                    <h4 className="fw-bold">Tipos de laser</h4>
                    <p>Es posible clasificar los láseres terapéuticos en función de su potencia. Los láseres que se emplean con mayor frecuencia en la práctica veterinaria son los denominados láseres de Clase III, de menor longitud de onda y principalmente usados para el tratamiento de dolencias de carácter superficial, Por otro lado, los láseres de Clase IV ofrecen una mayor potencia, lo que los convierte en la herramienta idónea para tratar patologías o dolencias que requieran una mayor dosis de energía láser, por estar situadas a una mayor profundidad o por tratarse de una dolencia que revista mayor gravedad.<br></br>En resumen el láser terapéutico es una terapia que conlleva numerosos beneficios para nuestra mascota, entre los que destacan:</p>
                    <ul>
                        <li>Alivio del dolor.</li>
                        <li>Reducción de la inflamación.</li>
                        <li>Regeneración de tejidos o cicatrización</li>
                        <li>Eficaz rehabilitación de problemas traumatológico</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <Link className="btn-reservar text-decoration-none my-3" to="/Contacto">Hace click para realizar tu consulta</Link>
                    </div>
                </Tab>
                <Tab eventKey="Electroacupuntura" title="Electroacupuntura">
                    <div className="d-flex justify-content-center">
                        <img height={500} width={500} className="img-fluid" alt="consulta electroacupuntura" src="https://www.vitalvetpoa.com.br/upload/service/cEw2pkHekYlnfNfXQOhmZY00lGMdkl8xlzArtztQ.jpeg"></img>
                    </div>
                    <h3 className="my-3 fw-bold text-warning text-center my-5">Consulta de Electroacupuntura</h3>
                    <p className="lead">La Electroacupuntura es un método muy útil para proporcionar estimulación y resultados más potentes que la acupuntura. Se hace pasar una pequeña corriente eléctrica entre las agujas siendo complementaria en el tratamiento del dolor o de las parálisis siendo sus campos de aplicación bastante amplios.
                        <br></br>
                        Con la Electroacupuntura obtenemos unas mejores ventajas que nos aportaba la acupuntura convencional, conseguimos un efecto más fácil de realizar, más fácil de controlar y de estandarizar que los métodos de manipulación manual. Además, es objetivamente medible y produce menos traumatización de los tejidos que la manipulación manual.
                        <br></br>
                        La Electroacupuntura produce una estimulación eléctrica de los puntos de acupuntura a través de las agujas. Después de que las agujas se insertan y la electricidad pasa a través de pares de agujas para dar una estimulación continua, generalmente durante 20-30 minutos.</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn-reservar text-decoration-none my-3" to="/Contacto">Hace click para realizar tu consulta</Link>
                    </div>
                </Tab>
                <Tab eventKey="Oftalmologia" title="Oftalmologia">
                    <div className="d-flex justify-content-center">
                        <img height={500} width={500} className="img-fluid" alt="consulta oftalmologica de perro" src="https://hvnachomenes.com/wp-content/uploads/2019/08/oftalmologia2.jpg"></img>
                    </div>
                    <h3 className="my-3 fw-bold text-warning text-center my-5">Consulta de Oftalmologia</h3>
                    <p className="lead">La oftalmología como especialidad veterinaria abarca el diagnóstico y tratamiento de las patologías tanto del globo ocular como del sistema lacrimal y párpados, así como de la musculatura ocular de los animales.
                        En Clínica Veterinaria Rolling en Tucuman contamos con un equipo de profesionales especializados en esta área y que disponen de años de experiencia para velar por el bienestar y calidad de vida de tu mascota.
                        <br></br>
                        Disponemos de equipamiento para examinar las distintas estructuras oculares de tu mascota y así poder llegar a un diagnóstico certero y realizar los tratamientos médicos y/o quirúrgicos necesarios para preservar la visión y el buen estado de estos delicados órganos.
                        <br></br>
                        Para determinar si tu mascota padece algún tipo de enfermedad ocular realizamos un examen específico haciendo uso de equipamiento especializado que nos permita detectar la patología de tu animal.</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn-reservar text-decoration-none my-3" to="/Contacto">Hace click para realizar tu consulta</Link>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ServiciosTabbed;