import { __extends } from "tslib";
import { ExecutePolicyType } from "../models/models_0";
import {
  deserializeAws_queryExecutePolicyCommand,
  serializeAws_queryExecutePolicyCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Executes the specified policy. This can be useful for testing the design of your
 *             scaling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExecutePolicyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExecutePolicyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new ExecutePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecutePolicyCommandInput} for command's `input` shape.
 * @see {@link ExecutePolicyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecutePolicyCommand = /** @class */ (function (_super) {
  __extends(ExecutePolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExecutePolicyCommand(input) {
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
  ExecutePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "ExecutePolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExecutePolicyType.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExecutePolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryExecutePolicyCommand(input, context);
  };
  ExecutePolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryExecutePolicyCommand(output, context);
  };
  return ExecutePolicyCommand;
})($Command);
export { ExecutePolicyCommand };
//# sourceMappingURL=ExecutePolicyCommand.js.map
