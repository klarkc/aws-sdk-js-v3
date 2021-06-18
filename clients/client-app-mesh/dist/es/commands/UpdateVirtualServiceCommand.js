import { __extends } from "tslib";
import { UpdateVirtualServiceInput, UpdateVirtualServiceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualServiceCommand,
  serializeAws_restJson1UpdateVirtualServiceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing virtual service in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVirtualServiceCommand = /** @class */ (function (_super) {
  __extends(UpdateVirtualServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVirtualServiceCommand(input) {
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
  UpdateVirtualServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "UpdateVirtualServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVirtualServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualServiceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVirtualServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVirtualServiceCommand(input, context);
  };
  UpdateVirtualServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVirtualServiceCommand(output, context);
  };
  return UpdateVirtualServiceCommand;
})($Command);
export { UpdateVirtualServiceCommand };
//# sourceMappingURL=UpdateVirtualServiceCommand.js.map
