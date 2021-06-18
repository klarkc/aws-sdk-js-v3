import { __extends } from "tslib";
import { GetSipMediaApplicationRequest, GetSipMediaApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSipMediaApplicationCommand,
  serializeAws_restJson1GetSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSipMediaApplicationCommand = /** @class */ (function (_super) {
  __extends(GetSipMediaApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSipMediaApplicationCommand(input) {
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
  GetSipMediaApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetSipMediaApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSipMediaApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSipMediaApplicationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSipMediaApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSipMediaApplicationCommand(input, context);
  };
  GetSipMediaApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSipMediaApplicationCommand(output, context);
  };
  return GetSipMediaApplicationCommand;
})($Command);
export { GetSipMediaApplicationCommand };
//# sourceMappingURL=GetSipMediaApplicationCommand.js.map
