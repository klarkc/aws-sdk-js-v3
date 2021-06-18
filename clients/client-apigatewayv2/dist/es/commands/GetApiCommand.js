import { __extends } from "tslib";
import { GetApiRequest, GetApiResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApiCommand, serializeAws_restJson1GetApiCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiCommandInput} for command's `input` shape.
 * @see {@link GetApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApiCommand = /** @class */ (function (_super) {
  __extends(GetApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApiCommand(input) {
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
  GetApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApiCommand(input, context);
  };
  GetApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApiCommand(output, context);
  };
  return GetApiCommand;
})($Command);
export { GetApiCommand };
//# sourceMappingURL=GetApiCommand.js.map
