import { __extends } from "tslib";
import { DeletePublicKeyRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeletePublicKeyCommand,
  serializeAws_restXmlDeletePublicKeyCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove a public key you previously added to CloudFront.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeletePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeletePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeletePublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeletePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePublicKeyCommand = /** @class */ (function (_super) {
  __extends(DeletePublicKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeletePublicKeyCommand(input) {
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
  DeletePublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeletePublicKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeletePublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeletePublicKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeletePublicKeyCommand(input, context);
  };
  DeletePublicKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeletePublicKeyCommand(output, context);
  };
  return DeletePublicKeyCommand;
})($Command);
export { DeletePublicKeyCommand };
//# sourceMappingURL=DeletePublicKeyCommand.js.map
