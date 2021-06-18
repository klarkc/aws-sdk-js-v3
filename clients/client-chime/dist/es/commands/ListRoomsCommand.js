import { __extends } from "tslib";
import { ListRoomsRequest, ListRoomsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListRoomsCommand,
  serializeAws_restJson1ListRoomsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListRoomsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListRoomsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListRoomsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoomsCommandInput} for command's `input` shape.
 * @see {@link ListRoomsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoomsCommand = /** @class */ (function (_super) {
  __extends(ListRoomsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListRoomsCommand(input) {
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
  ListRoomsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListRoomsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListRoomsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRoomsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListRoomsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListRoomsCommand(input, context);
  };
  ListRoomsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListRoomsCommand(output, context);
  };
  return ListRoomsCommand;
})($Command);
export { ListRoomsCommand };
//# sourceMappingURL=ListRoomsCommand.js.map
