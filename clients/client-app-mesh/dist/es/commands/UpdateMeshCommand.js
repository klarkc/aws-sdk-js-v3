import { __extends } from "tslib";
import { UpdateMeshInput, UpdateMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMeshCommand,
  serializeAws_restJson1UpdateMeshCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMeshCommandInput} for command's `input` shape.
 * @see {@link UpdateMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMeshCommand = /** @class */ (function (_super) {
  __extends(UpdateMeshCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateMeshCommand(input) {
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
  UpdateMeshCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "UpdateMeshCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMeshOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateMeshCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateMeshCommand(input, context);
  };
  UpdateMeshCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateMeshCommand(output, context);
  };
  return UpdateMeshCommand;
})($Command);
export { UpdateMeshCommand };
//# sourceMappingURL=UpdateMeshCommand.js.map
