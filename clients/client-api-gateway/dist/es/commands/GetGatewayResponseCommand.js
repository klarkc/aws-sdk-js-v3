import { __extends } from "tslib";
import { GatewayResponse, GetGatewayResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetGatewayResponseCommand,
  serializeAws_restJson1GetGatewayResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGatewayResponseCommand = /** @class */ (function (_super) {
  __extends(GetGatewayResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGatewayResponseCommand(input) {
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
  GetGatewayResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetGatewayResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetGatewayResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GatewayResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGatewayResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetGatewayResponseCommand(input, context);
  };
  GetGatewayResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetGatewayResponseCommand(output, context);
  };
  return GetGatewayResponseCommand;
})($Command);
export { GetGatewayResponseCommand };
//# sourceMappingURL=GetGatewayResponseCommand.js.map
