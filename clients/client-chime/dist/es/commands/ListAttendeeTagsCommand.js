import { __extends } from "tslib";
import { ListAttendeeTagsRequest, ListAttendeeTagsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAttendeeTagsCommand,
  serializeAws_restJson1ListAttendeeTagsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAttendeeTagsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAttendeeTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAttendeeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttendeeTagsCommandInput} for command's `input` shape.
 * @see {@link ListAttendeeTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttendeeTagsCommand = /** @class */ (function (_super) {
  __extends(ListAttendeeTagsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAttendeeTagsCommand(input) {
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
  ListAttendeeTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListAttendeeTagsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAttendeeTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttendeeTagsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAttendeeTagsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAttendeeTagsCommand(input, context);
  };
  ListAttendeeTagsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAttendeeTagsCommand(output, context);
  };
  return ListAttendeeTagsCommand;
})($Command);
export { ListAttendeeTagsCommand };
//# sourceMappingURL=ListAttendeeTagsCommand.js.map
