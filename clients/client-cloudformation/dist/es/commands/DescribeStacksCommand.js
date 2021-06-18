import { __extends } from "tslib";
import { DescribeStacksInput, DescribeStacksOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStacksCommand,
  serializeAws_queryDescribeStacksCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description for the specified stack; if no stack name was specified, then
 *          it returns the description for all the stacks created.</p>
 *          <note>
 *             <p>If the stack does not exist, an <code>AmazonCloudFormationException</code> is
 *             returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStacksCommand = /** @class */ (function (_super) {
  __extends(DescribeStacksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStacksCommand(input) {
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
  DescribeStacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStacksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStacksInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStacksOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStacksCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStacksCommand(input, context);
  };
  DescribeStacksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStacksCommand(output, context);
  };
  return DescribeStacksCommand;
})($Command);
export { DescribeStacksCommand };
//# sourceMappingURL=DescribeStacksCommand.js.map
