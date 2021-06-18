import { __extends } from "tslib";
import { ListPhoneNumberOrdersRequest, ListPhoneNumberOrdersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListPhoneNumberOrdersCommand,
  serializeAws_restJson1ListPhoneNumberOrdersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the phone number orders for the administrator's Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListPhoneNumberOrdersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListPhoneNumberOrdersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListPhoneNumberOrdersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumberOrdersCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumberOrdersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPhoneNumberOrdersCommand = /** @class */ (function (_super) {
  __extends(ListPhoneNumberOrdersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPhoneNumberOrdersCommand(input) {
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
  ListPhoneNumberOrdersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListPhoneNumberOrdersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPhoneNumberOrdersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPhoneNumberOrdersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPhoneNumberOrdersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListPhoneNumberOrdersCommand(input, context);
  };
  ListPhoneNumberOrdersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListPhoneNumberOrdersCommand(output, context);
  };
  return ListPhoneNumberOrdersCommand;
})($Command);
export { ListPhoneNumberOrdersCommand };
//# sourceMappingURL=ListPhoneNumberOrdersCommand.js.map
