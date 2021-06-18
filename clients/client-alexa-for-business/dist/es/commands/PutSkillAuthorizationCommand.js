import { __extends } from "tslib";
import { PutSkillAuthorizationRequest, PutSkillAuthorizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutSkillAuthorizationCommand,
  serializeAws_json1_1PutSkillAuthorizationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Links a user's account to a third-party skill provider. If this API operation is
 *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
 *          skill must be owned by the AWS account that assumed the IAM role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutSkillAuthorizationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutSkillAuthorizationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutSkillAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSkillAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutSkillAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSkillAuthorizationCommand = /** @class */ (function (_super) {
  __extends(PutSkillAuthorizationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutSkillAuthorizationCommand(input) {
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
  PutSkillAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "PutSkillAuthorizationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutSkillAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSkillAuthorizationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutSkillAuthorizationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutSkillAuthorizationCommand(input, context);
  };
  PutSkillAuthorizationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutSkillAuthorizationCommand(output, context);
  };
  return PutSkillAuthorizationCommand;
})($Command);
export { PutSkillAuthorizationCommand };
//# sourceMappingURL=PutSkillAuthorizationCommand.js.map
