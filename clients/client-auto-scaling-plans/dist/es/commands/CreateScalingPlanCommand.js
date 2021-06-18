import { __extends } from "tslib";
import { CreateScalingPlanRequest, CreateScalingPlanResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateScalingPlanCommand,
  serializeAws_json1_1CreateScalingPlanCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a scaling plan. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, CreateScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, CreateScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new CreateScalingPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScalingPlanCommandInput} for command's `input` shape.
 * @see {@link CreateScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateScalingPlanCommand = /** @class */ (function (_super) {
  __extends(CreateScalingPlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateScalingPlanCommand(input) {
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
  CreateScalingPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingPlansClient";
    var commandName = "CreateScalingPlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateScalingPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateScalingPlanResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateScalingPlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateScalingPlanCommand(input, context);
  };
  CreateScalingPlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateScalingPlanCommand(output, context);
  };
  return CreateScalingPlanCommand;
})($Command);
export { CreateScalingPlanCommand };
//# sourceMappingURL=CreateScalingPlanCommand.js.map
