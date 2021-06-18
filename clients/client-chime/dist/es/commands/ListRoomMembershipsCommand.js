import { __extends } from "tslib";
import { ListRoomMembershipsRequest, ListRoomMembershipsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListRoomMembershipsCommand,
  serializeAws_restJson1ListRoomMembershipsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account,
 *             such as the members' IDs, email addresses, and names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListRoomMembershipsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListRoomMembershipsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListRoomMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoomMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListRoomMembershipsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoomMembershipsCommand = /** @class */ (function (_super) {
  __extends(ListRoomMembershipsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListRoomMembershipsCommand(input) {
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
  ListRoomMembershipsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListRoomMembershipsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListRoomMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRoomMembershipsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListRoomMembershipsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListRoomMembershipsCommand(input, context);
  };
  ListRoomMembershipsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListRoomMembershipsCommand(output, context);
  };
  return ListRoomMembershipsCommand;
})($Command);
export { ListRoomMembershipsCommand };
//# sourceMappingURL=ListRoomMembershipsCommand.js.map
