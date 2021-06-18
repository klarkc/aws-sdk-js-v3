import { __extends } from "tslib";
import { UpdateFieldLevelEncryptionConfigRequest, UpdateFieldLevelEncryptionConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a field-level encryption configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFieldLevelEncryptionConfigCommand = /** @class */ (function (_super) {
  __extends(UpdateFieldLevelEncryptionConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateFieldLevelEncryptionConfigCommand(input) {
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
  UpdateFieldLevelEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateFieldLevelEncryptionConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateFieldLevelEncryptionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFieldLevelEncryptionConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateFieldLevelEncryptionConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand(input, context);
  };
  UpdateFieldLevelEncryptionConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand(output, context);
  };
  return UpdateFieldLevelEncryptionConfigCommand;
})($Command);
export { UpdateFieldLevelEncryptionConfigCommand };
//# sourceMappingURL=UpdateFieldLevelEncryptionConfigCommand.js.map
