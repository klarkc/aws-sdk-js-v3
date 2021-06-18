import { __extends } from "tslib";
import { DescribePoliciesType, PoliciesType } from "../models/models_0";
import {
  deserializeAws_queryDescribePoliciesCommand,
  serializeAws_queryDescribePoliciesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the scaling policies in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribePoliciesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribePoliciesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribePoliciesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePoliciesCommand = /** @class */ (function (_super) {
  __extends(DescribePoliciesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribePoliciesCommand(input) {
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
  DescribePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribePoliciesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribePoliciesType.filterSensitiveLog,
      outputFilterSensitiveLog: PoliciesType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribePoliciesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribePoliciesCommand(input, context);
  };
  DescribePoliciesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribePoliciesCommand(output, context);
  };
  return DescribePoliciesCommand;
})($Command);
export { DescribePoliciesCommand };
//# sourceMappingURL=DescribePoliciesCommand.js.map
