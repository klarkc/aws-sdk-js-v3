import { __extends } from "tslib";
import { GetFieldLevelEncryptionRequest, GetFieldLevelEncryptionResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionCommand,
  serializeAws_restXmlGetFieldLevelEncryptionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the field-level encryption configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetFieldLevelEncryptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFieldLevelEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFieldLevelEncryptionCommand = /** @class */ (function (_super) {
  __extends(GetFieldLevelEncryptionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetFieldLevelEncryptionCommand(input) {
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
  GetFieldLevelEncryptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetFieldLevelEncryptionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetFieldLevelEncryptionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetFieldLevelEncryptionCommand(input, context);
  };
  GetFieldLevelEncryptionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetFieldLevelEncryptionCommand(output, context);
  };
  return GetFieldLevelEncryptionCommand;
})($Command);
export { GetFieldLevelEncryptionCommand };
//# sourceMappingURL=GetFieldLevelEncryptionCommand.js.map
