import { __extends } from "tslib";
import { CreateFieldLevelEncryptionConfigRequest, CreateFieldLevelEncryptionConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFieldLevelEncryptionConfigCommand = /** @class */ (function (_super) {
  __extends(CreateFieldLevelEncryptionConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateFieldLevelEncryptionConfigCommand(input) {
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
  CreateFieldLevelEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateFieldLevelEncryptionConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateFieldLevelEncryptionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFieldLevelEncryptionConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateFieldLevelEncryptionConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand(input, context);
  };
  CreateFieldLevelEncryptionConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand(output, context);
  };
  return CreateFieldLevelEncryptionConfigCommand;
})($Command);
export { CreateFieldLevelEncryptionConfigCommand };
//# sourceMappingURL=CreateFieldLevelEncryptionConfigCommand.js.map
