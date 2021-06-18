import { __extends } from "tslib";
import { GetFieldLevelEncryptionProfileRequest, GetFieldLevelEncryptionProfileResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlGetFieldLevelEncryptionProfileCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the field-level encryption profile information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFieldLevelEncryptionProfileCommand = /** @class */ (function (_super) {
  __extends(GetFieldLevelEncryptionProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetFieldLevelEncryptionProfileCommand(input) {
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
  GetFieldLevelEncryptionProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetFieldLevelEncryptionProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionProfileResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetFieldLevelEncryptionProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetFieldLevelEncryptionProfileCommand(input, context);
  };
  GetFieldLevelEncryptionProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand(output, context);
  };
  return GetFieldLevelEncryptionProfileCommand;
})($Command);
export { GetFieldLevelEncryptionProfileCommand };
//# sourceMappingURL=GetFieldLevelEncryptionProfileCommand.js.map
