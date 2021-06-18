import { __extends } from "tslib";
import { AttachPolicyRequest, AttachPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AttachPolicyCommand,
  serializeAws_restJson1AttachPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
 *       policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachPolicyCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachPolicyCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AttachPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachPolicyCommand = /** @class */ (function (_super) {
  __extends(AttachPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachPolicyCommand(input) {
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
  AttachPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "AttachPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachPolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AttachPolicyCommand(input, context);
  };
  AttachPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AttachPolicyCommand(output, context);
  };
  return AttachPolicyCommand;
})($Command);
export { AttachPolicyCommand };
//# sourceMappingURL=AttachPolicyCommand.js.map
