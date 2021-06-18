import { __extends } from "tslib";
import { DescribeStackSetInput, DescribeStackSetOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackSetCommand,
  serializeAws_queryDescribeStackSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of the specified stack set. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackSetCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackSetCommand = /** @class */ (function (_super) {
  __extends(DescribeStackSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackSetCommand(input) {
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
  DescribeStackSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackSetCommand(input, context);
  };
  DescribeStackSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackSetCommand(output, context);
  };
  return DescribeStackSetCommand;
})($Command);
export { DescribeStackSetCommand };
//# sourceMappingURL=DescribeStackSetCommand.js.map
