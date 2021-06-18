import { __extends } from "tslib";
import { DisassociateSkillGroupFromRoomRequest, DisassociateSkillGroupFromRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand,
  serializeAws_json1_1DisassociateSkillGroupFromRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a skill group from a specified room. This disables all skills in the
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillGroupFromRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillGroupFromRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateSkillGroupFromRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSkillGroupFromRoomCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillGroupFromRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSkillGroupFromRoomCommand = /** @class */ (function (_super) {
  __extends(DisassociateSkillGroupFromRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateSkillGroupFromRoomCommand(input) {
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
  DisassociateSkillGroupFromRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DisassociateSkillGroupFromRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateSkillGroupFromRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSkillGroupFromRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateSkillGroupFromRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisassociateSkillGroupFromRoomCommand(input, context);
  };
  DisassociateSkillGroupFromRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand(output, context);
  };
  return DisassociateSkillGroupFromRoomCommand;
})($Command);
export { DisassociateSkillGroupFromRoomCommand };
//# sourceMappingURL=DisassociateSkillGroupFromRoomCommand.js.map
