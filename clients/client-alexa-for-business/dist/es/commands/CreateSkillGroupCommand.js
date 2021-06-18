import { __extends } from "tslib";
import { CreateSkillGroupRequest, CreateSkillGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSkillGroupCommand,
  serializeAws_json1_1CreateSkillGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a skill group with a specified name and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSkillGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSkillGroupCommand = /** @class */ (function (_super) {
  __extends(CreateSkillGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateSkillGroupCommand(input) {
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
  CreateSkillGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateSkillGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateSkillGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSkillGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateSkillGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateSkillGroupCommand(input, context);
  };
  CreateSkillGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateSkillGroupCommand(output, context);
  };
  return CreateSkillGroupCommand;
})($Command);
export { CreateSkillGroupCommand };
//# sourceMappingURL=CreateSkillGroupCommand.js.map
