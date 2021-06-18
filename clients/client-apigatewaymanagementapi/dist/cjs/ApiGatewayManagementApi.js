"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayManagementApi = void 0;
const ApiGatewayManagementApiClient_1 = require("./ApiGatewayManagementApiClient");
const DeleteConnectionCommand_1 = require("./commands/DeleteConnectionCommand");
const GetConnectionCommand_1 = require("./commands/GetConnectionCommand");
const PostToConnectionCommand_1 = require("./commands/PostToConnectionCommand");
/**
 * <p>The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.</p>
 */
class ApiGatewayManagementApi extends ApiGatewayManagementApiClient_1.ApiGatewayManagementApiClient {
  deleteConnection(args, optionsOrCb, cb) {
    const command = new DeleteConnectionCommand_1.DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getConnection(args, optionsOrCb, cb) {
    const command = new GetConnectionCommand_1.GetConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  postToConnection(args, optionsOrCb, cb) {
    const command = new PostToConnectionCommand_1.PostToConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.ApiGatewayManagementApi = ApiGatewayManagementApi;
//# sourceMappingURL=ApiGatewayManagementApi.js.map
