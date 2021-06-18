import { __extends } from "tslib";
import { UpdateAddressBookRequest, UpdateAddressBookResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAddressBookCommand,
  serializeAws_json1_1UpdateAddressBookCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates address book details by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAddressBookCommandInput} for command's `input` shape.
 * @see {@link UpdateAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAddressBookCommand = /** @class */ (function (_super) {
  __extends(UpdateAddressBookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAddressBookCommand(input) {
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
  UpdateAddressBookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateAddressBookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAddressBookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAddressBookResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAddressBookCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateAddressBookCommand(input, context);
  };
  UpdateAddressBookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateAddressBookCommand(output, context);
  };
  return UpdateAddressBookCommand;
})($Command);
export { UpdateAddressBookCommand };
//# sourceMappingURL=UpdateAddressBookCommand.js.map
