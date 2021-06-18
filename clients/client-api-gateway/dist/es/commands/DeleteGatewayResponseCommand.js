import { __extends } from "tslib";
import { DeleteGatewayResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteGatewayResponseCommand,
  serializeAws_restJson1DeleteGatewayResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGatewayResponseCommand = /** @class */ (function (_super) {
  __extends(DeleteGatewayResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteGatewayResponseCommand(input) {
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
  DeleteGatewayResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteGatewayResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteGatewayResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteGatewayResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteGatewayResponseCommand(input, context);
  };
  DeleteGatewayResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteGatewayResponseCommand(output, context);
  };
  return DeleteGatewayResponseCommand;
})($Command);
export { DeleteGatewayResponseCommand };
//# sourceMappingURL=DeleteGatewayResponseCommand.js.map
