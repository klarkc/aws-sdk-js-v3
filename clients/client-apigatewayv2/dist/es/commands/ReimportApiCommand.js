import { __extends } from "tslib";
import { ReimportApiRequest, ReimportApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ReimportApiCommand,
  serializeAws_restJson1ReimportApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Puts an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ReimportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ReimportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new ReimportApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReimportApiCommandInput} for command's `input` shape.
 * @see {@link ReimportApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReimportApiCommand = /** @class */ (function (_super) {
  __extends(ReimportApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ReimportApiCommand(input) {
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
  ReimportApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "ReimportApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ReimportApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReimportApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ReimportApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ReimportApiCommand(input, context);
  };
  ReimportApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ReimportApiCommand(output, context);
  };
  return ReimportApiCommand;
})($Command);
export { ReimportApiCommand };
//# sourceMappingURL=ReimportApiCommand.js.map
