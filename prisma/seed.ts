import { prisma } from '../src/prismaClient';

async function main() {
	const chopper = await prisma.project.create({
		data: {
			name: 'Upside Down Helicopter',
			description:
				'This helicopter will revolutionize the sky. It can fly upside down!',
			expenses: {
				create: [
					{
						cost: 1000,
						name: 'Turbo thrusters',
						is_qualified: true,
					},
					{
						cost: 2000,
						name: 'Sharper blades',
						is_qualified: false,
					},
					{
						cost: 500,
						name: 'Advanced cooling AC',
						is_qualified: false,
					},
					{
						cost: 3000,
						name: 'Uses cheetos for fuel',
						is_qualified: true,
					},
				],
			},
		},
	});
	const solar = await prisma.project.create({
		data: {
			name: 'Solar panels for your teeth',
			description:
				'This project will generate energy on the go, all you need to do is smile!',
			expenses: {
				create: [
					{
						cost: 3000,
						name: 'Small chips',
						is_qualified: true,
					},
					{
						cost: 9000,
						name: 'Liquid Resistant',
						is_qualified: true,
					},
					{
						cost: 500,
						name: 'Motion Charging options',
						is_qualified: false,
					},
					{
						cost: 13000,
						name: 'Food Resistance',
						is_qualified: true,
					},
				],
			},
		},
	});
	const rockets = await prisma.project.create({
		data: {
			name: 'Rocket Bicycle',
			description:
				'Say goodbye to ebikes! Say hello to the the rocket bike. Capable of achieving mach speeds!',
			expenses: {
				create: [
					{
						cost: 4000,
						name: 'High quality fuel injections',
						is_qualified: false,
					},
					{
						cost: 21000,
						name: 'Aerodynamic Frames',
						is_qualified: true,
					},
					{
						cost: 1000,
						name: 'Ultra Hydro Braking System',
						is_qualified: false,
					},
					{
						cost: 5000,
						name: 'Cargo Basket that fits beer and chips',
						is_qualified: true,
					},
				],
			},
		},
	});
	console.log(chopper, solar, rockets);
}
main();
