import { __extends } from "tslib";
import { UpdateFacetRequest, UpdateFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFacetCommand,
  serializeAws_restJson1UpdateFacetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Does the following:</p>
 *          <ol>
 *             <li>
 *                <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
 *             </li>
 *             <li>
 *                <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
 *             </li>
 *             <li>
 *                <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpdateFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFacetCommandInput} for command's `input` shape.
 * @see {@link UpdateFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFacetCommand = /** @class */ (function (_super) {
  __extends(UpdateFacetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateFacetCommand(input) {
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
  UpdateFacetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "UpdateFacetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFacetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateFacetCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateFacetCommand(input, context);
  };
  UpdateFacetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateFacetCommand(output, context);
  };
  return UpdateFacetCommand;
})($Command);
export { UpdateFacetCommand };
//# sourceMappingURL=UpdateFacetCommand.js.map
