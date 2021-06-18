import { __extends } from "tslib";
import { CreateCachePolicyRequest, CreateCachePolicyResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateCachePolicyCommand,
  serializeAws_restXmlCreateCachePolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a cache policy.</p>
 * 		       <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it’s
 * 			attached to a cache behavior, the cache policy determines the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The values that CloudFront includes in the <i>cache key</i>. These values can
 * 					include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to
 * 					find an object in its cache that it can return to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay
 * 					in the CloudFront cache.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
 * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
 * 			find an object in its cache that matches the request’s cache key. If you want to send
 * 			values to the origin but <i>not</i> include them in the cache key, use
 * 			<code>OriginRequestPolicy</code>.</p>
 * 		       <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCachePolicyCommand = /** @class */ (function (_super) {
  __extends(CreateCachePolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateCachePolicyCommand(input) {
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
  CreateCachePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateCachePolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCachePolicyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateCachePolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateCachePolicyCommand(input, context);
  };
  CreateCachePolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateCachePolicyCommand(output, context);
  };
  return CreateCachePolicyCommand;
})($Command);
export { CreateCachePolicyCommand };
//# sourceMappingURL=CreateCachePolicyCommand.js.map
