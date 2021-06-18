import { __extends } from "tslib";
import { GetKeyGroupConfigRequest, GetKeyGroupConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetKeyGroupConfigCommand,
  serializeAws_restXmlGetKeyGroupConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a key group configuration.</p>
 * 		       <p>To get a key group configuration, you must provide the key group’s identifier. If the
 * 			key group is referenced in a distribution’s cache behavior, you can get the key group’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			key group is not referenced in a cache behavior, you can get the identifier using
 * 			<code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetKeyGroupConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyGroupConfigCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKeyGroupConfigCommand = /** @class */ (function (_super) {
  __extends(GetKeyGroupConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetKeyGroupConfigCommand(input) {
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
  GetKeyGroupConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetKeyGroupConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetKeyGroupConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyGroupConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetKeyGroupConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetKeyGroupConfigCommand(input, context);
  };
  GetKeyGroupConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetKeyGroupConfigCommand(output, context);
  };
  return GetKeyGroupConfigCommand;
})($Command);
export { GetKeyGroupConfigCommand };
//# sourceMappingURL=GetKeyGroupConfigCommand.js.map
