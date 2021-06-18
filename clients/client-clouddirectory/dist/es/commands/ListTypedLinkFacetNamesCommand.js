import { __extends } from "tslib";
import { ListTypedLinkFacetNamesRequest, ListTypedLinkFacetNamesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListTypedLinkFacetNamesCommand,
  serializeAws_restJson1ListTypedLinkFacetNamesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of <code>TypedLink</code> facet names for a particular schema.
 *       For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListTypedLinkFacetNamesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListTypedLinkFacetNamesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListTypedLinkFacetNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypedLinkFacetNamesCommandInput} for command's `input` shape.
 * @see {@link ListTypedLinkFacetNamesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTypedLinkFacetNamesCommand = /** @class */ (function (_super) {
  __extends(ListTypedLinkFacetNamesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTypedLinkFacetNamesCommand(input) {
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
  ListTypedLinkFacetNamesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListTypedLinkFacetNamesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTypedLinkFacetNamesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypedLinkFacetNamesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTypedLinkFacetNamesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListTypedLinkFacetNamesCommand(input, context);
  };
  ListTypedLinkFacetNamesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListTypedLinkFacetNamesCommand(output, context);
  };
  return ListTypedLinkFacetNamesCommand;
})($Command);
export { ListTypedLinkFacetNamesCommand };
//# sourceMappingURL=ListTypedLinkFacetNamesCommand.js.map
