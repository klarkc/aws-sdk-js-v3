import { __extends } from "tslib";
import {
  ListSupportedPhoneNumberCountriesRequest,
  ListSupportedPhoneNumberCountriesResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand,
  serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists supported phone number countries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSupportedPhoneNumberCountriesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSupportedPhoneNumberCountriesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListSupportedPhoneNumberCountriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSupportedPhoneNumberCountriesCommandInput} for command's `input` shape.
 * @see {@link ListSupportedPhoneNumberCountriesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSupportedPhoneNumberCountriesCommand = /** @class */ (function (_super) {
  __extends(ListSupportedPhoneNumberCountriesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListSupportedPhoneNumberCountriesCommand(input) {
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
  ListSupportedPhoneNumberCountriesCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListSupportedPhoneNumberCountriesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListSupportedPhoneNumberCountriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSupportedPhoneNumberCountriesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListSupportedPhoneNumberCountriesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand(input, context);
  };
  ListSupportedPhoneNumberCountriesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand(output, context);
  };
  return ListSupportedPhoneNumberCountriesCommand;
})($Command);
export { ListSupportedPhoneNumberCountriesCommand };
//# sourceMappingURL=ListSupportedPhoneNumberCountriesCommand.js.map
