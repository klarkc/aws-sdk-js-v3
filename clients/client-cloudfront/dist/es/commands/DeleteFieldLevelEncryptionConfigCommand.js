import { __extends } from "tslib";
import { DeleteFieldLevelEncryptionConfigRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove a field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFieldLevelEncryptionConfigCommand = /** @class */ (function (_super) {
  __extends(DeleteFieldLevelEncryptionConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteFieldLevelEncryptionConfigCommand(input) {
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
  DeleteFieldLevelEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteFieldLevelEncryptionConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteFieldLevelEncryptionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteFieldLevelEncryptionConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand(input, context);
  };
  DeleteFieldLevelEncryptionConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand(output, context);
  };
  return DeleteFieldLevelEncryptionConfigCommand;
})($Command);
export { DeleteFieldLevelEncryptionConfigCommand };
//# sourceMappingURL=DeleteFieldLevelEncryptionConfigCommand.js.map
