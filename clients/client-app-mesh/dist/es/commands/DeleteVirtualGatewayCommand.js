import { __extends } from "tslib";
import { DeleteVirtualGatewayInput, DeleteVirtualGatewayOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualGatewayCommand,
  serializeAws_restJson1DeleteVirtualGatewayCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway
 *          routes are associated to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVirtualGatewayCommand = /** @class */ (function (_super) {
  __extends(DeleteVirtualGatewayCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVirtualGatewayCommand(input) {
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
  DeleteVirtualGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DeleteVirtualGatewayCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualGatewayOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVirtualGatewayCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVirtualGatewayCommand(input, context);
  };
  DeleteVirtualGatewayCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVirtualGatewayCommand(output, context);
  };
  return DeleteVirtualGatewayCommand;
})($Command);
export { DeleteVirtualGatewayCommand };
//# sourceMappingURL=DeleteVirtualGatewayCommand.js.map
