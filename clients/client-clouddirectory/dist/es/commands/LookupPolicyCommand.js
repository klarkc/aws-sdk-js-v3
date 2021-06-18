import { __extends } from "tslib";
import { LookupPolicyRequest, LookupPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1LookupPolicyCommand,
  serializeAws_restJson1LookupPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all policies from the root of the <a>Directory</a> to the object
 *       specified. If there are no policies present, an empty list is returned. If policies are
 *       present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
 *       for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
 *       <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, LookupPolicyCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, LookupPolicyCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new LookupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LookupPolicyCommandInput} for command's `input` shape.
 * @see {@link LookupPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var LookupPolicyCommand = /** @class */ (function (_super) {
  __extends(LookupPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function LookupPolicyCommand(input) {
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
  LookupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "LookupPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: LookupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LookupPolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  LookupPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1LookupPolicyCommand(input, context);
  };
  LookupPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1LookupPolicyCommand(output, context);
  };
  return LookupPolicyCommand;
})($Command);
export { LookupPolicyCommand };
//# sourceMappingURL=LookupPolicyCommand.js.map
