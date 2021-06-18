import { __extends } from "tslib";
import { UpdateVirtualNodeInput, UpdateVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualNodeCommand,
  serializeAws_restJson1UpdateVirtualNodeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing virtual node in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVirtualNodeCommand = /** @class */ (function (_super) {
  __extends(UpdateVirtualNodeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVirtualNodeCommand(input) {
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
  UpdateVirtualNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "UpdateVirtualNodeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualNodeOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVirtualNodeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVirtualNodeCommand(input, context);
  };
  UpdateVirtualNodeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVirtualNodeCommand(output, context);
  };
  return UpdateVirtualNodeCommand;
})($Command);
export { UpdateVirtualNodeCommand };
//# sourceMappingURL=UpdateVirtualNodeCommand.js.map
