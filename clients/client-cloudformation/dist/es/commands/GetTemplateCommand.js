import { __extends } from "tslib";
import { GetTemplateInput, GetTemplateOutput } from "../models/models_0";
import { deserializeAws_queryGetTemplateCommand, serializeAws_queryGetTemplateCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the template body for a specified stack. You can get the template for running
 *          or deleted stacks.</p>
 *          <p>For deleted stacks, GetTemplate returns the template for up to 90 days after the
 *          stack has been deleted.</p>
 *          <note>
 *             <p> If the template does not exist, a <code>ValidationError</code> is returned.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTemplateCommand = /** @class */ (function (_super) {
  __extends(GetTemplateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetTemplateCommand(input) {
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
  GetTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "GetTemplateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetTemplateCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryGetTemplateCommand(input, context);
  };
  GetTemplateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryGetTemplateCommand(output, context);
  };
  return GetTemplateCommand;
})($Command);
export { GetTemplateCommand };
//# sourceMappingURL=GetTemplateCommand.js.map
