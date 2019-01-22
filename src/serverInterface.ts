export interface HttpServer {
	connection(port: number): void;
}