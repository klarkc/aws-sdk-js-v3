import { __extends } from "tslib";
import { GetRoomSkillParameterRequest, GetRoomSkillParameterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRoomSkillParameterCommand,
  serializeAws_json1_1GetRoomSkillParameterCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link GetRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRoomSkillParameterCommand = /** @class */ (function (_super) {
  __extends(GetRoomSkillParameterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRoomSkillParameterCommand(input) {
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
  GetRoomSkillParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "GetRoomSkillParameterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRoomSkillParameterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRoomSkillParameterResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRoomSkillParameterCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetRoomSkillParameterCommand(input, context);
  };
  GetRoomSkillParameterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetRoomSkillParameterCommand(output, context);
  };
  return GetRoomSkillParameterCommand;
})($Command);
export { GetRoomSkillParameterCommand };
//# sourceMappingURL=GetRoomSkillParameterCommand.js.map
