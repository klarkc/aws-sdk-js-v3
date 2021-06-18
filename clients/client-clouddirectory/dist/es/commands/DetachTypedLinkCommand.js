import { __extends } from "tslib";
import { DetachTypedLinkRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DetachTypedLinkCommand,
  serializeAws_restJson1DetachTypedLinkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DetachTypedLinkCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DetachTypedLinkCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DetachTypedLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachTypedLinkCommandInput} for command's `input` shape.
 * @see {@link DetachTypedLinkCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachTypedLinkCommand = /** @class */ (function (_super) {
  __extends(DetachTypedLinkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachTypedLinkCommand(input) {
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
  DetachTypedLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DetachTypedLinkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachTypedLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachTypedLinkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DetachTypedLinkCommand(input, context);
  };
  DetachTypedLinkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DetachTypedLinkCommand(output, context);
  };
  return DetachTypedLinkCommand;
})($Command);
export { DetachTypedLinkCommand };
//# sourceMappingURL=DetachTypedLinkCommand.js.map
