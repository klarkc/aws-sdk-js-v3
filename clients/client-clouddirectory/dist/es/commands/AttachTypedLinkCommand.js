import { __extends } from "tslib";
import { AttachTypedLinkRequest, AttachTypedLinkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AttachTypedLinkCommand,
  serializeAws_restJson1AttachTypedLinkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachTypedLinkCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachTypedLinkCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AttachTypedLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachTypedLinkCommandInput} for command's `input` shape.
 * @see {@link AttachTypedLinkCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachTypedLinkCommand = /** @class */ (function (_super) {
  __extends(AttachTypedLinkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachTypedLinkCommand(input) {
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
  AttachTypedLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "AttachTypedLinkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachTypedLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachTypedLinkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachTypedLinkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AttachTypedLinkCommand(input, context);
  };
  AttachTypedLinkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AttachTypedLinkCommand(output, context);
  };
  return AttachTypedLinkCommand;
})($Command);
export { AttachTypedLinkCommand };
//# sourceMappingURL=AttachTypedLinkCommand.js.map
