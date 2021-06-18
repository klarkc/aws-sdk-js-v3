import { __extends } from "tslib";
import { ApproveSkillRequest, ApproveSkillResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ApproveSkillCommand,
  serializeAws_json1_1ApproveSkillCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a skill with the organization under the customer's AWS account. If a skill
 *          is private, the user implicitly accepts access to this skill during enablement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ApproveSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ApproveSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ApproveSkillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApproveSkillCommandInput} for command's `input` shape.
 * @see {@link ApproveSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApproveSkillCommand = /** @class */ (function (_super) {
  __extends(ApproveSkillCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ApproveSkillCommand(input) {
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
  ApproveSkillCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ApproveSkillCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ApproveSkillRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApproveSkillResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ApproveSkillCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ApproveSkillCommand(input, context);
  };
  ApproveSkillCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ApproveSkillCommand(output, context);
  };
  return ApproveSkillCommand;
})($Command);
export { ApproveSkillCommand };
//# sourceMappingURL=ApproveSkillCommand.js.map
