import { __extends } from "tslib";
import { DisableMetricsCollectionQuery } from "../models/models_0";
import {
  deserializeAws_queryDisableMetricsCollectionCommand,
  serializeAws_queryDisableMetricsCollectionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables group metrics for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DisableMetricsCollectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DisableMetricsCollectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DisableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableMetricsCollectionCommandInput} for command's `input` shape.
 * @see {@link DisableMetricsCollectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableMetricsCollectionCommand = /** @class */ (function (_super) {
  __extends(DisableMetricsCollectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisableMetricsCollectionCommand(input) {
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
  DisableMetricsCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DisableMetricsCollectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisableMetricsCollectionQuery.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisableMetricsCollectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDisableMetricsCollectionCommand(input, context);
  };
  DisableMetricsCollectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDisableMetricsCollectionCommand(output, context);
  };
  return DisableMetricsCollectionCommand;
})($Command);
export { DisableMetricsCollectionCommand };
//# sourceMappingURL=DisableMetricsCollectionCommand.js.map
