import { __extends } from "tslib";
import { RegisterTypeInput, RegisterTypeOutput } from "../models/models_0";
import { deserializeAws_queryRegisterTypeCommand, serializeAws_queryRegisterTypeCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your AWS account, and includes:</p>
 *          <ul>
 *             <li>
 *                <p>Validating the extension schema</p>
 *             </li>
 *             <li>
 *                <p>Determining which handlers, if any, have been specified for the extension</p>
 *             </li>
 *             <li>
 *                <p>Making the extension available for use in your account</p>
 *             </li>
 *          </ul>
 *          <p>For more information on how to develop extensions and ready them for registeration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p>
 *          <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p>
 *          <p>Once you have initiated a registration request using <code>
 *                <a>RegisterType</a>
 *             </code>, you can use <code>
 *                <a>DescribeTypeRegistration</a>
 *             </code> to monitor the progress of the registration request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RegisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RegisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new RegisterTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTypeCommand = /** @class */ (function (_super) {
  __extends(RegisterTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RegisterTypeCommand(input) {
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
  RegisterTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "RegisterTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RegisterTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterTypeOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RegisterTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryRegisterTypeCommand(input, context);
  };
  RegisterTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryRegisterTypeCommand(output, context);
  };
  return RegisterTypeCommand;
})($Command);
export { RegisterTypeCommand };
//# sourceMappingURL=RegisterTypeCommand.js.map
