import { __extends } from "tslib";
import { DeleteVirtualServiceInput, DeleteVirtualServiceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualServiceCommand,
  serializeAws_restJson1DeleteVirtualServiceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing virtual service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVirtualServiceCommand = /** @class */ (function (_super) {
  __extends(DeleteVirtualServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVirtualServiceCommand(input) {
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
  DeleteVirtualServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DeleteVirtualServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVirtualServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualServiceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVirtualServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVirtualServiceCommand(input, context);
  };
  DeleteVirtualServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVirtualServiceCommand(output, context);
  };
  return DeleteVirtualServiceCommand;
})($Command);
export { DeleteVirtualServiceCommand };
//# sourceMappingURL=DeleteVirtualServiceCommand.js.map
