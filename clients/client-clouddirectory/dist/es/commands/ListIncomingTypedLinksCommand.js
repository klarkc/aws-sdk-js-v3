import { __extends } from "tslib";
import { ListIncomingTypedLinksRequest, ListIncomingTypedLinksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIncomingTypedLinksCommand,
  serializeAws_restJson1ListIncomingTypedLinksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListIncomingTypedLinksCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListIncomingTypedLinksCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListIncomingTypedLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIncomingTypedLinksCommandInput} for command's `input` shape.
 * @see {@link ListIncomingTypedLinksCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIncomingTypedLinksCommand = /** @class */ (function (_super) {
  __extends(ListIncomingTypedLinksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListIncomingTypedLinksCommand(input) {
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
  ListIncomingTypedLinksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListIncomingTypedLinksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListIncomingTypedLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIncomingTypedLinksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListIncomingTypedLinksCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListIncomingTypedLinksCommand(input, context);
  };
  ListIncomingTypedLinksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListIncomingTypedLinksCommand(output, context);
  };
  return ListIncomingTypedLinksCommand;
})($Command);
export { ListIncomingTypedLinksCommand };
//# sourceMappingURL=ListIncomingTypedLinksCommand.js.map
