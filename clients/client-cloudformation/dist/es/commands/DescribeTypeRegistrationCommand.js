import { __extends } from "tslib";
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeTypeRegistrationCommand,
  serializeAws_queryDescribeTypeRegistrationCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about an extension's registration, including its current status and type and version identifiers.</p>
 *          <p>When you initiate a registration request using <code>
 *                <a>RegisterType</a>
 *             </code>, you can then use <code>
 *                <a>DescribeTypeRegistration</a>
 *             </code> to monitor the progress of that registration request.</p>
 *          <p>Once the registration request has completed, use <code>
 *                <a>DescribeType</a>
 *             </code> to return detailed information about an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeRegistrationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeRegistrationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTypeRegistrationCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeRegistrationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTypeRegistrationCommand = /** @class */ (function (_super) {
  __extends(DescribeTypeRegistrationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeTypeRegistrationCommand(input) {
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
  DescribeTypeRegistrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeTypeRegistrationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeTypeRegistrationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTypeRegistrationOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeTypeRegistrationCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeTypeRegistrationCommand(input, context);
  };
  DescribeTypeRegistrationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeTypeRegistrationCommand(output, context);
  };
  return DescribeTypeRegistrationCommand;
})($Command);
export { DescribeTypeRegistrationCommand };
//# sourceMappingURL=DescribeTypeRegistrationCommand.js.map
