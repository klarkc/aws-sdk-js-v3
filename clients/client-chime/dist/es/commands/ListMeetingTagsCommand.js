import { __extends } from "tslib";
import { ListMeetingTagsRequest, ListMeetingTagsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListMeetingTagsCommand,
  serializeAws_restJson1ListMeetingTagsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingTagsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListMeetingTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListMeetingTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeetingTagsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMeetingTagsCommand = /** @class */ (function (_super) {
  __extends(ListMeetingTagsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListMeetingTagsCommand(input) {
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
  ListMeetingTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListMeetingTagsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListMeetingTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMeetingTagsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListMeetingTagsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListMeetingTagsCommand(input, context);
  };
  ListMeetingTagsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListMeetingTagsCommand(output, context);
  };
  return ListMeetingTagsCommand;
})($Command);
export { ListMeetingTagsCommand };
//# sourceMappingURL=ListMeetingTagsCommand.js.map
