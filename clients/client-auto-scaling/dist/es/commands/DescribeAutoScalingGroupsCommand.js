import { __extends } from "tslib";
import { AutoScalingGroupNamesType, AutoScalingGroupsType } from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingGroupsCommand,
  serializeAws_queryDescribeAutoScalingGroupsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the Auto Scaling groups in the account and Region.</p>
 *         <p>This operation returns information about instances in Auto Scaling groups. To retrieve
 *             information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAutoScalingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAutoScalingGroupsCommand = /** @class */ (function (_super) {
  __extends(DescribeAutoScalingGroupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAutoScalingGroupsCommand(input) {
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
  DescribeAutoScalingGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeAutoScalingGroupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AutoScalingGroupNamesType.filterSensitiveLog,
      outputFilterSensitiveLog: AutoScalingGroupsType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAutoScalingGroupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeAutoScalingGroupsCommand(input, context);
  };
  DescribeAutoScalingGroupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeAutoScalingGroupsCommand(output, context);
  };
  return DescribeAutoScalingGroupsCommand;
})($Command);
export { DescribeAutoScalingGroupsCommand };
//# sourceMappingURL=DescribeAutoScalingGroupsCommand.js.map
