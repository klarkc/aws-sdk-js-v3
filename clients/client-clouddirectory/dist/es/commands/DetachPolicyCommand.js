import { __extends } from "tslib";
import { DetachPolicyRequest, DetachPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DetachPolicyCommand,
  serializeAws_restJson1DetachPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a policy from an object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DetachPolicyCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DetachPolicyCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DetachPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachPolicyCommand = /** @class */ (function (_super) {
  __extends(DetachPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachPolicyCommand(input) {
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
  DetachPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DetachPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachPolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DetachPolicyCommand(input, context);
  };
  DetachPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DetachPolicyCommand(output, context);
  };
  return DetachPolicyCommand;
})($Command);
export { DetachPolicyCommand };
//# sourceMappingURL=DetachPolicyCommand.js.map
