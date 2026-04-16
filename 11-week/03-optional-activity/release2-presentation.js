const presentationData = {
  admin: {
    label: "Administrador",
    summary: "Muestra control sobre catalogo, usuarios, reportes y alertas.",
    value: "Valor: centraliza decisiones y reduce errores operativos.",
    steps: [
      {
        number: 1,
        title: "Crear nuevo producto",
        src: "./1/1.mp4",
        copy: "El catalogo nace desde una sola plataforma y deja claro como inicia la gestion del producto.",
        value: "Demuestra control desde el primer paso del flujo administrativo."
      },
      {
        number: 2,
        title: "Modificar producto",
        src: "./1/2.mp4",
        copy: "Actualizar un medicamento deja de ser una tarea dispersa y pasa a ser una accion rapida y controlada.",
        value: "La informacion critica del negocio se corrige sin perder orden."
      },
      {
        number: 3,
        title: "Eliminar producto",
        src: "./1/3.mp4",
        copy: "La depuracion del catalogo evita ruido y mantiene visibles solo las referencias que si importan.",
        value: "Menos desorden en pantalla, mas claridad para operar."
      },
      {
        number: 4,
        title: "Crear usuario e ingresar",
        src: "./1/4.mp4",
        copy: "La incorporacion de personal autorizado se ve clara y guiada desde el sistema.",
        value: "El acceso deja de depender de procesos informales."
      },
      {
        number: 5,
        title: "Bloquear usuario",
        src: "./1/5.mp4",
        copy: "Cuando hay riesgo, el sistema permite actuar de inmediato sobre la cuenta correcta.",
        value: "Seguridad visible para el negocio."
      },
      {
        number: 6,
        title: "Modificar usuario y cambiar contrasena",
        src: "./1/6.mp4",
        copy: "La gestion de credenciales se mantiene viva, no abandonada despues de crear la cuenta.",
        value: "Gobierno continuo del acceso."
      },
      {
        number: 7,
        title: "Movimientos por filtros",
        src: "./1/7.mp4",
        copy: "La trazabilidad ya no depende de memoria ni de revisar muchas fuentes distintas.",
        value: "Cada movimiento se vuelve evidencia."
      },
      {
        number: 8,
        title: "Reportes y Excel",
        src: "./1/8.mp4",
        copy: "La operacion puede convertirse en reporte rapido para seguimiento y soporte documental.",
        value: "Informacion lista para analizar y compartir."
      },
      {
        number: 9,
        title: "Alertas",
        src: "./1/9.mp4",
        copy: "El sistema ayuda a anticipar problemas en lugar de reaccionar tarde.",
        value: "Mejor prevencion frente a vencimientos y riesgos."
      }
    ]
  },
  pharma: {
    label: "Farmaceutico",
    summary: "Muestra fluidez operativa en inventario, entradas y salidas.",
    value: "Valor: trabaja con stock actualizado y movimientos claros.",
    steps: [
      {
        number: 10,
        title: "Ver inventario",
        src: "./1/10.mp4",
        copy: "El rol operativo entra directo al estado real del inventario y no a una vista confusa.",
        value: "Visibilidad inmediata para trabajar mejor."
      },
      {
        number: 11,
        title: "Realizar entrada",
        src: "./1/11.mp4",
        copy: "Cuando llegan medicamentos, el sistema registra el cambio y lo integra al control del stock.",
        value: "La reposicion queda reflejada de inmediato."
      },
      {
        number: 12,
        title: "Realizar salida",
        src: "./1/12.mp4",
        copy: "El despacho deja huella y mantiene trazabilidad sobre lo que realmente salio.",
        value: "Menos errores en la operacion diaria."
      }
    ]
  },
  auditor: {
    label: "Auditor",
    summary: "Muestra revision, consistencia y soporte para control interno.",
    value: "Valor: deja evidencia verificable para seguimiento y auditoria.",
    steps: [
      {
        number: 13,
        title: "Ver inventario",
        src: "./1/13.mp4",
        copy: "El rol de auditoria revisa el estado del sistema sin depender del mismo flujo operativo.",
        value: "Control independiente y entendible."
      },
      {
        number: 14,
        title: "Movimientos por filtros",
        src: "./1/14.mp4",
        copy: "La revision historica permite validar responsables, consistencia y contexto de cada accion.",
        value: "Trazabilidad lista para inspeccion."
      },
      {
        number: 15,
        title: "Reportes",
        src: "./1/15.mp4",
        copy: "La evidencia tambien se resume y se exporta, lo que facilita seguimiento y soporte.",
        value: "El control no se queda solo en pantalla."
      }
    ]
  }
};

const roleOrder = ["admin", "pharma", "auditor"];

const roleSwitcher = document.querySelector("#role-switcher");
const stepsContainer = document.querySelector("#demo-steps");
const spotlightVideo = document.querySelector("#spotlight-video");
const spotlightKicker = document.querySelector("#spotlight-kicker");
const spotlightTitle = document.querySelector("#spotlight-title");
const spotlightCopy = document.querySelector("#spotlight-copy");
const spotlightValue = document.querySelector("#spotlight-value");
const videoEmpty = document.querySelector("#video-empty");
const videoEmptyTitle = videoEmpty.querySelector("p");
const videoEmptyBody = videoEmpty.querySelector("span");
const scrollIndicator = document.querySelector("#scroll-indicator");
const revealNodes = document.querySelectorAll(".reveal");

let activeRole = roleOrder[0];
let activeStep = 0;

function firstPlayableIndex(roleKey) {
  const index = presentationData[roleKey].steps.findIndex((step) => step.src);
  return index >= 0 ? index : 0;
}

function buildRoleButtons() {
  roleSwitcher.innerHTML = "";

  roleOrder.forEach((roleKey) => {
    const role = presentationData[roleKey];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "role-button";
    button.innerHTML = `<strong>${role.label}</strong><span>${role.summary}</span>`;
    button.addEventListener("click", () => {
      activeRole = roleKey;
      activeStep = firstPlayableIndex(roleKey);
      render();
    });
    roleSwitcher.appendChild(button);
  });
}

function buildStepButtons(roleKey) {
  const role = presentationData[roleKey];
  stepsContainer.innerHTML = "";

  role.steps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "step-button";

    if (!step.src) {
      button.classList.add("is-missing");
    }

    button.innerHTML = `
      <strong>Video ${step.number}. ${step.title}</strong>
      <span>${step.value}</span>
      ${!step.src ? "<small>Archivo pendiente en la carpeta 1.</small>" : ""}
    `;

    button.addEventListener("click", () => {
      activeStep = index;
      render();
    });

    stepsContainer.appendChild(button);
  });
}

function updateSpotlight(roleKey, stepIndex) {
  const role = presentationData[roleKey];
  const step = role.steps[stepIndex];

  spotlightKicker.textContent = `${role.label} - Video ${step.number}`;
  spotlightTitle.textContent = step.title;
  spotlightCopy.textContent = step.copy;
  spotlightValue.textContent = step.value;

  if (step.src) {
    videoEmptyTitle.textContent = "Cargando video...";
    videoEmptyBody.textContent = "Si el navegador abre el archivo en local y bloquea el video, usa presentacion-local.cmd.";
    videoEmpty.hidden = true;
    spotlightVideo.hidden = false;
    if (spotlightVideo.getAttribute("src") !== step.src) {
      spotlightVideo.pause();
      spotlightVideo.setAttribute("src", step.src);
      spotlightVideo.load();
    }
  } else {
    spotlightVideo.pause();
    spotlightVideo.removeAttribute("src");
    spotlightVideo.load();
    spotlightVideo.hidden = true;
    videoEmptyTitle.textContent = "Video no disponible";
    videoEmptyBody.textContent = "Este clip aun no esta conectado en la carpeta 1.";
    videoEmpty.hidden = false;
  }
}

function syncActiveStates() {
  const roleButtons = roleSwitcher.querySelectorAll(".role-button");
  roleButtons.forEach((button, index) => {
    button.classList.toggle("is-active", roleOrder[index] === activeRole);
  });

  const stepButtons = stepsContainer.querySelectorAll(".step-button");
  stepButtons.forEach((button, index) => {
    button.classList.toggle("is-active", index === activeStep);
  });
}

function render() {
  buildStepButtons(activeRole);
  updateSpotlight(activeRole, activeStep);
  syncActiveStates();
}

function updateProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
  scrollIndicator.style.width = `${progress}%`;
}

function observeReveals() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

spotlightVideo.addEventListener("loadeddata", () => {
  videoEmpty.hidden = true;
  spotlightVideo.hidden = false;
});

spotlightVideo.addEventListener("error", () => {
  spotlightVideo.hidden = true;
  videoEmptyTitle.textContent = "No se pudo cargar el video";
  videoEmptyBody.textContent = "Abre presentacion-local.cmd para servir la carpeta por localhost y reproducir los clips sin bloqueo del navegador.";
  videoEmpty.hidden = false;
});

buildRoleButtons();
activeStep = firstPlayableIndex(activeRole);
render();
observeReveals();
updateProgress();

window.addEventListener("scroll", updateProgress, { passive: true });
