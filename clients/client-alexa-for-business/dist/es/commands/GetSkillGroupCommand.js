import { __extends } from "tslib";
import { GetSkillGroupRequest, GetSkillGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetSkillGroupCommand,
  serializeAws_json1_1GetSkillGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets skill group details by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSkillGroupCommandInput} for command's `input` shape.
 * @see {@link GetSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSkillGroupCommand = /** @class */ (function (_super) {
  __extends(GetSkillGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSkillGroupCommand(input) {
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
  GetSkillGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "GetSkillGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSkillGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSkillGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSkillGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetSkillGroupCommand(input, context);
  };
  GetSkillGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetSkillGroupCommand(output, context);
  };
  return GetSkillGroupCommand;
})($Command);
export { GetSkillGroupCommand };
//# sourceMappingURL=GetSkillGroupCommand.js.map
