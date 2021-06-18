import { __extends } from "tslib";
import { StartPolicyGenerationRequest, StartPolicyGenerationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartPolicyGenerationCommand,
  serializeAws_restJson1StartPolicyGenerationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the policy generation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartPolicyGenerationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartPolicyGenerationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new StartPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link StartPolicyGenerationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartPolicyGenerationCommand = /** @class */ (function (_super) {
  __extends(StartPolicyGenerationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartPolicyGenerationCommand(input) {
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
  StartPolicyGenerationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "StartPolicyGenerationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartPolicyGenerationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartPolicyGenerationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartPolicyGenerationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartPolicyGenerationCommand(input, context);
  };
  StartPolicyGenerationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartPolicyGenerationCommand(output, context);
  };
  return StartPolicyGenerationCommand;
})($Command);
export { StartPolicyGenerationCommand };
//# sourceMappingURL=StartPolicyGenerationCommand.js.map
