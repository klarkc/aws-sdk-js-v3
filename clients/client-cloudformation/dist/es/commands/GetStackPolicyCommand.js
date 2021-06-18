import { __extends } from "tslib";
import { GetStackPolicyInput, GetStackPolicyOutput } from "../models/models_0";
import {
  deserializeAws_queryGetStackPolicyCommand,
  serializeAws_queryGetStackPolicyCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a
 *          null value is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetStackPolicyCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetStackPolicyCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetStackPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStackPolicyCommandInput} for command's `input` shape.
 * @see {@link GetStackPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStackPolicyCommand = /** @class */ (function (_super) {
  __extends(GetStackPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetStackPolicyCommand(input) {
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
  GetStackPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "GetStackPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetStackPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetStackPolicyOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetStackPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryGetStackPolicyCommand(input, context);
  };
  GetStackPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryGetStackPolicyCommand(output, context);
  };
  return GetStackPolicyCommand;
})($Command);
export { GetStackPolicyCommand };
//# sourceMappingURL=GetStackPolicyCommand.js.map
