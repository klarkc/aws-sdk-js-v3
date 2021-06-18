import { __extends } from "tslib";
import { DeleteNetworkProfileRequest, DeleteNetworkProfileResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteNetworkProfileCommand,
  serializeAws_json1_1DeleteNetworkProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a network profile by the network profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkProfileCommand = /** @class */ (function (_super) {
  __extends(DeleteNetworkProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteNetworkProfileCommand(input) {
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
  DeleteNetworkProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteNetworkProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteNetworkProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteNetworkProfileCommand(input, context);
  };
  DeleteNetworkProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteNetworkProfileCommand(output, context);
  };
  return DeleteNetworkProfileCommand;
})($Command);
export { DeleteNetworkProfileCommand };
//# sourceMappingURL=DeleteNetworkProfileCommand.js.map
