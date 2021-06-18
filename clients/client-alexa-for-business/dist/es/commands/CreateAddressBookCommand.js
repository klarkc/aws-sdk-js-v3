import { __extends } from "tslib";
import { CreateAddressBookRequest, CreateAddressBookResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAddressBookCommand,
  serializeAws_json1_1CreateAddressBookCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an address book with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAddressBookCommandInput} for command's `input` shape.
 * @see {@link CreateAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAddressBookCommand = /** @class */ (function (_super) {
  __extends(CreateAddressBookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAddressBookCommand(input) {
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
  CreateAddressBookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateAddressBookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAddressBookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAddressBookResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAddressBookCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateAddressBookCommand(input, context);
  };
  CreateAddressBookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateAddressBookCommand(output, context);
  };
  return CreateAddressBookCommand;
})($Command);
export { CreateAddressBookCommand };
//# sourceMappingURL=CreateAddressBookCommand.js.map
