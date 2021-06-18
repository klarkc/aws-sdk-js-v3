import { __extends } from "tslib";
import { UpdateFieldLevelEncryptionProfileRequest, UpdateFieldLevelEncryptionProfileResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a field-level encryption profile. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFieldLevelEncryptionProfileCommand = /** @class */ (function (_super) {
  __extends(UpdateFieldLevelEncryptionProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateFieldLevelEncryptionProfileCommand(input) {
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
  UpdateFieldLevelEncryptionProfileCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateFieldLevelEncryptionProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFieldLevelEncryptionProfileResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateFieldLevelEncryptionProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand(input, context);
  };
  UpdateFieldLevelEncryptionProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand(output, context);
  };
  return UpdateFieldLevelEncryptionProfileCommand;
})($Command);
export { UpdateFieldLevelEncryptionProfileCommand };
//# sourceMappingURL=UpdateFieldLevelEncryptionProfileCommand.js.map
