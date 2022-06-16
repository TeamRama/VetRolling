

// Reg expressions
const regExpNombreDueño = /^[A-Za-z\s?]+$/;
const regExpApellidoDueño = /^[A-Za-z\s?]+$/;
const regExpNombreMascota = /^[A-Za-z\s?]+$/;
const regExpVeterinario = /^[A-Za-z\s?]+$/;
const regExpRaza =/^[A-Za-z\s?]+$/;
const regExpHorario = /[0-9]+$/;
const regExpEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExpContraseña =  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const regExpNombreApellido = /^[A-Za-z\s?]+$/;
const regExpFecha = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regExpCelular = /[0-9]+$/;
const regExpPlan =/^[A-Za-z\s?]+$/;
const regExpConsulta =/^[a-zA-Z-0-9_.+-,]+$/;



// Functions to validate
export const validateNombreDueño = (field) => {

  if (
    regExpNombreDueño.test(field)  && field.trim() !== "" ) {
      
    return true;
    
  } else {

    return false;
    
  }
};
export const validateApellidoDueño = (field) => {

  if (
    regExpApellidoDueño.test(field)  && field.trim() !== "" ) {
      
    return true;
    
  } else {

    return false;
    
  }
};

export const validateNombreMascota = (field) => {
  if (
    regExpNombreMascota.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };

  export const validateHorario = (field)=>{
    if (
      regExpHorario.test(field) &&
      field.trim() !== "" &&
  (field === '09:00' ||
   field === '10:00' ||
   field === '11:00' ||
   field === '12:00' ||
   field === '17:00' ||
   field === '18:00' ||
   field === '19:00' ||
   field === '20:00' )
    ){
    return true
    }else if(field === 'seleccione'){
      return false
    }
  };

export const validateVeterinario = (field) => {
  if (
    regExpVeterinario.test(field) &&
    field.trim() !== "" &&
    (field === "Vet A" ||
      field === "Vet B")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateRaza = (field) => {
  if (
    regExpRaza.test(field) &&
    field.trim() !== "" &&
    (field === "perro" ||
      field === "gato" ||
      field === "ave" ||
      field === "reptil" ||
      field === "otro")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (field) => {
  if
   (regExpEmail.test(field) && field.trim() !== "") {
     
    return true;
  } else {
    return false;
  }
};


export const validateContraseña = (field) => {

  if
   (regExpContraseña.test(field) && field.trim() !== "") {

    return true;
  } else {
    return false;
  }
};


export const validateNombreApellido = (field) => {
  if (
    regExpNombreApellido.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};



export const validateFecha = (field) => {
  if (
    regExpFecha.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};



export const validateCelular = (field) => {
  if (
    regExpCelular.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};


export const validatePlan = (field) => {
  if (
    regExpPlan.test(field) &&
    field.trim() !== "" &&
    (field === "cachorro" ||
    field === "maduro" ||
      field === "adulto")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateConsulta = (field) => {
  if( 
    regExpConsulta.test(field) &&
    field.trim() !== "" 
  ){
    return true
  } else {
    return false;
  }
}


