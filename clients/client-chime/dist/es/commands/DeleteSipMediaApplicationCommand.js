import { __extends } from "tslib";
import { DeleteSipMediaApplicationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSipMediaApplicationCommand,
  serializeAws_restJson1DeleteSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSipMediaApplicationCommand = /** @class */ (function (_super) {
  __extends(DeleteSipMediaApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteSipMediaApplicationCommand(input) {
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
  DeleteSipMediaApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteSipMediaApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteSipMediaApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteSipMediaApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteSipMediaApplicationCommand(input, context);
  };
  DeleteSipMediaApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteSipMediaApplicationCommand(output, context);
  };
  return DeleteSipMediaApplicationCommand;
})($Command);
export { DeleteSipMediaApplicationCommand };
//# sourceMappingURL=DeleteSipMediaApplicationCommand.js.map
