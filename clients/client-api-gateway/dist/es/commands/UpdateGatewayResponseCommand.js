import { __extends } from "tslib";
import { GatewayResponse, UpdateGatewayResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGatewayResponseCommand,
  serializeAws_restJson1UpdateGatewayResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewayResponseCommand = /** @class */ (function (_super) {
  __extends(UpdateGatewayResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGatewayResponseCommand(input) {
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
  UpdateGatewayResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateGatewayResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGatewayResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GatewayResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGatewayResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateGatewayResponseCommand(input, context);
  };
  UpdateGatewayResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateGatewayResponseCommand(output, context);
  };
  return UpdateGatewayResponseCommand;
})($Command);
export { UpdateGatewayResponseCommand };
//# sourceMappingURL=UpdateGatewayResponseCommand.js.map
