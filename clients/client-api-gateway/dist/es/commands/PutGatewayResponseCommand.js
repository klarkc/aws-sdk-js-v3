import { __extends } from "tslib";
import { GatewayResponse, PutGatewayResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutGatewayResponseCommand,
  serializeAws_restJson1PutGatewayResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link PutGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutGatewayResponseCommand = /** @class */ (function (_super) {
  __extends(PutGatewayResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutGatewayResponseCommand(input) {
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
  PutGatewayResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "PutGatewayResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutGatewayResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GatewayResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutGatewayResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutGatewayResponseCommand(input, context);
  };
  PutGatewayResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutGatewayResponseCommand(output, context);
  };
  return PutGatewayResponseCommand;
})($Command);
export { PutGatewayResponseCommand };
//# sourceMappingURL=PutGatewayResponseCommand.js.map
