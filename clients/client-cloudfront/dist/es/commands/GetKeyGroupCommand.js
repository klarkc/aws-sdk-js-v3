import { __extends } from "tslib";
import { GetKeyGroupRequest, GetKeyGroupResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetKeyGroupCommand,
  serializeAws_restXmlGetKeyGroupCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a key group, including the date and time when the key group was last modified.</p>
 * 		       <p>To get a key group, you must provide the key group’s identifier. If the key group is
 * 			referenced in a distribution’s cache behavior, you can get the key group’s identifier
 * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group
 * 			is not referenced in a cache behavior, you can get the identifier using
 * 			<code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyGroupCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKeyGroupCommand = /** @class */ (function (_super) {
  __extends(GetKeyGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetKeyGroupCommand(input) {
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
  GetKeyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetKeyGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyGroupResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetKeyGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetKeyGroupCommand(input, context);
  };
  GetKeyGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetKeyGroupCommand(output, context);
  };
  return GetKeyGroupCommand;
})($Command);
export { GetKeyGroupCommand };
//# sourceMappingURL=GetKeyGroupCommand.js.map
