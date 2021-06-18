import { __extends } from "tslib";
import { ScalingProcessQuery } from "../models/models_0";
import {
  deserializeAws_queryResumeProcessesCommand,
  serializeAws_queryResumeProcessesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resumes the specified suspended auto scaling processes, or all suspended process, for
 *             the specified Auto Scaling group.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
 *                 resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ResumeProcessesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ResumeProcessesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new ResumeProcessesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeProcessesCommandInput} for command's `input` shape.
 * @see {@link ResumeProcessesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeProcessesCommand = /** @class */ (function (_super) {
  __extends(ResumeProcessesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ResumeProcessesCommand(input) {
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
  ResumeProcessesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "ResumeProcessesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ScalingProcessQuery.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ResumeProcessesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryResumeProcessesCommand(input, context);
  };
  ResumeProcessesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryResumeProcessesCommand(output, context);
  };
  return ResumeProcessesCommand;
})($Command);
export { ResumeProcessesCommand };
//# sourceMappingURL=ResumeProcessesCommand.js.map
