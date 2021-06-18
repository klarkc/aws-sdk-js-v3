import { __extends } from "tslib";
import { DescribeStackInstanceInput, DescribeStackInstanceOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackInstanceCommand,
  serializeAws_queryDescribeStackInstanceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the stack instance that's associated with the specified stack set, AWS
 *          account, and Region.</p>
 *          <p>For a list of stack instances that are associated with a specific stack set, use
 *             <a>ListStackInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackInstanceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackInstanceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackInstanceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackInstanceCommand = /** @class */ (function (_super) {
  __extends(DescribeStackInstanceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackInstanceCommand(input) {
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
  DescribeStackInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackInstanceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackInstanceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackInstanceCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackInstanceCommand(input, context);
  };
  DescribeStackInstanceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackInstanceCommand(output, context);
  };
  return DescribeStackInstanceCommand;
})($Command);
export { DescribeStackInstanceCommand };
//# sourceMappingURL=DescribeStackInstanceCommand.js.map
