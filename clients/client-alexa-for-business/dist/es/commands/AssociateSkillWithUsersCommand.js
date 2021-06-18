import { __extends } from "tslib";
import { AssociateSkillWithUsersRequest, AssociateSkillWithUsersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateSkillWithUsersCommand,
  serializeAws_json1_1AssociateSkillWithUsersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillWithUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillWithUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateSkillWithUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSkillWithUsersCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillWithUsersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSkillWithUsersCommand = /** @class */ (function (_super) {
  __extends(AssociateSkillWithUsersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateSkillWithUsersCommand(input) {
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
  AssociateSkillWithUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "AssociateSkillWithUsersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateSkillWithUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSkillWithUsersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateSkillWithUsersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1AssociateSkillWithUsersCommand(input, context);
  };
  AssociateSkillWithUsersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1AssociateSkillWithUsersCommand(output, context);
  };
  return AssociateSkillWithUsersCommand;
})($Command);
export { AssociateSkillWithUsersCommand };
//# sourceMappingURL=AssociateSkillWithUsersCommand.js.map
