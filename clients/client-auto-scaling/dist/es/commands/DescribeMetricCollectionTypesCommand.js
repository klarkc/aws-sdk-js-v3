import { __extends } from "tslib";
import { DescribeMetricCollectionTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeMetricCollectionTypesCommand,
  serializeAws_queryDescribeMetricCollectionTypesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
 *         <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must
 *             explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeMetricCollectionTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeMetricCollectionTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMetricCollectionTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCollectionTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMetricCollectionTypesCommand = /** @class */ (function (_super) {
  __extends(DescribeMetricCollectionTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeMetricCollectionTypesCommand(input) {
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
  DescribeMetricCollectionTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeMetricCollectionTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: DescribeMetricCollectionTypesAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeMetricCollectionTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeMetricCollectionTypesCommand(input, context);
  };
  DescribeMetricCollectionTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeMetricCollectionTypesCommand(output, context);
  };
  return DescribeMetricCollectionTypesCommand;
})($Command);
export { DescribeMetricCollectionTypesCommand };
//# sourceMappingURL=DescribeMetricCollectionTypesCommand.js.map
