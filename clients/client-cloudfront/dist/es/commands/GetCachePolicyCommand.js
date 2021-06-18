import { __extends } from "tslib";
import { GetCachePolicyRequest, GetCachePolicyResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetCachePolicyCommand,
  serializeAws_restXmlGetCachePolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a cache policy, including the following metadata:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The policy’s identifier.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The date and time when the policy was last modified.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>To get a cache policy, you must provide the policy’s identifier. If the cache policy is
 * 			attached to a distribution’s cache behavior, you can get the policy’s identifier using
 * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is
 * 			not attached to a cache behavior, you can get the identifier using
 * 			<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCachePolicyCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCachePolicyCommand = /** @class */ (function (_super) {
  __extends(GetCachePolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCachePolicyCommand(input) {
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
  GetCachePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetCachePolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCachePolicyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCachePolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetCachePolicyCommand(input, context);
  };
  GetCachePolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetCachePolicyCommand(output, context);
  };
  return GetCachePolicyCommand;
})($Command);
export { GetCachePolicyCommand };
//# sourceMappingURL=GetCachePolicyCommand.js.map
