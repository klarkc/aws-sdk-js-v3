import { __extends } from "tslib";
import { UpdateVirtualGatewayInput, UpdateVirtualGatewayOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualGatewayCommand,
  serializeAws_restJson1UpdateVirtualGatewayCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing virtual gateway in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVirtualGatewayCommand = /** @class */ (function (_super) {
  __extends(UpdateVirtualGatewayCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVirtualGatewayCommand(input) {
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
  UpdateVirtualGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "UpdateVirtualGatewayCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualGatewayOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVirtualGatewayCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVirtualGatewayCommand(input, context);
  };
  UpdateVirtualGatewayCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVirtualGatewayCommand(output, context);
  };
  return UpdateVirtualGatewayCommand;
})($Command);
export { UpdateVirtualGatewayCommand };
//# sourceMappingURL=UpdateVirtualGatewayCommand.js.map
