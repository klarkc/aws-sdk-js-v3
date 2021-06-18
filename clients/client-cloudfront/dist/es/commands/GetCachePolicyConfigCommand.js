import { __extends } from "tslib";
import { GetCachePolicyConfigRequest, GetCachePolicyConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetCachePolicyConfigCommand,
  serializeAws_restXmlGetCachePolicyConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a cache policy configuration.</p>
 * 		       <p>To get a cache policy configuration, you must provide the policy’s identifier. If the cache
 * 			policy is attached to a distribution’s cache behavior, you can get the policy’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			cache policy is not attached to a cache behavior, you can get the identifier using
 * 			<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCachePolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCachePolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCachePolicyConfigCommand = /** @class */ (function (_super) {
  __extends(GetCachePolicyConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCachePolicyConfigCommand(input) {
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
  GetCachePolicyConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetCachePolicyConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCachePolicyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCachePolicyConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCachePolicyConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetCachePolicyConfigCommand(input, context);
  };
  GetCachePolicyConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetCachePolicyConfigCommand(output, context);
  };
  return GetCachePolicyConfigCommand;
})($Command);
export { GetCachePolicyConfigCommand };
//# sourceMappingURL=GetCachePolicyConfigCommand.js.map
