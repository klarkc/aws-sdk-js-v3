import { __extends } from "tslib";
import { UpdateAppInstanceRequest, UpdateAppInstanceResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateAppInstanceCommand,
  serializeAws_restJson1UpdateAppInstanceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates <code>AppInstance</code> metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateAppInstanceCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateAppInstanceCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAppInstanceCommand = /** @class */ (function (_super) {
  __extends(UpdateAppInstanceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAppInstanceCommand(input) {
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
  UpdateAppInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateAppInstanceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAppInstanceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAppInstanceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAppInstanceCommand(input, context);
  };
  UpdateAppInstanceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAppInstanceCommand(output, context);
  };
  return UpdateAppInstanceCommand;
})($Command);
export { UpdateAppInstanceCommand };
//# sourceMappingURL=UpdateAppInstanceCommand.js.map
