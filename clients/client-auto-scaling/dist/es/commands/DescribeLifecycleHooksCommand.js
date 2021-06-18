import { __extends } from "tslib";
import { DescribeLifecycleHooksAnswer, DescribeLifecycleHooksType } from "../models/models_0";
import {
  deserializeAws_queryDescribeLifecycleHooksCommand,
  serializeAws_queryDescribeLifecycleHooksCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the lifecycle hooks for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHooksCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHooksCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHooksCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLifecycleHooksCommand = /** @class */ (function (_super) {
  __extends(DescribeLifecycleHooksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeLifecycleHooksCommand(input) {
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
  DescribeLifecycleHooksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeLifecycleHooksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeLifecycleHooksType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLifecycleHooksAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeLifecycleHooksCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeLifecycleHooksCommand(input, context);
  };
  DescribeLifecycleHooksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeLifecycleHooksCommand(output, context);
  };
  return DescribeLifecycleHooksCommand;
})($Command);
export { DescribeLifecycleHooksCommand };
//# sourceMappingURL=DescribeLifecycleHooksCommand.js.map
