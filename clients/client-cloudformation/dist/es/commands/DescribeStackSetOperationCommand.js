import { __extends } from "tslib";
import { DescribeStackSetOperationInput, DescribeStackSetOperationOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackSetOperationCommand,
  serializeAws_queryDescribeStackSetOperationCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of the specified stack set operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackSetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackSetOperationCommand = /** @class */ (function (_super) {
  __extends(DescribeStackSetOperationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackSetOperationCommand(input) {
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
  DescribeStackSetOperationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackSetOperationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackSetOperationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackSetOperationOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackSetOperationCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackSetOperationCommand(input, context);
  };
  DescribeStackSetOperationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackSetOperationCommand(output, context);
  };
  return DescribeStackSetOperationCommand;
})($Command);
export { DescribeStackSetOperationCommand };
//# sourceMappingURL=DescribeStackSetOperationCommand.js.map
