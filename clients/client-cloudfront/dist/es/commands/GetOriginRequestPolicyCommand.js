import { __extends } from "tslib";
import { GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetOriginRequestPolicyCommand,
  serializeAws_restXmlGetOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an origin request policy, including the following metadata:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The policy’s identifier.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The date and time when the policy was last modified.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>To get an origin request policy, you must provide the policy’s identifier. If the origin
 * 			request policy is attached to a distribution’s cache behavior, you can get the policy’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			origin request policy is not attached to a cache behavior, you can get the identifier
 * 			using <code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOriginRequestPolicyCommand = /** @class */ (function (_super) {
  __extends(GetOriginRequestPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetOriginRequestPolicyCommand(input) {
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
  GetOriginRequestPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetOriginRequestPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOriginRequestPolicyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetOriginRequestPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetOriginRequestPolicyCommand(input, context);
  };
  GetOriginRequestPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetOriginRequestPolicyCommand(output, context);
  };
  return GetOriginRequestPolicyCommand;
})($Command);
export { GetOriginRequestPolicyCommand };
//# sourceMappingURL=GetOriginRequestPolicyCommand.js.map
