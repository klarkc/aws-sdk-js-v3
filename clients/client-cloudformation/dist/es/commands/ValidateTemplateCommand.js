import { __extends } from "tslib";
import { ValidateTemplateInput, ValidateTemplateOutput } from "../models/models_0";
import {
  deserializeAws_queryValidateTemplateCommand,
  serializeAws_queryValidateTemplateCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Validates a specified template. AWS CloudFormation first checks if the template is
 *          valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both
 *          these checks fail, AWS CloudFormation returns a template validation error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ValidateTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ValidateTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ValidateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateTemplateCommandInput} for command's `input` shape.
 * @see {@link ValidateTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidateTemplateCommand = /** @class */ (function (_super) {
  __extends(ValidateTemplateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ValidateTemplateCommand(input) {
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
  ValidateTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ValidateTemplateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ValidateTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateTemplateOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ValidateTemplateCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryValidateTemplateCommand(input, context);
  };
  ValidateTemplateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryValidateTemplateCommand(output, context);
  };
  return ValidateTemplateCommand;
})($Command);
export { ValidateTemplateCommand };
//# sourceMappingURL=ValidateTemplateCommand.js.map
