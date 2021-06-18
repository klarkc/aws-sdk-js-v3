import { __extends } from "tslib";
import { ListFacetAttributesRequest, ListFacetAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFacetAttributesCommand,
  serializeAws_restJson1ListFacetAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves attributes attached to the facet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListFacetAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListFacetAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListFacetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFacetAttributesCommandInput} for command's `input` shape.
 * @see {@link ListFacetAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFacetAttributesCommand = /** @class */ (function (_super) {
  __extends(ListFacetAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListFacetAttributesCommand(input) {
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
  ListFacetAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListFacetAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListFacetAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFacetAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListFacetAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListFacetAttributesCommand(input, context);
  };
  ListFacetAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListFacetAttributesCommand(output, context);
  };
  return ListFacetAttributesCommand;
})($Command);
export { ListFacetAttributesCommand };
//# sourceMappingURL=ListFacetAttributesCommand.js.map
