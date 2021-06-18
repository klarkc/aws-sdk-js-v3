import { __extends } from "tslib";
import { ListTypedLinkFacetAttributesRequest, ListTypedLinkFacetAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListTypedLinkFacetAttributesCommand,
  serializeAws_restJson1ListTypedLinkFacetAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListTypedLinkFacetAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListTypedLinkFacetAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListTypedLinkFacetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypedLinkFacetAttributesCommandInput} for command's `input` shape.
 * @see {@link ListTypedLinkFacetAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTypedLinkFacetAttributesCommand = /** @class */ (function (_super) {
  __extends(ListTypedLinkFacetAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTypedLinkFacetAttributesCommand(input) {
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
  ListTypedLinkFacetAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListTypedLinkFacetAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTypedLinkFacetAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypedLinkFacetAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTypedLinkFacetAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListTypedLinkFacetAttributesCommand(input, context);
  };
  ListTypedLinkFacetAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListTypedLinkFacetAttributesCommand(output, context);
  };
  return ListTypedLinkFacetAttributesCommand;
})($Command);
export { ListTypedLinkFacetAttributesCommand };
//# sourceMappingURL=ListTypedLinkFacetAttributesCommand.js.map
