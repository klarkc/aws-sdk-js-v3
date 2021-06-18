import { __extends } from "tslib";
import { ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand,
  serializeAws_restXmlListFieldLevelEncryptionConfigsCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListFieldLevelEncryptionConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFieldLevelEncryptionConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFieldLevelEncryptionConfigsCommand = /** @class */ (function (_super) {
  __extends(ListFieldLevelEncryptionConfigsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListFieldLevelEncryptionConfigsCommand(input) {
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
  ListFieldLevelEncryptionConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListFieldLevelEncryptionConfigsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListFieldLevelEncryptionConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFieldLevelEncryptionConfigsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListFieldLevelEncryptionConfigsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListFieldLevelEncryptionConfigsCommand(input, context);
  };
  ListFieldLevelEncryptionConfigsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand(output, context);
  };
  return ListFieldLevelEncryptionConfigsCommand;
})($Command);
export { ListFieldLevelEncryptionConfigsCommand };
//# sourceMappingURL=ListFieldLevelEncryptionConfigsCommand.js.map
