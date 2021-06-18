import { __extends } from "tslib";
import { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/models_0";
import {
  deserializeAws_querySetTypeDefaultVersionCommand,
  serializeAws_querySetTypeDefaultVersionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetTypeDefaultVersionCommand = /** @class */ (function (_super) {
  __extends(SetTypeDefaultVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SetTypeDefaultVersionCommand(input) {
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
  SetTypeDefaultVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "SetTypeDefaultVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SetTypeDefaultVersionInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetTypeDefaultVersionOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SetTypeDefaultVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_querySetTypeDefaultVersionCommand(input, context);
  };
  SetTypeDefaultVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_querySetTypeDefaultVersionCommand(output, context);
  };
  return SetTypeDefaultVersionCommand;
})($Command);
export { SetTypeDefaultVersionCommand };
//# sourceMappingURL=SetTypeDefaultVersionCommand.js.map
