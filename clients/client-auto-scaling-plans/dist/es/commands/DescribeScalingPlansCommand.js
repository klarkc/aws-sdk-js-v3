import { __extends } from "tslib";
import { DescribeScalingPlansRequest, DescribeScalingPlansResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingPlansCommand,
  serializeAws_json1_1DescribeScalingPlansCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your scaling plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DescribeScalingPlansCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DescribeScalingPlansCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new DescribeScalingPlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPlansCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPlansCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingPlansCommand = /** @class */ (function (_super) {
  __extends(DescribeScalingPlansCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeScalingPlansCommand(input) {
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
  DescribeScalingPlansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingPlansClient";
    var commandName = "DescribeScalingPlansCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeScalingPlansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingPlansResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeScalingPlansCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeScalingPlansCommand(input, context);
  };
  DescribeScalingPlansCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeScalingPlansCommand(output, context);
  };
  return DescribeScalingPlansCommand;
})($Command);
export { DescribeScalingPlansCommand };
//# sourceMappingURL=DescribeScalingPlansCommand.js.map
