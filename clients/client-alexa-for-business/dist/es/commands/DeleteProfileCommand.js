import { __extends } from "tslib";
import { DeleteProfileRequest, DeleteProfileResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteProfileCommand,
  serializeAws_json1_1DeleteProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a room profile by the profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProfileCommand = /** @class */ (function (_super) {
  __extends(DeleteProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteProfileCommand(input) {
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
  DeleteProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteProfileCommand(input, context);
  };
  DeleteProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteProfileCommand(output, context);
  };
  return DeleteProfileCommand;
})($Command);
export { DeleteProfileCommand };
//# sourceMappingURL=DeleteProfileCommand.js.map
