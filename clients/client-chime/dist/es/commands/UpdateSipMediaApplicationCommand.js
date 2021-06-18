import { __extends } from "tslib";
import { UpdateSipMediaApplicationRequest, UpdateSipMediaApplicationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateSipMediaApplicationCommand,
  serializeAws_restJson1UpdateSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details of the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSipMediaApplicationCommand = /** @class */ (function (_super) {
  __extends(UpdateSipMediaApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateSipMediaApplicationCommand(input) {
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
  UpdateSipMediaApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateSipMediaApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateSipMediaApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSipMediaApplicationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateSipMediaApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateSipMediaApplicationCommand(input, context);
  };
  UpdateSipMediaApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateSipMediaApplicationCommand(output, context);
  };
  return UpdateSipMediaApplicationCommand;
})($Command);
export { UpdateSipMediaApplicationCommand };
//# sourceMappingURL=UpdateSipMediaApplicationCommand.js.map
