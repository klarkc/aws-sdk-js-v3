import { __extends } from "tslib";
import { GetUsagePlanRequest, UsagePlan } from "../models/models_0";
import {
  deserializeAws_restJson1GetUsagePlanCommand,
  serializeAws_restJson1GetUsagePlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a usage plan of a given plan identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlanCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsagePlanCommand = /** @class */ (function (_super) {
  __extends(GetUsagePlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetUsagePlanCommand(input) {
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
  GetUsagePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetUsagePlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetUsagePlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlan.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetUsagePlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetUsagePlanCommand(input, context);
  };
  GetUsagePlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetUsagePlanCommand(output, context);
  };
  return GetUsagePlanCommand;
})($Command);
export { GetUsagePlanCommand };
//# sourceMappingURL=GetUsagePlanCommand.js.map
