import { __extends } from "tslib";
import { DeleteCachePolicyRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteCachePolicyCommand,
  serializeAws_restXmlDeleteCachePolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a cache policy.</p>
 * 		       <p>You cannot delete a cache policy if it’s attached to a cache behavior. First update your
 * 			distributions to remove the cache policy from all cache behaviors, then delete the cache
 * 			policy.</p>
 * 		       <p>To delete a cache policy, you must provide the policy’s identifier and version. To get these
 * 			values, you can use <code>ListCachePolicies</code> or
 * 			<code>GetCachePolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCachePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCachePolicyCommand = /** @class */ (function (_super) {
  __extends(DeleteCachePolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteCachePolicyCommand(input) {
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
  DeleteCachePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteCachePolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteCachePolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteCachePolicyCommand(input, context);
  };
  DeleteCachePolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteCachePolicyCommand(output, context);
  };
  return DeleteCachePolicyCommand;
})($Command);
export { DeleteCachePolicyCommand };
//# sourceMappingURL=DeleteCachePolicyCommand.js.map
