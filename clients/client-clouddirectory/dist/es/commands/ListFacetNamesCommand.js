import { __extends } from "tslib";
import { ListFacetNamesRequest, ListFacetNamesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFacetNamesCommand,
  serializeAws_restJson1ListFacetNamesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the names of facets that exist in a schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListFacetNamesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListFacetNamesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListFacetNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFacetNamesCommandInput} for command's `input` shape.
 * @see {@link ListFacetNamesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFacetNamesCommand = /** @class */ (function (_super) {
  __extends(ListFacetNamesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListFacetNamesCommand(input) {
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
  ListFacetNamesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListFacetNamesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListFacetNamesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFacetNamesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListFacetNamesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListFacetNamesCommand(input, context);
  };
  ListFacetNamesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListFacetNamesCommand(output, context);
  };
  return ListFacetNamesCommand;
})($Command);
export { ListFacetNamesCommand };
//# sourceMappingURL=ListFacetNamesCommand.js.map
