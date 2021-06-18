import { __extends } from "tslib";
import { AssociateContactWithAddressBookRequest, AssociateContactWithAddressBookResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateContactWithAddressBookCommand,
  serializeAws_json1_1AssociateContactWithAddressBookCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a contact with a given address book.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateContactWithAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateContactWithAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateContactWithAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateContactWithAddressBookCommandInput} for command's `input` shape.
 * @see {@link AssociateContactWithAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateContactWithAddressBookCommand = /** @class */ (function (_super) {
  __extends(AssociateContactWithAddressBookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateContactWithAddressBookCommand(input) {
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
  AssociateContactWithAddressBookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "AssociateContactWithAddressBookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateContactWithAddressBookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateContactWithAddressBookResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateContactWithAddressBookCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1AssociateContactWithAddressBookCommand(input, context);
  };
  AssociateContactWithAddressBookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1AssociateContactWithAddressBookCommand(output, context);
  };
  return AssociateContactWithAddressBookCommand;
})($Command);
export { AssociateContactWithAddressBookCommand };
//# sourceMappingURL=AssociateContactWithAddressBookCommand.js.map
