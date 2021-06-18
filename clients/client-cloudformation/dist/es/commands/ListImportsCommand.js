import { __extends } from "tslib";
import { ListImportsInput, ListImportsOutput } from "../models/models_0";
import { deserializeAws_queryListImportsCommand, serializeAws_queryListImportsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all stacks that are importing an exported output value. To modify or remove an
 *          exported output value, first use this action to see which stacks are using it. To see the
 *          exported output values in your account, see <a>ListExports</a>. </p>
 *          <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">
 *                <code>Fn::ImportValue</code>
 *             </a> function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListImportsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListImportsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListImportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImportsCommandInput} for command's `input` shape.
 * @see {@link ListImportsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImportsCommand = /** @class */ (function (_super) {
  __extends(ListImportsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListImportsCommand(input) {
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
  ListImportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListImportsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListImportsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListImportsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListImportsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListImportsCommand(input, context);
  };
  ListImportsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListImportsCommand(output, context);
  };
  return ListImportsCommand;
})($Command);
export { ListImportsCommand };
//# sourceMappingURL=ListImportsCommand.js.map
