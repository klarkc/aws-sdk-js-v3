import { __extends } from "tslib";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0";
import { deserializeAws_queryDescribeTypeCommand, serializeAws_queryDescribeTypeCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about an extension that has been registered.</p>
 *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTypeCommand = /** @class */ (function (_super) {
  __extends(DescribeTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeTypeCommand(input) {
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
  DescribeTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTypeOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeTypeCommand(input, context);
  };
  DescribeTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeTypeCommand(output, context);
  };
  return DescribeTypeCommand;
})($Command);
export { DescribeTypeCommand };
//# sourceMappingURL=DescribeTypeCommand.js.map
