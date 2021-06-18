import { __extends } from "tslib";
import { GetRoutesRequest, GetRoutesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRoutesCommand,
  serializeAws_restJson1GetRoutesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the Routes for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRoutesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRoutesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoutesCommandInput} for command's `input` shape.
 * @see {@link GetRoutesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRoutesCommand = /** @class */ (function (_super) {
  __extends(GetRoutesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRoutesCommand(input) {
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
  GetRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetRoutesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRoutesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRoutesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRoutesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRoutesCommand(input, context);
  };
  GetRoutesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRoutesCommand(output, context);
  };
  return GetRoutesCommand;
})($Command);
export { GetRoutesCommand };
//# sourceMappingURL=GetRoutesCommand.js.map
