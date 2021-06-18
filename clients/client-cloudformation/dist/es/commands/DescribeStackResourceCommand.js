import { __extends } from "tslib";
import { DescribeStackResourceInput, DescribeStackResourceOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackResourceCommand,
  serializeAws_queryDescribeStackResourceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of the specified resource in the specified stack.</p>
 *          <p>For deleted stacks, DescribeStackResource returns resource information for up to 90
 *          days after the stack has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackResourceCommand = /** @class */ (function (_super) {
  __extends(DescribeStackResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackResourceCommand(input) {
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
  DescribeStackResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackResourceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackResourceCommand(input, context);
  };
  DescribeStackResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackResourceCommand(output, context);
  };
  return DescribeStackResourceCommand;
})($Command);
export { DescribeStackResourceCommand };
//# sourceMappingURL=DescribeStackResourceCommand.js.map
