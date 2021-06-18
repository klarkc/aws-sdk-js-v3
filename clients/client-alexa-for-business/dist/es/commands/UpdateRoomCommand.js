import { __extends } from "tslib";
import { UpdateRoomRequest, UpdateRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRoomCommand,
  serializeAws_json1_1UpdateRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates room details by room ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoomCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoomCommand = /** @class */ (function (_super) {
  __extends(UpdateRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRoomCommand(input) {
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
  UpdateRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateRoomCommand(input, context);
  };
  UpdateRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateRoomCommand(output, context);
  };
  return UpdateRoomCommand;
})($Command);
export { UpdateRoomCommand };
//# sourceMappingURL=UpdateRoomCommand.js.map
