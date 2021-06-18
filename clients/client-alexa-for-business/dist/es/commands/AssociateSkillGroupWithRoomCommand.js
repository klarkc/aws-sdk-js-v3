import { __extends } from "tslib";
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateSkillGroupWithRoomCommand,
  serializeAws_json1_1AssociateSkillGroupWithRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a skill group with a given room. This enables all skills in the associated
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateSkillGroupWithRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSkillGroupWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillGroupWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSkillGroupWithRoomCommand = /** @class */ (function (_super) {
  __extends(AssociateSkillGroupWithRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateSkillGroupWithRoomCommand(input) {
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
  AssociateSkillGroupWithRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "AssociateSkillGroupWithRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateSkillGroupWithRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSkillGroupWithRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateSkillGroupWithRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1AssociateSkillGroupWithRoomCommand(input, context);
  };
  AssociateSkillGroupWithRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1AssociateSkillGroupWithRoomCommand(output, context);
  };
  return AssociateSkillGroupWithRoomCommand;
})($Command);
export { AssociateSkillGroupWithRoomCommand };
//# sourceMappingURL=AssociateSkillGroupWithRoomCommand.js.map
