import { __extends } from "tslib";
import { DeleteTypedLinkFacetRequest, DeleteTypedLinkFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTypedLinkFacetCommand,
  serializeAws_restJson1DeleteTypedLinkFacetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DeleteTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DeleteTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DeleteTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link DeleteTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTypedLinkFacetCommand = /** @class */ (function (_super) {
  __extends(DeleteTypedLinkFacetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteTypedLinkFacetCommand(input) {
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
  DeleteTypedLinkFacetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DeleteTypedLinkFacetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteTypedLinkFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTypedLinkFacetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteTypedLinkFacetCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteTypedLinkFacetCommand(input, context);
  };
  DeleteTypedLinkFacetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteTypedLinkFacetCommand(output, context);
  };
  return DeleteTypedLinkFacetCommand;
})($Command);
export { DeleteTypedLinkFacetCommand };
//# sourceMappingURL=DeleteTypedLinkFacetCommand.js.map
