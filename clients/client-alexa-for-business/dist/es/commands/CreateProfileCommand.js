import { __extends } from "tslib";
import { CreateProfileRequest, CreateProfileResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateProfileCommand,
  serializeAws_json1_1CreateProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new room profile with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProfileCommand = /** @class */ (function (_super) {
  __extends(CreateProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateProfileCommand(input) {
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
  CreateProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateProfileCommand(input, context);
  };
  CreateProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateProfileCommand(output, context);
  };
  return CreateProfileCommand;
})($Command);
export { CreateProfileCommand };
//# sourceMappingURL=CreateProfileCommand.js.map
