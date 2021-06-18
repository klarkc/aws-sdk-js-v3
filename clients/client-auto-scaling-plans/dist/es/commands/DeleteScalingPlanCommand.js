import { __extends } from "tslib";
import { DeleteScalingPlanRequest, DeleteScalingPlanResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteScalingPlanCommand,
  serializeAws_json1_1DeleteScalingPlanCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified scaling plan.</p>
 *          <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for
 *          all of the scalable resources that are covered by the plan.</p>
 *          <p>If the plan has launched resources or has scaling activities in progress, you must
 *          delete those resources separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DeleteScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DeleteScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new DeleteScalingPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteScalingPlanCommand = /** @class */ (function (_super) {
  __extends(DeleteScalingPlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteScalingPlanCommand(input) {
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
  DeleteScalingPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingPlansClient";
    var commandName = "DeleteScalingPlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteScalingPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteScalingPlanResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteScalingPlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteScalingPlanCommand(input, context);
  };
  DeleteScalingPlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteScalingPlanCommand(output, context);
  };
  return DeleteScalingPlanCommand;
})($Command);
export { DeleteScalingPlanCommand };
//# sourceMappingURL=DeleteScalingPlanCommand.js.map
