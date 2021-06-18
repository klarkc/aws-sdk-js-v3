import { __extends } from "tslib";
import { CreateContactRequest, CreateContactResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContactCommand,
  serializeAws_json1_1CreateContactCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a contact with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateContactCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateContactCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContactCommand = /** @class */ (function (_super) {
  __extends(CreateContactCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateContactCommand(input) {
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
  CreateContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateContactCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContactResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateContactCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateContactCommand(input, context);
  };
  CreateContactCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateContactCommand(output, context);
  };
  return CreateContactCommand;
})($Command);
export { CreateContactCommand };
//# sourceMappingURL=CreateContactCommand.js.map
