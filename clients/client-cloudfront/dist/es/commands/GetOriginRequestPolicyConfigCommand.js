import { __extends } from "tslib";
import { GetOriginRequestPolicyConfigRequest, GetOriginRequestPolicyConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetOriginRequestPolicyConfigCommand,
  serializeAws_restXmlGetOriginRequestPolicyConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an origin request policy configuration.</p>
 * 		       <p>To get an origin request policy configuration, you must provide the policy’s identifier. If
 * 			the origin request policy is attached to a distribution’s cache behavior, you can get
 * 			the policy’s identifier using <code>ListDistributions</code> or
 * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
 * 			behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginRequestPolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginRequestPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOriginRequestPolicyConfigCommand = /** @class */ (function (_super) {
  __extends(GetOriginRequestPolicyConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetOriginRequestPolicyConfigCommand(input) {
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
  GetOriginRequestPolicyConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetOriginRequestPolicyConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetOriginRequestPolicyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOriginRequestPolicyConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetOriginRequestPolicyConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetOriginRequestPolicyConfigCommand(input, context);
  };
  GetOriginRequestPolicyConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetOriginRequestPolicyConfigCommand(output, context);
  };
  return GetOriginRequestPolicyConfigCommand;
})($Command);
export { GetOriginRequestPolicyConfigCommand };
//# sourceMappingURL=GetOriginRequestPolicyConfigCommand.js.map
