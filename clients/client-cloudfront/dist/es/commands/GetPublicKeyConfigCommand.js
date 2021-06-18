import { __extends } from "tslib";
import { GetPublicKeyConfigRequest, GetPublicKeyConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetPublicKeyConfigCommand,
  serializeAws_restXmlGetPublicKeyConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a public key configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetPublicKeyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetPublicKeyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetPublicKeyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPublicKeyConfigCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPublicKeyConfigCommand = /** @class */ (function (_super) {
  __extends(GetPublicKeyConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetPublicKeyConfigCommand(input) {
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
  GetPublicKeyConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetPublicKeyConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetPublicKeyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPublicKeyConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetPublicKeyConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetPublicKeyConfigCommand(input, context);
  };
  GetPublicKeyConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetPublicKeyConfigCommand(output, context);
  };
  return GetPublicKeyConfigCommand;
})($Command);
export { GetPublicKeyConfigCommand };
//# sourceMappingURL=GetPublicKeyConfigCommand.js.map
