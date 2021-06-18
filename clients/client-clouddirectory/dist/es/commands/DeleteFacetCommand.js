import { __extends } from "tslib";
import { DeleteFacetRequest, DeleteFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFacetCommand,
  serializeAws_restJson1DeleteFacetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s
 *       that are associated with the facet will be deleted. Only development schema facets are allowed
 *       deletion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DeleteFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DeleteFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DeleteFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFacetCommandInput} for command's `input` shape.
 * @see {@link DeleteFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFacetCommand = /** @class */ (function (_super) {
  __extends(DeleteFacetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteFacetCommand(input) {
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
  DeleteFacetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DeleteFacetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFacetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteFacetCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteFacetCommand(input, context);
  };
  DeleteFacetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteFacetCommand(output, context);
  };
  return DeleteFacetCommand;
})($Command);
export { DeleteFacetCommand };
//# sourceMappingURL=DeleteFacetCommand.js.map
