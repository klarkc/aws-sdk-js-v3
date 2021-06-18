import { __extends } from "tslib";
import { GetStreamingDistributionRequest, GetStreamingDistributionResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetStreamingDistributionCommand,
  serializeAws_restXmlGetStreamingDistributionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified RTMP distribution, including the distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link GetStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStreamingDistributionCommand = /** @class */ (function (_super) {
  __extends(GetStreamingDistributionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetStreamingDistributionCommand(input) {
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
  GetStreamingDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetStreamingDistributionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingDistributionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetStreamingDistributionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetStreamingDistributionCommand(input, context);
  };
  GetStreamingDistributionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetStreamingDistributionCommand(output, context);
  };
  return GetStreamingDistributionCommand;
})($Command);
export { GetStreamingDistributionCommand };
//# sourceMappingURL=GetStreamingDistributionCommand.js.map
