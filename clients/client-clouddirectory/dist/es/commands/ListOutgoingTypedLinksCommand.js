import { __extends } from "tslib";
import { ListOutgoingTypedLinksRequest, ListOutgoingTypedLinksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListOutgoingTypedLinksCommand,
  serializeAws_restJson1ListOutgoingTypedLinksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListOutgoingTypedLinksCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListOutgoingTypedLinksCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListOutgoingTypedLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutgoingTypedLinksCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingTypedLinksCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOutgoingTypedLinksCommand = /** @class */ (function (_super) {
  __extends(ListOutgoingTypedLinksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListOutgoingTypedLinksCommand(input) {
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
  ListOutgoingTypedLinksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListOutgoingTypedLinksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListOutgoingTypedLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOutgoingTypedLinksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListOutgoingTypedLinksCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListOutgoingTypedLinksCommand(input, context);
  };
  ListOutgoingTypedLinksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListOutgoingTypedLinksCommand(output, context);
  };
  return ListOutgoingTypedLinksCommand;
})($Command);
export { ListOutgoingTypedLinksCommand };
//# sourceMappingURL=ListOutgoingTypedLinksCommand.js.map
