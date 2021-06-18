import { __extends } from "tslib";
import { DeleteAddressBookRequest, DeleteAddressBookResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAddressBookCommand,
  serializeAws_json1_1DeleteAddressBookCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an address book by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAddressBookCommandInput} for command's `input` shape.
 * @see {@link DeleteAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAddressBookCommand = /** @class */ (function (_super) {
  __extends(DeleteAddressBookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAddressBookCommand(input) {
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
  DeleteAddressBookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteAddressBookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAddressBookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAddressBookResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAddressBookCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteAddressBookCommand(input, context);
  };
  DeleteAddressBookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteAddressBookCommand(output, context);
  };
  return DeleteAddressBookCommand;
})($Command);
export { DeleteAddressBookCommand };
//# sourceMappingURL=DeleteAddressBookCommand.js.map
