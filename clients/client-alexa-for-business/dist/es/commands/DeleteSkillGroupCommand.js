import { __extends } from "tslib";
import { DeleteSkillGroupRequest, DeleteSkillGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSkillGroupCommand,
  serializeAws_json1_1DeleteSkillGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a skill group by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSkillGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSkillGroupCommand = /** @class */ (function (_super) {
  __extends(DeleteSkillGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteSkillGroupCommand(input) {
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
  DeleteSkillGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteSkillGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteSkillGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSkillGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteSkillGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteSkillGroupCommand(input, context);
  };
  DeleteSkillGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteSkillGroupCommand(output, context);
  };
  return DeleteSkillGroupCommand;
})($Command);
export { DeleteSkillGroupCommand };
//# sourceMappingURL=DeleteSkillGroupCommand.js.map
