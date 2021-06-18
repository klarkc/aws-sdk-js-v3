import { __extends } from "tslib";
import { GetApiMappingRequest, GetApiMappingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetApiMappingCommand,
  serializeAws_restJson1GetApiMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiMappingCommandInput} for command's `input` shape.
 * @see {@link GetApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApiMappingCommand = /** @class */ (function (_super) {
  __extends(GetApiMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApiMappingCommand(input) {
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
  GetApiMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetApiMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApiMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApiMappingResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApiMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApiMappingCommand(input, context);
  };
  GetApiMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApiMappingCommand(output, context);
  };
  return GetApiMappingCommand;
})($Command);
export { GetApiMappingCommand };
//# sourceMappingURL=GetApiMappingCommand.js.map
