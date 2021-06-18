import { __extends } from "tslib";
import { ListPhoneNumbersRequest, ListPhoneNumbersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListPhoneNumbersCommand,
  serializeAws_restJson1ListPhoneNumbersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListPhoneNumbersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListPhoneNumbersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListPhoneNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPhoneNumbersCommand = /** @class */ (function (_super) {
  __extends(ListPhoneNumbersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPhoneNumbersCommand(input) {
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
  ListPhoneNumbersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListPhoneNumbersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPhoneNumbersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPhoneNumbersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPhoneNumbersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListPhoneNumbersCommand(input, context);
  };
  ListPhoneNumbersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListPhoneNumbersCommand(output, context);
  };
  return ListPhoneNumbersCommand;
})($Command);
export { ListPhoneNumbersCommand };
//# sourceMappingURL=ListPhoneNumbersCommand.js.map
