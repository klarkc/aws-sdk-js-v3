import { __extends } from "tslib";
import { UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEnvironmentMembershipCommand,
  serializeAws_json1_1UpdateEnvironmentMembershipCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the settings of an existing environment member for an AWS Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, UpdateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, UpdateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new UpdateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentMembershipCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEnvironmentMembershipCommand = /** @class */ (function (_super) {
  __extends(UpdateEnvironmentMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateEnvironmentMembershipCommand(input) {
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
  UpdateEnvironmentMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "UpdateEnvironmentMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateEnvironmentMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEnvironmentMembershipResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateEnvironmentMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateEnvironmentMembershipCommand(input, context);
  };
  UpdateEnvironmentMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateEnvironmentMembershipCommand(output, context);
  };
  return UpdateEnvironmentMembershipCommand;
})($Command);
export { UpdateEnvironmentMembershipCommand };
//# sourceMappingURL=UpdateEnvironmentMembershipCommand.js.map
