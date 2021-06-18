import { __extends } from "tslib";
import {
  GetFieldLevelEncryptionProfileConfigRequest,
  GetFieldLevelEncryptionProfileConfigResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand,
  serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the field-level encryption profile configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionProfileConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionProfileConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetFieldLevelEncryptionProfileConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFieldLevelEncryptionProfileConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionProfileConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFieldLevelEncryptionProfileConfigCommand = /** @class */ (function (_super) {
  __extends(GetFieldLevelEncryptionProfileConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetFieldLevelEncryptionProfileConfigCommand(input) {
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
  GetFieldLevelEncryptionProfileConfigCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetFieldLevelEncryptionProfileConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionProfileConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionProfileConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetFieldLevelEncryptionProfileConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand(input, context);
  };
  GetFieldLevelEncryptionProfileConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand(output, context);
  };
  return GetFieldLevelEncryptionProfileConfigCommand;
})($Command);
export { GetFieldLevelEncryptionProfileConfigCommand };
//# sourceMappingURL=GetFieldLevelEncryptionProfileConfigCommand.js.map
