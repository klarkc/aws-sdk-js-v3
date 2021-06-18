import { __extends } from "tslib";
import { DeleteVirtualRouterInput, DeleteVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualRouterCommand,
  serializeAws_restJson1DeleteVirtualRouterCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing virtual router.</p>
 *          <p>You must delete any routes associated with the virtual router before you can delete the
 *          router itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVirtualRouterCommand = /** @class */ (function (_super) {
  __extends(DeleteVirtualRouterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVirtualRouterCommand(input) {
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
  DeleteVirtualRouterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DeleteVirtualRouterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualRouterOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVirtualRouterCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVirtualRouterCommand(input, context);
  };
  DeleteVirtualRouterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVirtualRouterCommand(output, context);
  };
  return DeleteVirtualRouterCommand;
})($Command);
export { DeleteVirtualRouterCommand };
//# sourceMappingURL=DeleteVirtualRouterCommand.js.map
