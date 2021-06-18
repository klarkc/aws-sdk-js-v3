import { __extends } from "tslib";
import { GetApisRequest, GetApisResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetApisCommand,
  serializeAws_restJson1GetApisCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a collection of Api resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApisCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApisCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetApisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApisCommandInput} for command's `input` shape.
 * @see {@link GetApisCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApisCommand = /** @class */ (function (_super) {
  __extends(GetApisCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApisCommand(input) {
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
  GetApisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetApisCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApisResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApisCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApisCommand(input, context);
  };
  GetApisCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApisCommand(output, context);
  };
  return GetApisCommand;
})($Command);
export { GetApisCommand };
//# sourceMappingURL=GetApisCommand.js.map
