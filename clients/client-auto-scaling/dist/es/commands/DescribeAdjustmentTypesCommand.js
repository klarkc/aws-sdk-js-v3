import { __extends } from "tslib";
import { DescribeAdjustmentTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeAdjustmentTypesCommand,
  serializeAws_queryDescribeAdjustmentTypesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available adjustment types for step scaling and simple scaling
 *             policies.</p>
 *         <p>The following adjustment types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>ChangeInCapacity</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>ExactCapacity</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>PercentChangeInCapacity</code>
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAdjustmentTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAdjustmentTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAdjustmentTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAdjustmentTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAdjustmentTypesCommand = /** @class */ (function (_super) {
  __extends(DescribeAdjustmentTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAdjustmentTypesCommand(input) {
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
  DescribeAdjustmentTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeAdjustmentTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: DescribeAdjustmentTypesAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAdjustmentTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeAdjustmentTypesCommand(input, context);
  };
  DescribeAdjustmentTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeAdjustmentTypesCommand(output, context);
  };
  return DescribeAdjustmentTypesCommand;
})($Command);
export { DescribeAdjustmentTypesCommand };
//# sourceMappingURL=DescribeAdjustmentTypesCommand.js.map
