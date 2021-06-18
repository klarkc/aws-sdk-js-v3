import { __extends } from "tslib";
import { ApiGatewayManagementApiClient } from "./ApiGatewayManagementApiClient";
import { DeleteConnectionCommand } from "./commands/DeleteConnectionCommand";
import { GetConnectionCommand } from "./commands/GetConnectionCommand";
import { PostToConnectionCommand } from "./commands/PostToConnectionCommand";
/**
 * <p>The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.</p>
 */
var ApiGatewayManagementApi = /** @class */ (function (_super) {
  __extends(ApiGatewayManagementApi, _super);
  function ApiGatewayManagementApi() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ApiGatewayManagementApi.prototype.deleteConnection = function (args, optionsOrCb, cb) {
    var command = new DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayManagementApi.prototype.getConnection = function (args, optionsOrCb, cb) {
    var command = new GetConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayManagementApi.prototype.postToConnection = function (args, optionsOrCb, cb) {
    var command = new PostToConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return ApiGatewayManagementApi;
})(ApiGatewayManagementApiClient);
export { ApiGatewayManagementApi };
//# sourceMappingURL=ApiGatewayManagementApi.js.map
