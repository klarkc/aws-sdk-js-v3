import { __extends } from "tslib";
import { ResetPersonalPINRequest, ResetPersonalPINResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ResetPersonalPINCommand,
  serializeAws_restJson1ResetPersonalPINCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns
 *             the <a>User</a> object with the updated personal meeting PIN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ResetPersonalPINCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ResetPersonalPINCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ResetPersonalPINCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetPersonalPINCommandInput} for command's `input` shape.
 * @see {@link ResetPersonalPINCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetPersonalPINCommand = /** @class */ (function (_super) {
  __extends(ResetPersonalPINCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ResetPersonalPINCommand(input) {
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
  ResetPersonalPINCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ResetPersonalPINCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ResetPersonalPINRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetPersonalPINResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ResetPersonalPINCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ResetPersonalPINCommand(input, context);
  };
  ResetPersonalPINCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ResetPersonalPINCommand(output, context);
  };
  return ResetPersonalPINCommand;
})($Command);
export { ResetPersonalPINCommand };
//# sourceMappingURL=ResetPersonalPINCommand.js.map
