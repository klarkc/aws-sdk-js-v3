import { __extends } from "tslib";
import { SignalResourceInput } from "../models/models_0";
import {
  deserializeAws_querySignalResourceCommand,
  serializeAws_querySignalResourceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a signal to the specified resource with a success or failure status. You can
 *          use the SignalResource API in conjunction with a creation policy or update policy. AWS
 *          CloudFormation doesn't proceed with a stack creation or update until resources receive the
 *          required number of signals or the timeout period is exceeded. The SignalResource API is
 *          useful in cases where you want to send signals from anywhere other than an Amazon EC2
 *          instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SignalResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SignalResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SignalResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignalResourceCommandInput} for command's `input` shape.
 * @see {@link SignalResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SignalResourceCommand = /** @class */ (function (_super) {
  __extends(SignalResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SignalResourceCommand(input) {
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
  SignalResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "SignalResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SignalResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SignalResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_querySignalResourceCommand(input, context);
  };
  SignalResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_querySignalResourceCommand(output, context);
  };
  return SignalResourceCommand;
})($Command);
export { SignalResourceCommand };
//# sourceMappingURL=SignalResourceCommand.js.map
