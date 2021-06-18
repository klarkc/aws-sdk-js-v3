import { __extends } from "tslib";
import { GetGeneratedPolicyRequest, GetGeneratedPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetGeneratedPolicyCommand,
  serializeAws_restJson1GetGeneratedPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the policy that was generated using <code>StartPolicyGeneration</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetGeneratedPolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetGeneratedPolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new GetGeneratedPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeneratedPolicyCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedPolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGeneratedPolicyCommand = /** @class */ (function (_super) {
  __extends(GetGeneratedPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGeneratedPolicyCommand(input) {
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
  GetGeneratedPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "GetGeneratedPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetGeneratedPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGeneratedPolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGeneratedPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetGeneratedPolicyCommand(input, context);
  };
  GetGeneratedPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetGeneratedPolicyCommand(output, context);
  };
  return GetGeneratedPolicyCommand;
})($Command);
export { GetGeneratedPolicyCommand };
//# sourceMappingURL=GetGeneratedPolicyCommand.js.map
