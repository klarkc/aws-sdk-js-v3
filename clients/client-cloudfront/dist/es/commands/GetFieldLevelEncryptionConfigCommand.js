import { __extends } from "tslib";
import { GetFieldLevelEncryptionConfigRequest, GetFieldLevelEncryptionConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlGetFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the field-level encryption configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFieldLevelEncryptionConfigCommand = /** @class */ (function (_super) {
  __extends(GetFieldLevelEncryptionConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetFieldLevelEncryptionConfigCommand(input) {
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
  GetFieldLevelEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetFieldLevelEncryptionConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetFieldLevelEncryptionConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetFieldLevelEncryptionConfigCommand(input, context);
  };
  GetFieldLevelEncryptionConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand(output, context);
  };
  return GetFieldLevelEncryptionConfigCommand;
})($Command);
export { GetFieldLevelEncryptionConfigCommand };
//# sourceMappingURL=GetFieldLevelEncryptionConfigCommand.js.map
