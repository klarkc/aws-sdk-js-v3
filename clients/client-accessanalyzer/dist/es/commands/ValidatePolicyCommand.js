import { __extends } from "tslib";
import { ValidatePolicyRequest, ValidatePolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ValidatePolicyCommand,
  serializeAws_restJson1ValidatePolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests the validation of a policy and returns a list of findings. The findings help
 *          you identify issues and provide actionable recommendations to resolve the issue and enable
 *          you to author functional policies that meet security best practices. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ValidatePolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ValidatePolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ValidatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidatePolicyCommandInput} for command's `input` shape.
 * @see {@link ValidatePolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidatePolicyCommand = /** @class */ (function (_super) {
  __extends(ValidatePolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ValidatePolicyCommand(input) {
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
  ValidatePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ValidatePolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ValidatePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ValidatePolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ValidatePolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ValidatePolicyCommand(input, context);
  };
  ValidatePolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ValidatePolicyCommand(output, context);
  };
  return ValidatePolicyCommand;
})($Command);
export { ValidatePolicyCommand };
//# sourceMappingURL=ValidatePolicyCommand.js.map
