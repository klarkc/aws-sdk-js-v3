import { __extends } from "tslib";
import {
  DisassociateContactFromAddressBookRequest,
  DisassociateContactFromAddressBookResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateContactFromAddressBookCommand,
  serializeAws_json1_1DisassociateContactFromAddressBookCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a contact from a given address book.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateContactFromAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateContactFromAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateContactFromAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateContactFromAddressBookCommandInput} for command's `input` shape.
 * @see {@link DisassociateContactFromAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateContactFromAddressBookCommand = /** @class */ (function (_super) {
  __extends(DisassociateContactFromAddressBookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateContactFromAddressBookCommand(input) {
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
  DisassociateContactFromAddressBookCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DisassociateContactFromAddressBookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateContactFromAddressBookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateContactFromAddressBookResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateContactFromAddressBookCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisassociateContactFromAddressBookCommand(input, context);
  };
  DisassociateContactFromAddressBookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisassociateContactFromAddressBookCommand(output, context);
  };
  return DisassociateContactFromAddressBookCommand;
})($Command);
export { DisassociateContactFromAddressBookCommand };
//# sourceMappingURL=DisassociateContactFromAddressBookCommand.js.map
