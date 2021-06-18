import { __extends } from "tslib";
import { UpdateOriginRequestPolicyRequest, UpdateOriginRequestPolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateOriginRequestPolicyCommand,
  serializeAws_restXmlUpdateOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an origin request policy configuration.</p>
 * 		       <p>When you update an origin request policy configuration, all the fields are updated
 * 			with the values provided in the request. You cannot update some fields independent of
 * 			others. To update an origin request policy configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the origin request policy configuration that you
 * 					want to update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin
 * 					request policy configuration, including the fields that you modified and those
 * 					that you didn’t.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOriginRequestPolicyCommand = /** @class */ (function (_super) {
  __extends(UpdateOriginRequestPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateOriginRequestPolicyCommand(input) {
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
  UpdateOriginRequestPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateOriginRequestPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateOriginRequestPolicyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateOriginRequestPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateOriginRequestPolicyCommand(input, context);
  };
  UpdateOriginRequestPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateOriginRequestPolicyCommand(output, context);
  };
  return UpdateOriginRequestPolicyCommand;
})($Command);
export { UpdateOriginRequestPolicyCommand };
//# sourceMappingURL=UpdateOriginRequestPolicyCommand.js.map
