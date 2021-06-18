import { __extends } from "tslib";
import { DescribeLifecycleHookTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeLifecycleHookTypesCommand,
  serializeAws_queryDescribeLifecycleHookTypesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available types of lifecycle hooks.</p>
 *         <p>The following hook types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>autoscaling:EC2_INSTANCE_TERMINATING</code>
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHookTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHookTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleHookTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHookTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLifecycleHookTypesCommand = /** @class */ (function (_super) {
  __extends(DescribeLifecycleHookTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeLifecycleHookTypesCommand(input) {
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
  DescribeLifecycleHookTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeLifecycleHookTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: DescribeLifecycleHookTypesAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeLifecycleHookTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeLifecycleHookTypesCommand(input, context);
  };
  DescribeLifecycleHookTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeLifecycleHookTypesCommand(output, context);
  };
  return DescribeLifecycleHookTypesCommand;
})($Command);
export { DescribeLifecycleHookTypesCommand };
//# sourceMappingURL=DescribeLifecycleHookTypesCommand.js.map
