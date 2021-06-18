import { __extends } from "tslib";
import { CreateUsagePlanRequest, UsagePlan } from "../models/models_0";
import {
  deserializeAws_restJson1CreateUsagePlanCommand,
  serializeAws_restJson1CreateUsagePlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateUsagePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsagePlanCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUsagePlanCommand = /** @class */ (function (_super) {
  __extends(CreateUsagePlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateUsagePlanCommand(input) {
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
  CreateUsagePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateUsagePlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateUsagePlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlan.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateUsagePlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateUsagePlanCommand(input, context);
  };
  CreateUsagePlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateUsagePlanCommand(output, context);
  };
  return CreateUsagePlanCommand;
})($Command);
export { CreateUsagePlanCommand };
//# sourceMappingURL=CreateUsagePlanCommand.js.map
