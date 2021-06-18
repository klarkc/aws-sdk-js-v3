import { __extends } from "tslib";
import { Deployments, GetDeploymentsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetDeploymentsCommand,
  serializeAws_restJson1GetDeploymentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a <a>Deployments</a> collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDeploymentsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDeploymentsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
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
    var clientName = "APIGatewayClient";
    var commandName = "GetDeploymentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDeploymentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Deployments.filterSensitiveLog,
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
