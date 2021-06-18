import { __extends } from "tslib";
import { UpdateUsagePlanRequest, UsagePlan } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateUsagePlanCommand,
  serializeAws_restJson1UpdateUsagePlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a usage plan of a given plan Id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateUsagePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUsagePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUsagePlanCommand = /** @class */ (function (_super) {
  __extends(UpdateUsagePlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateUsagePlanCommand(input) {
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
  UpdateUsagePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateUsagePlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateUsagePlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlan.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateUsagePlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateUsagePlanCommand(input, context);
  };
  UpdateUsagePlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateUsagePlanCommand(output, context);
  };
  return UpdateUsagePlanCommand;
})($Command);
export { UpdateUsagePlanCommand };
//# sourceMappingURL=UpdateUsagePlanCommand.js.map
