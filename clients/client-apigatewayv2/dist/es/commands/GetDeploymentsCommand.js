import { __extends } from "tslib";
import { GetDeploymentsRequest, GetDeploymentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDeploymentsCommand,
  serializeAws_restJson1GetDeploymentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the Deployments for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetDeploymentsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetDeploymentsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeploymentsCommand = /** @class */ (function (_super) {
  __extends(GetDeploymentsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDeploymentsCommand(input) {
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
  GetDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetDeploymentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDeploymentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeploymentsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDeploymentsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDeploymentsCommand(input, context);
  };
  GetDeploymentsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDeploymentsCommand(output, context);
  };
  return GetDeploymentsCommand;
})($Command);
export { GetDeploymentsCommand };
//# sourceMappingURL=GetDeploymentsCommand.js.map
