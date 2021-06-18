import { __extends } from "tslib";
import { AutoScalingInstancesType, DescribeAutoScalingInstancesType } from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingInstancesCommand,
  serializeAws_queryDescribeAutoScalingInstancesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the Auto Scaling instances in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAutoScalingInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAutoScalingInstancesCommand = /** @class */ (function (_super) {
  __extends(DescribeAutoScalingInstancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAutoScalingInstancesCommand(input) {
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
  DescribeAutoScalingInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeAutoScalingInstancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeAutoScalingInstancesType.filterSensitiveLog,
      outputFilterSensitiveLog: AutoScalingInstancesType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAutoScalingInstancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeAutoScalingInstancesCommand(input, context);
  };
  DescribeAutoScalingInstancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeAutoScalingInstancesCommand(output, context);
  };
  return DescribeAutoScalingInstancesCommand;
})($Command);
export { DescribeAutoScalingInstancesCommand };
//# sourceMappingURL=DescribeAutoScalingInstancesCommand.js.map
