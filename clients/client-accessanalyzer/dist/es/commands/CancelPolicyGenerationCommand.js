import { __extends } from "tslib";
import { CancelPolicyGenerationRequest, CancelPolicyGenerationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelPolicyGenerationCommand,
  serializeAws_restJson1CancelPolicyGenerationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the requested policy generation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CancelPolicyGenerationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CancelPolicyGenerationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new CancelPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link CancelPolicyGenerationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelPolicyGenerationCommand = /** @class */ (function (_super) {
  __extends(CancelPolicyGenerationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CancelPolicyGenerationCommand(input) {
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
  CancelPolicyGenerationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "CancelPolicyGenerationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CancelPolicyGenerationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelPolicyGenerationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CancelPolicyGenerationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CancelPolicyGenerationCommand(input, context);
  };
  CancelPolicyGenerationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CancelPolicyGenerationCommand(output, context);
  };
  return CancelPolicyGenerationCommand;
})($Command);
export { CancelPolicyGenerationCommand };
//# sourceMappingURL=CancelPolicyGenerationCommand.js.map
