declare module Bootable
{
		interface bootable<T>
		{
			phase(fct: () => any) : T & bootable<T>;
			phase(fct: (fct : (item : any) => void) => any) : T & bootable<T>;
			phase(routes) : T & bootable<T>;

			boot() : void;
			boot(fct : (cb : (err : any) => void) => any) : void;
			boot(fct : (cb : (err : any) => void, thisArgs : any) => any) : void;
		}
		

}

declare module "bootable"
{
	module e {
		export function initializers(path : string) : any;
		export function routes(path : string) : any;
	}
	function e<T>(fct: T): T & Bootable.bootable<T>;
	export = e;

}