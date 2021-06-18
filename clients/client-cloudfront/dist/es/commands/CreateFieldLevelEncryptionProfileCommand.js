import { __extends } from "tslib";
import { CreateFieldLevelEncryptionProfileRequest, CreateFieldLevelEncryptionProfileResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a field-level encryption profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFieldLevelEncryptionProfileCommand = /** @class */ (function (_super) {
  __extends(CreateFieldLevelEncryptionProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateFieldLevelEncryptionProfileCommand(input) {
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
  CreateFieldLevelEncryptionProfileCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateFieldLevelEncryptionProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFieldLevelEncryptionProfileResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateFieldLevelEncryptionProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand(input, context);
  };
  CreateFieldLevelEncryptionProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand(output, context);
  };
  return CreateFieldLevelEncryptionProfileCommand;
})($Command);
export { CreateFieldLevelEncryptionProfileCommand };
//# sourceMappingURL=CreateFieldLevelEncryptionProfileCommand.js.map
