import { __extends } from "tslib";
import { UpdateCachePolicyRequest, UpdateCachePolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateCachePolicyCommand,
  serializeAws_restXmlUpdateCachePolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a cache policy configuration.</p>
 * 		       <p>When you update a cache policy configuration, all the fields are updated with the
 * 			values provided in the request. You cannot update some fields independent of others. To
 * 			update a cache policy configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the cache policy configuration that you want to
 * 					update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
 * 					configuration, including the fields that you modified and those that you
 * 					didn’t.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCachePolicyCommand = /** @class */ (function (_super) {
  __extends(UpdateCachePolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateCachePolicyCommand(input) {
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
  UpdateCachePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateCachePolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCachePolicyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateCachePolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateCachePolicyCommand(input, context);
  };
  UpdateCachePolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateCachePolicyCommand(output, context);
  };
  return UpdateCachePolicyCommand;
})($Command);
export { UpdateCachePolicyCommand };
//# sourceMappingURL=UpdateCachePolicyCommand.js.map
