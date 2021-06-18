import { __extends } from "tslib";
import { GetConnectionRequest, GetConnectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetConnectionCommand,
  serializeAws_restJson1GetConnectionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about the connection with the provided id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayManagementApiClient, GetConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi"; // ES Modules import
 * // const { ApiGatewayManagementApiClient, GetConnectionCommand } = require("@aws-sdk/client-apigatewaymanagementapi"); // CommonJS import
 * const client = new ApiGatewayManagementApiClient(config);
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayManagementApiClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConnectionCommand = /** @class */ (function (_super) {
  __extends(GetConnectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetConnectionCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  GetConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayManagementApiClient";
    var commandName = "GetConnectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConnectionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetConnectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetConnectionCommand(input, context);
  };
  GetConnectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetConnectionCommand(output, context);
  };
  return GetConnectionCommand;
})($Command);
export { GetConnectionCommand };
//# sourceMappingURL=GetConnectionCommand.js.map
