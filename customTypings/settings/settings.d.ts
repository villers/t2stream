declare module Settings
{
	interface Settings
	{
		set(key: string, value : any) : void;
		get(key: string) : any;
		readConfigFile(key: string, pathFile: string) : void;
	}
}