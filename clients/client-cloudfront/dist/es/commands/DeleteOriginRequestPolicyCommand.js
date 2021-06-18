import { __extends } from "tslib";
import { DeleteOriginRequestPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteOriginRequestPolicyCommand,
  serializeAws_restXmlDeleteOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an origin request policy.</p>
 * 		       <p>You cannot delete an origin request policy if it’s attached to any cache behaviors. First
 * 			update your distributions to remove the origin request policy from all cache behaviors,
 * 			then delete the origin request policy.</p>
 * 		       <p>To delete an origin request policy, you must provide the policy’s identifier and version. To
 * 			get the identifier, you can use <code>ListOriginRequestPolicies</code> or
 * 			<code>GetOriginRequestPolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOriginRequestPolicyCommand = /** @class */ (function (_super) {
  __extends(DeleteOriginRequestPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteOriginRequestPolicyCommand(input) {
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
  DeleteOriginRequestPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteOriginRequestPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteOriginRequestPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteOriginRequestPolicyCommand(input, context);
  };
  DeleteOriginRequestPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteOriginRequestPolicyCommand(output, context);
  };
  return DeleteOriginRequestPolicyCommand;
})($Command);
export { DeleteOriginRequestPolicyCommand };
//# sourceMappingURL=DeleteOriginRequestPolicyCommand.js.map
