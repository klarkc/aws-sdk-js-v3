import { __extends } from "tslib";
import { ProcessesType } from "../models/models_0";
import {
  deserializeAws_queryDescribeScalingProcessTypesCommand,
  serializeAws_queryDescribeScalingProcessTypesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the scaling process types for use with the <a>ResumeProcesses</a>
 *             and <a>SuspendProcesses</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScalingProcessTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScalingProcessTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeScalingProcessTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingProcessTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingProcessTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingProcessTypesCommand = /** @class */ (function (_super) {
  __extends(DescribeScalingProcessTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeScalingProcessTypesCommand(input) {
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
  DescribeScalingProcessTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeScalingProcessTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: ProcessesType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeScalingProcessTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeScalingProcessTypesCommand(input, context);
  };
  DescribeScalingProcessTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeScalingProcessTypesCommand(output, context);
  };
  return DescribeScalingProcessTypesCommand;
})($Command);
export { DescribeScalingProcessTypesCommand };
//# sourceMappingURL=DescribeScalingProcessTypesCommand.js.map
