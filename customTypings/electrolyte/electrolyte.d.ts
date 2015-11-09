
	interface IoC
	{
		create(name: string): any;
		create<T>(name: string): T;
		
		loader(name: string, object: any): void;
		loader(object: any) : void;
		
		use(name: string, object: any);
		use(object: any) : void;
		
		node_modules() : void;
		node(name: string) : void;
	}

declare module "electrolyte"
{
	var iocContainer : IoC;
	export = iocContainer;
}