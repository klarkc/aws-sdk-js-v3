import { __extends } from "tslib";
import { RejectSkillRequest, RejectSkillResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RejectSkillCommand,
  serializeAws_json1_1RejectSkillCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a skill from the organization under a user's AWS account. If the skill
 *          is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill
 *          that is rejected can be added later by calling the ApproveSkill API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RejectSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RejectSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new RejectSkillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectSkillCommandInput} for command's `input` shape.
 * @see {@link RejectSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectSkillCommand = /** @class */ (function (_super) {
  __extends(RejectSkillCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RejectSkillCommand(input) {
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
  RejectSkillCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "RejectSkillCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RejectSkillRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectSkillResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RejectSkillCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RejectSkillCommand(input, context);
  };
  RejectSkillCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RejectSkillCommand(output, context);
  };
  return RejectSkillCommand;
})($Command);
export { RejectSkillCommand };
//# sourceMappingURL=RejectSkillCommand.js.map
