import { __extends } from "tslib";
import { PutScheduledActionRequest, PutScheduledActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutScheduledActionCommand,
  serializeAws_json1_1PutScheduledActionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p>
 *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
 *          dimension. A scheduled action applies to the scalable target identified by those three
 *          attributes. You cannot create a scheduled action until you have registered the resource as
 *          a scalable target.</p>
 *          <p>When start and end times are specified with a recurring schedule using a cron expression
 *          or rates, they form the boundaries for when the recurring action starts and stops.</p>
 *          <p>To update a scheduled action, specify the parameters that you want to change. If you
 *          don't specify start and end times, the old values are deleted.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 *          <note>
 *             <p>If a scalable target is deregistered, the scalable target is no longer available to
 *             run scheduled actions. Any scheduled actions that were specified for the scalable target
 *             are deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, PutScheduledActionCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, PutScheduledActionCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new PutScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutScheduledActionCommandInput} for command's `input` shape.
 * @see {@link PutScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutScheduledActionCommand = /** @class */ (function (_super) {
  __extends(PutScheduledActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutScheduledActionCommand(input) {
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
  PutScheduledActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "PutScheduledActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutScheduledActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutScheduledActionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutScheduledActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutScheduledActionCommand(input, context);
  };
  PutScheduledActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutScheduledActionCommand(output, context);
  };
  return PutScheduledActionCommand;
})($Command);
export { PutScheduledActionCommand };
//# sourceMappingURL=PutScheduledActionCommand.js.map
