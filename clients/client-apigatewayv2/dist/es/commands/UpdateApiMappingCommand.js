import { __extends } from "tslib";
import { UpdateApiMappingRequest, UpdateApiMappingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateApiMappingCommand,
  serializeAws_restJson1UpdateApiMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApiMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApiMappingCommand = /** @class */ (function (_super) {
  __extends(UpdateApiMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateApiMappingCommand(input) {
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
  UpdateApiMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "UpdateApiMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateApiMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApiMappingResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateApiMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateApiMappingCommand(input, context);
  };
  UpdateApiMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateApiMappingCommand(output, context);
  };
  return UpdateApiMappingCommand;
})($Command);
export { UpdateApiMappingCommand };
//# sourceMappingURL=UpdateApiMappingCommand.js.map
