import { __extends } from "tslib";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateProfileCommand,
  serializeAws_json1_1UpdateProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing room profile by room profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProfileCommand = /** @class */ (function (_super) {
  __extends(UpdateProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateProfileCommand(input) {
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
  UpdateProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateProfileCommand(input, context);
  };
  UpdateProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateProfileCommand(output, context);
  };
  return UpdateProfileCommand;
})($Command);
export { UpdateProfileCommand };
//# sourceMappingURL=UpdateProfileCommand.js.map
