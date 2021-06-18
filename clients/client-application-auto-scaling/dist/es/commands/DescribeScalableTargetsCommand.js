import { __extends } from "tslib";
import { DescribeScalableTargetsRequest, DescribeScalableTargetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalableTargetsCommand,
  serializeAws_json1_1DescribeScalableTargetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the scalable targets in the specified namespace.</p>
 *          <p>You can filter the results using <code>ResourceIds</code> and
 *             <code>ScalableDimension</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalableTargetsCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalableTargetsCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DescribeScalableTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalableTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeScalableTargetsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalableTargetsCommand = /** @class */ (function (_super) {
  __extends(DescribeScalableTargetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeScalableTargetsCommand(input) {
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
  DescribeScalableTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "DescribeScalableTargetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeScalableTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalableTargetsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeScalableTargetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeScalableTargetsCommand(input, context);
  };
  DescribeScalableTargetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeScalableTargetsCommand(output, context);
  };
  return DescribeScalableTargetsCommand;
})($Command);
export { DescribeScalableTargetsCommand };
//# sourceMappingURL=DescribeScalableTargetsCommand.js.map
