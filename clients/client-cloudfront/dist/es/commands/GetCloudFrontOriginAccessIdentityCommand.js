import { __extends } from "tslib";
import { GetCloudFrontOriginAccessIdentityRequest, GetCloudFrontOriginAccessIdentityResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the information about an origin access identity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCloudFrontOriginAccessIdentityCommand = /** @class */ (function (_super) {
  __extends(GetCloudFrontOriginAccessIdentityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCloudFrontOriginAccessIdentityCommand(input) {
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
  GetCloudFrontOriginAccessIdentityCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetCloudFrontOriginAccessIdentityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCloudFrontOriginAccessIdentityCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand(input, context);
  };
  GetCloudFrontOriginAccessIdentityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand(output, context);
  };
  return GetCloudFrontOriginAccessIdentityCommand;
})($Command);
export { GetCloudFrontOriginAccessIdentityCommand };
//# sourceMappingURL=GetCloudFrontOriginAccessIdentityCommand.js.map
