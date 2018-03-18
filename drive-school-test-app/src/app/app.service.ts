import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

	getQuestions(): any {
		const tests = [
			{
				id: '000001',
				title: 'En los accidentes de motocicleta, ¿cuáles son las infracciones más frecuentes cometidas por sus conductiores?',
				answers: [
					{
						title: 'No respetar la prioridad de paso',
						value: false,
						selected: false
					},
					{
						title: 'Estacionar en las aceras y ocupar el sentido contrario',
						value: false,
						selected: false
					},
					{
						title: 'Invadir el sentido contrario y conducir de forma distraída',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000002',
				title: '¿Qué indica esta señal?',
				answers: [
					{
						title: 'Parada de autobuses',
						value: true,
						selected: false
					},
					{
						title: 'Carril reservado a autobuses',
						value: false,
						selected: false
					},
					{
						title: 'Vía con circulación reservada a autobuses',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000003',
				title: 'Esta señalización recomienda circular a 70 kilómetros por hora...',
				answers: [
					{
						title: 'sólo cuando está lloviendo.',
						value: true,
						selected: false
					},
					{
						title: 'sólo cuando las condiciones meteorológicas y ambientales sean favorables.',
						value: false,
						selected: false
					},
					{
						title: 'en cualquier caso.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000004',
				title: 'Si el camión está parado, ¿puede rebasarle?',
				answers: [
					{
						title: 'Sí, cuando sele pueda rebasar sin peligro.',
						value: true,
						selected: false
					},
					{
						title: 'No, porque tiene que invadir el sentido contrario.',
						value: false,
						selected: false
					},
					{
						title: 'No, porque la marca vial lo prohíbe.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000005',
				title: '¿Qué idica esta señal?',
				answers: [
					{
						title: 'Calzada obligatoria para motocicletas sin sidecar.',
						value: true,
						selected: false
					},
					{
						title: 'Via obligatoria para cualquier motocicleta y prohibición de circular a los demás usuarios.',
						value: false,
						selected: false
					},
					{
						title: 'Vía reservada a veículos de dos ruedas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000006',
				title: 'Esta señal indica la...',
				answers: [
					{
						title: 'proximidad de un paso a nivel, puente móvil o muelle.',
						value: false,
						selected: false
					},
					{
						title: 'cercanía de un paso a nivel, puente móvil o muelle.',
						value: false,
						selected: false
					},
					{
						title: 'aproximación a un paso a nivel, puente móvil o muelle.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000007',
				title: 'Está prohibido adelantar en...',
				answers: [
					{
						title: 'las intersecciones con vías para ciclistas.',
						value: true,
						selected: false
					},
					{
						title: 'todas las intersecciones, aunque la señalización lo permita.',
						value: false,
						selected: false
					},
					{
						title: 'las glorietas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000008',
				title: 'El conductor de una motocicleta, que lleva una persona en el asiento trasero...',
				answers: [
					{
						title: 'debe utilizar el casco protector y será responsable de que lo utilice el acompañante, pero sólo en vías interurbanas.',
						value: false,
						selected: false
					},
					{
						title: 'debe utilizar el casco protector y será responsable de que lo utilice el acompañante.',
						value: true,
						selected: false
					},
					{
						title: 'debe utilizar el casco protector y aconsejar al acompañante que lo utilice.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000009',
				title: 'El vehículo derivado de turismo etá destinado...',
				answers: [
					{
						title: 'a servicios o a transporte exclusivo de mercancías.',
						value: true,
						selected: false
					},
					{
						title: 'a transporte de personas.',
						value: false,
						selected: false
					},
					{
						title: 'a transporte, simultáneo o no, de personas y mercancías.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000010',
				title: 'Si un turismo queda inmovilizado en una autopista por una avería, ¿puede ser remolcado por otro turismo?',
				answers: [
					{
						title: 'Sí, hasta llegar a la primera área de descanso.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, excepcionalmente, hasta el lugar más próximo donde pueda quedar inmovilizado sin entorpecer la circulación.',
						value: false,
						selected: false
					},
					{
						title: 'No.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000011',
				title: '¿Qué indica esta señal?',
				answers: [
					{
						title: 'Paso a nivel provisto de barreras o semibarreras.',
						value: true,
						selected: false
					},
					{
						title: 'Cruce de tranvía.',
						value: false,
						selected: false
					},
					{
						title: 'Paso a nivel sin barreras.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000012',
				title: '¿Es obligatorio llevar iluminada la placa posterior de la matrícula durante la noche?',
				answers: [
					{
						title: 'No.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, pero sólamente en vías interurbanas.',
						value: false,
						selected: false
					},
					{
						title: 'Sí.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000013',
				title: 'La señal indica la existencia de peligro por...',
				answers: [
					{
						title: 'estrechamiento de calzada.',
						value: false,
						selected: false
					},
					{
						title: 'la proximidad de una zona donde la circulación se realiza en los dos sentidos.',
						value: true,
						selected: false
					},
					{
						title: 'circulación en el mismo sentido.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000014',
				title: 'Las personas provistas de un certificado médico, ¿están exentas de utilizar el casco?',
				answers: [
					{
						title: 'Sí, en todas las vías.',
						value: true,
						selected: false
					},
					{
						title: 'Únicamente en vías urbanas y travesías.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, en vías de poblado, pero no en vías interurbanas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000015',
				title: 'Esta señal...',
				answers: [
					{
						title: 'indica que no se puede estacionar ni parar en el lado de la calzada donde se encuentra la señal.',
						value: false,
						selected: false
					},
					{
						title: 'indica que no se puede estacionar en el lado de la calzada donde se encuentra la señal.',
						value: false,
						selected: false
					},
					{
						title: 'indica que el estacionamiente tiene duración limitada y se debe indicar la hora de inicio del estacionamiento.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000016',
				title: 'Un cuadriciclo ligero, ¿a qué velocidad máxima puede circular fuera de poblado?',
				answers: [
					{
						title: 'A 50 km/h.',
						value: false,
						selected: false
					},
					{
						title: 'A 45 km/h.',
						value: false,
						selected: false
					},
					{
						title: 'A 70 km/h.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000017',
				title: 'Nada más producrise un accidente, antes de atender a las víctimas hay que...',
				answers: [
					{
						title: 'avisar a la policía.',
						value: false,
						selected: false
					},
					{
						title: 'proteger y señalizar lla zona del accidente.',
						value: true,
						selected: false
					},
					{
						title: 'organizar a los servicios de urgencia.',
						value: false,
						selected: false
					}
				]
			}
		];
		return tests;
	}

}
