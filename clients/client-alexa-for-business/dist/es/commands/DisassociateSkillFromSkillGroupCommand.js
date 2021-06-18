import { __extends } from "tslib";
import { DisassociateSkillFromSkillGroupRequest, DisassociateSkillFromSkillGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand,
  serializeAws_json1_1DisassociateSkillFromSkillGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a skill from a skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillFromSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillFromSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateSkillFromSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSkillFromSkillGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillFromSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSkillFromSkillGroupCommand = /** @class */ (function (_super) {
  __extends(DisassociateSkillFromSkillGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateSkillFromSkillGroupCommand(input) {
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
  DisassociateSkillFromSkillGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DisassociateSkillFromSkillGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateSkillFromSkillGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSkillFromSkillGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateSkillFromSkillGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisassociateSkillFromSkillGroupCommand(input, context);
  };
  DisassociateSkillFromSkillGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand(output, context);
  };
  return DisassociateSkillFromSkillGroupCommand;
})($Command);
export { DisassociateSkillFromSkillGroupCommand };
//# sourceMappingURL=DisassociateSkillFromSkillGroupCommand.js.map
