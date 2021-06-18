import { ApiGatewayManagementApiClient } from "./ApiGatewayManagementApiClient";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { PostToConnectionCommandInput, PostToConnectionCommandOutput } from "./commands/PostToConnectionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.</p>
 */
export declare class ApiGatewayManagementApi extends ApiGatewayManagementApiClient {
  /**
   * <p>Delete the connection with the provided id.</p>
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  /**
   * <p>Get information about the connection with the provided id.</p>
   */
  getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
  getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  /**
   * <p>Sends the provided data to the specified connection.</p>
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostToConnectionCommandOutput>;
  postToConnection(
    args: PostToConnectionCommandInput,
    cb: (err: any, data?: PostToConnectionCommandOutput) => void
  ): void;
  postToConnection(
    args: PostToConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostToConnectionCommandOutput) => void
  ): void;
}
