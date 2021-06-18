import { __extends } from "tslib";
import { PutRoomSkillParameterRequest, PutRoomSkillParameterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutRoomSkillParameterCommand,
  serializeAws_json1_1PutRoomSkillParameterCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates room skill parameter details by room, skill, and parameter key ID. Not all
 *          skills have a room skill parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link PutRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRoomSkillParameterCommand = /** @class */ (function (_super) {
  __extends(PutRoomSkillParameterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutRoomSkillParameterCommand(input) {
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
  PutRoomSkillParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "PutRoomSkillParameterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutRoomSkillParameterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRoomSkillParameterResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutRoomSkillParameterCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutRoomSkillParameterCommand(input, context);
  };
  PutRoomSkillParameterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutRoomSkillParameterCommand(output, context);
  };
  return PutRoomSkillParameterCommand;
})($Command);
export { PutRoomSkillParameterCommand };
//# sourceMappingURL=PutRoomSkillParameterCommand.js.map
