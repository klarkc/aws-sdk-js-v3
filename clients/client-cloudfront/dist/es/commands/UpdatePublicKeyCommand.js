import { __extends } from "tslib";
import { UpdatePublicKeyRequest, UpdatePublicKeyResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdatePublicKeyCommand,
  serializeAws_restXmlUpdatePublicKeyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update public key information. Note that the only value you can change is the comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdatePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdatePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdatePublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePublicKeyCommand = /** @class */ (function (_super) {
  __extends(UpdatePublicKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdatePublicKeyCommand(input) {
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
  UpdatePublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdatePublicKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdatePublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePublicKeyResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdatePublicKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdatePublicKeyCommand(input, context);
  };
  UpdatePublicKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdatePublicKeyCommand(output, context);
  };
  return UpdatePublicKeyCommand;
})($Command);
export { UpdatePublicKeyCommand };
//# sourceMappingURL=UpdatePublicKeyCommand.js.map
