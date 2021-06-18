import { __extends } from "tslib";
import {
  GetCloudFrontOriginAccessIdentityConfigRequest,
  GetCloudFrontOriginAccessIdentityConfigResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand,
  serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the configuration information about an origin access identity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCloudFrontOriginAccessIdentityConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCloudFrontOriginAccessIdentityConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCloudFrontOriginAccessIdentityConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFrontOriginAccessIdentityConfigCommandInput} for command's `input` shape.
 * @see {@link GetCloudFrontOriginAccessIdentityConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCloudFrontOriginAccessIdentityConfigCommand = /** @class */ (function (_super) {
  __extends(GetCloudFrontOriginAccessIdentityConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCloudFrontOriginAccessIdentityConfigCommand(input) {
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
  GetCloudFrontOriginAccessIdentityConfigCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetCloudFrontOriginAccessIdentityConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCloudFrontOriginAccessIdentityConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand(input, context);
  };
  GetCloudFrontOriginAccessIdentityConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand(output, context);
  };
  return GetCloudFrontOriginAccessIdentityConfigCommand;
})($Command);
export { GetCloudFrontOriginAccessIdentityConfigCommand };
//# sourceMappingURL=GetCloudFrontOriginAccessIdentityConfigCommand.js.map
