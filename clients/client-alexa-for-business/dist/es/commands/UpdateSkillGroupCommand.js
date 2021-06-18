import { __extends } from "tslib";
import { UpdateSkillGroupRequest, UpdateSkillGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSkillGroupCommand,
  serializeAws_json1_1UpdateSkillGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates skill group details by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSkillGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSkillGroupCommand = /** @class */ (function (_super) {
  __extends(UpdateSkillGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateSkillGroupCommand(input) {
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
  UpdateSkillGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateSkillGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateSkillGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSkillGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateSkillGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateSkillGroupCommand(input, context);
  };
  UpdateSkillGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateSkillGroupCommand(output, context);
  };
  return UpdateSkillGroupCommand;
})($Command);
export { UpdateSkillGroupCommand };
//# sourceMappingURL=UpdateSkillGroupCommand.js.map
