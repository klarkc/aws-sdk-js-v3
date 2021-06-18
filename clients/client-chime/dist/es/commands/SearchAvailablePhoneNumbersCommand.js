import { __extends } from "tslib";
import { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1SearchAvailablePhoneNumbersCommand,
  serializeAws_restJson1SearchAvailablePhoneNumbersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for phone numbers that can be ordered. For
 *             US
 *             numbers, provide at least one of the following search filters: <code>AreaCode</code>,
 *                 <code>City</code>, <code>State</code>, or <code>TollFreePrefix</code>. If you
 *             provide <code>City</code>, you must also provide <code>State</code>. Numbers outside the
 *             US
 *             only support the <code>PhoneNumberType</code> filter, which you must use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, SearchAvailablePhoneNumbersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, SearchAvailablePhoneNumbersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new SearchAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link SearchAvailablePhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchAvailablePhoneNumbersCommand = /** @class */ (function (_super) {
  __extends(SearchAvailablePhoneNumbersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchAvailablePhoneNumbersCommand(input) {
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
  SearchAvailablePhoneNumbersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "SearchAvailablePhoneNumbersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchAvailablePhoneNumbersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchAvailablePhoneNumbersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchAvailablePhoneNumbersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1SearchAvailablePhoneNumbersCommand(input, context);
  };
  SearchAvailablePhoneNumbersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1SearchAvailablePhoneNumbersCommand(output, context);
  };
  return SearchAvailablePhoneNumbersCommand;
})($Command);
export { SearchAvailablePhoneNumbersCommand };
//# sourceMappingURL=SearchAvailablePhoneNumbersCommand.js.map
