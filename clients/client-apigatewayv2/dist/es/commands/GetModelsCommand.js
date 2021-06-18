import { __extends } from "tslib";
import { GetModelsRequest, GetModelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetModelsCommand,
  serializeAws_restJson1GetModelsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the Models for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetModelsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetModelsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelsCommandInput} for command's `input` shape.
 * @see {@link GetModelsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetModelsCommand = /** @class */ (function (_super) {
  __extends(GetModelsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetModelsCommand(input) {
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
  GetModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetModelsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetModelsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetModelsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetModelsCommand(input, context);
  };
  GetModelsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetModelsCommand(output, context);
  };
  return GetModelsCommand;
})($Command);
export { GetModelsCommand };
//# sourceMappingURL=GetModelsCommand.js.map
