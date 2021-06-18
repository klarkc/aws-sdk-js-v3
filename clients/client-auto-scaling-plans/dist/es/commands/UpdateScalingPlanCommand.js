import { __extends } from "tslib";
import { UpdateScalingPlanRequest, UpdateScalingPlanResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateScalingPlanCommand,
  serializeAws_json1_1UpdateScalingPlanCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified scaling plan.</p>
 *          <p>You cannot update a scaling plan if it is in the process of being created, updated, or
 *          deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, UpdateScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, UpdateScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new UpdateScalingPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScalingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateScalingPlanCommand = /** @class */ (function (_super) {
  __extends(UpdateScalingPlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateScalingPlanCommand(input) {
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
  UpdateScalingPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingPlansClient";
    var commandName = "UpdateScalingPlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateScalingPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateScalingPlanResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateScalingPlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateScalingPlanCommand(input, context);
  };
  UpdateScalingPlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateScalingPlanCommand(output, context);
  };
  return UpdateScalingPlanCommand;
})($Command);
export { UpdateScalingPlanCommand };
//# sourceMappingURL=UpdateScalingPlanCommand.js.map
