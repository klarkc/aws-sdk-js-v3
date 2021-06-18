import { __extends } from "tslib";
import { GetStreamingDistributionConfigRequest, GetStreamingDistributionConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetStreamingDistributionConfigCommand,
  serializeAws_restXmlGetStreamingDistributionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the configuration information about a streaming distribution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetStreamingDistributionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetStreamingDistributionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetStreamingDistributionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingDistributionConfigCommandInput} for command's `input` shape.
 * @see {@link GetStreamingDistributionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStreamingDistributionConfigCommand = /** @class */ (function (_super) {
  __extends(GetStreamingDistributionConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetStreamingDistributionConfigCommand(input) {
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
  GetStreamingDistributionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetStreamingDistributionConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetStreamingDistributionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingDistributionConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetStreamingDistributionConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetStreamingDistributionConfigCommand(input, context);
  };
  GetStreamingDistributionConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetStreamingDistributionConfigCommand(output, context);
  };
  return GetStreamingDistributionConfigCommand;
})($Command);
export { GetStreamingDistributionConfigCommand };
//# sourceMappingURL=GetStreamingDistributionConfigCommand.js.map
