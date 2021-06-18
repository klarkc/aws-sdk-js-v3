import { __extends } from "tslib";
import { CreateOriginRequestPolicyRequest, CreateOriginRequestPolicyResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateOriginRequestPolicyCommand,
  serializeAws_restXmlCreateOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an origin request policy.</p>
 * 		       <p>After you create an origin request policy, you can attach it to one or more cache behaviors.
 * 			When it’s attached to a cache behavior, the origin request policy determines the values
 * 			that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends
 * 			to the origin includes the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The headers that CloudFront automatically includes in every origin request, including
 * 					<code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or
 * 					the origin request policy. These can include items from the viewer request and,
 * 					in the case of headers, additional ones that are added by CloudFront.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>CloudFront sends a request when it can’t find a valid object in its cache that matches the
 * 			request. If you want to send values to the origin and also include them in the cache
 * 			key, use <code>CachePolicy</code>.</p>
 * 		       <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOriginRequestPolicyCommand = /** @class */ (function (_super) {
  __extends(CreateOriginRequestPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateOriginRequestPolicyCommand(input) {
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
  CreateOriginRequestPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateOriginRequestPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOriginRequestPolicyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateOriginRequestPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateOriginRequestPolicyCommand(input, context);
  };
  CreateOriginRequestPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateOriginRequestPolicyCommand(output, context);
  };
  return CreateOriginRequestPolicyCommand;
})($Command);
export { CreateOriginRequestPolicyCommand };
//# sourceMappingURL=CreateOriginRequestPolicyCommand.js.map
