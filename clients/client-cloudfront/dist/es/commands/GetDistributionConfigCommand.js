import { __extends } from "tslib";
import { GetDistributionConfigRequest, GetDistributionConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetDistributionConfigCommand,
  serializeAws_restXmlGetDistributionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the configuration information about a distribution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetDistributionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetDistributionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetDistributionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionConfigCommandInput} for command's `input` shape.
 * @see {@link GetDistributionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDistributionConfigCommand = /** @class */ (function (_super) {
  __extends(GetDistributionConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDistributionConfigCommand(input) {
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
  GetDistributionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetDistributionConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDistributionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDistributionConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetDistributionConfigCommand(input, context);
  };
  GetDistributionConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetDistributionConfigCommand(output, context);
  };
  return GetDistributionConfigCommand;
})($Command);
export { GetDistributionConfigCommand };
//# sourceMappingURL=GetDistributionConfigCommand.js.map
