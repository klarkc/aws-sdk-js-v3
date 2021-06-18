import { __extends } from "tslib";
import { GetRoomRequest, GetRoomResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRoomCommand,
  serializeAws_restJson1GetRoomCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoomCommandInput} for command's `input` shape.
 * @see {@link GetRoomCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRoomCommand = /** @class */ (function (_super) {
  __extends(GetRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRoomCommand(input) {
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
  GetRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRoomCommand(input, context);
  };
  GetRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRoomCommand(output, context);
  };
  return GetRoomCommand;
})($Command);
export { GetRoomCommand };
//# sourceMappingURL=GetRoomCommand.js.map
