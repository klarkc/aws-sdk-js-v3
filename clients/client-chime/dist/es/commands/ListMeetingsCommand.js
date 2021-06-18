import { __extends } from "tslib";
import { ListMeetingsRequest, ListMeetingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListMeetingsCommand,
  serializeAws_restJson1ListMeetingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListMeetingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListMeetingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeetingsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMeetingsCommand = /** @class */ (function (_super) {
  __extends(ListMeetingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListMeetingsCommand(input) {
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
  ListMeetingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListMeetingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListMeetingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMeetingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListMeetingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListMeetingsCommand(input, context);
  };
  ListMeetingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListMeetingsCommand(output, context);
  };
  return ListMeetingsCommand;
})($Command);
export { ListMeetingsCommand };
//# sourceMappingURL=ListMeetingsCommand.js.map
