import { __extends } from "tslib";
import { CreateStackInput, CreateStackOutput } from "../models/models_0";
import { deserializeAws_queryCreateStackCommand, serializeAws_queryCreateStackCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a stack as specified in the template. After the call completes successfully,
 *          the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStackCommand = /** @class */ (function (_super) {
  __extends(CreateStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStackCommand(input) {
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
  CreateStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "CreateStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStackOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryCreateStackCommand(input, context);
  };
  CreateStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryCreateStackCommand(output, context);
  };
  return CreateStackCommand;
})($Command);
export { CreateStackCommand };
//# sourceMappingURL=CreateStackCommand.js.map
