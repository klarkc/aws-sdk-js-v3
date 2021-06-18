import { __extends } from "tslib";
import { UpdateVirtualRouterInput, UpdateVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualRouterCommand,
  serializeAws_restJson1UpdateVirtualRouterCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing virtual router in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVirtualRouterCommand = /** @class */ (function (_super) {
  __extends(UpdateVirtualRouterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVirtualRouterCommand(input) {
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
  UpdateVirtualRouterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "UpdateVirtualRouterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualRouterOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVirtualRouterCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVirtualRouterCommand(input, context);
  };
  UpdateVirtualRouterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVirtualRouterCommand(output, context);
  };
  return UpdateVirtualRouterCommand;
})($Command);
export { UpdateVirtualRouterCommand };
//# sourceMappingURL=UpdateVirtualRouterCommand.js.map
