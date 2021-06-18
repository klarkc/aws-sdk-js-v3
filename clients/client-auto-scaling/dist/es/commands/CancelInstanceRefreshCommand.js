import { __extends } from "tslib";
import { CancelInstanceRefreshAnswer, CancelInstanceRefreshType } from "../models/models_0";
import {
  deserializeAws_queryCancelInstanceRefreshCommand,
  serializeAws_queryCancelInstanceRefreshCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an instance refresh operation in progress. Cancellation does not roll back any
 *             replacements that have already been completed, but it prevents new replacements from
 *             being started. </p>
 *         <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling
 *             group after you make configuration changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CancelInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CancelInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new CancelInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link CancelInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelInstanceRefreshCommand = /** @class */ (function (_super) {
  __extends(CancelInstanceRefreshCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CancelInstanceRefreshCommand(input) {
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
  CancelInstanceRefreshCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "CancelInstanceRefreshCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CancelInstanceRefreshType.filterSensitiveLog,
      outputFilterSensitiveLog: CancelInstanceRefreshAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CancelInstanceRefreshCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryCancelInstanceRefreshCommand(input, context);
  };
  CancelInstanceRefreshCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryCancelInstanceRefreshCommand(output, context);
  };
  return CancelInstanceRefreshCommand;
})($Command);
export { CancelInstanceRefreshCommand };
//# sourceMappingURL=CancelInstanceRefreshCommand.js.map
