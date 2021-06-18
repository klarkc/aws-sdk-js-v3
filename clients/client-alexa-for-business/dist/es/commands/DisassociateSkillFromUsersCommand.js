import { __extends } from "tslib";
import { DisassociateSkillFromUsersRequest, DisassociateSkillFromUsersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateSkillFromUsersCommand,
  serializeAws_json1_1DisassociateSkillFromUsersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Makes a private skill unavailable for enrolled users and prevents them from enabling it
 *          on their devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillFromUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillFromUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateSkillFromUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSkillFromUsersCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillFromUsersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSkillFromUsersCommand = /** @class */ (function (_super) {
  __extends(DisassociateSkillFromUsersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateSkillFromUsersCommand(input) {
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
  DisassociateSkillFromUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DisassociateSkillFromUsersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateSkillFromUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSkillFromUsersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateSkillFromUsersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisassociateSkillFromUsersCommand(input, context);
  };
  DisassociateSkillFromUsersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisassociateSkillFromUsersCommand(output, context);
  };
  return DisassociateSkillFromUsersCommand;
})($Command);
export { DisassociateSkillFromUsersCommand };
//# sourceMappingURL=DisassociateSkillFromUsersCommand.js.map
