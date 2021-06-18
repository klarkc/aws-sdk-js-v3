import { __extends } from "tslib";
import { DeleteMeshInput, DeleteMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMeshCommand,
  serializeAws_restJson1DeleteMeshCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing service mesh.</p>
 *          <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
 *          nodes) in the service mesh before you can delete the mesh itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMeshCommandInput} for command's `input` shape.
 * @see {@link DeleteMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMeshCommand = /** @class */ (function (_super) {
  __extends(DeleteMeshCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteMeshCommand(input) {
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
  DeleteMeshCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DeleteMeshCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMeshOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteMeshCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteMeshCommand(input, context);
  };
  DeleteMeshCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteMeshCommand(output, context);
  };
  return DeleteMeshCommand;
})($Command);
export { DeleteMeshCommand };
//# sourceMappingURL=DeleteMeshCommand.js.map
