import { __extends } from "tslib";
import { UpdateTypedLinkFacetRequest, UpdateTypedLinkFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateTypedLinkFacetCommand,
  serializeAws_restJson1UpdateTypedLinkFacetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpdateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link UpdateTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTypedLinkFacetCommand = /** @class */ (function (_super) {
  __extends(UpdateTypedLinkFacetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateTypedLinkFacetCommand(input) {
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
  UpdateTypedLinkFacetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "UpdateTypedLinkFacetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateTypedLinkFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTypedLinkFacetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateTypedLinkFacetCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateTypedLinkFacetCommand(input, context);
  };
  UpdateTypedLinkFacetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateTypedLinkFacetCommand(output, context);
  };
  return UpdateTypedLinkFacetCommand;
})($Command);
export { UpdateTypedLinkFacetCommand };
//# sourceMappingURL=UpdateTypedLinkFacetCommand.js.map
