import { __extends } from "tslib";
import { DeleteFieldLevelEncryptionProfileRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove a field-level encryption profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFieldLevelEncryptionProfileCommand = /** @class */ (function (_super) {
  __extends(DeleteFieldLevelEncryptionProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteFieldLevelEncryptionProfileCommand(input) {
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
  DeleteFieldLevelEncryptionProfileCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteFieldLevelEncryptionProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteFieldLevelEncryptionProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(input, context);
  };
  DeleteFieldLevelEncryptionProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(output, context);
  };
  return DeleteFieldLevelEncryptionProfileCommand;
})($Command);
export { DeleteFieldLevelEncryptionProfileCommand };
//# sourceMappingURL=DeleteFieldLevelEncryptionProfileCommand.js.map
