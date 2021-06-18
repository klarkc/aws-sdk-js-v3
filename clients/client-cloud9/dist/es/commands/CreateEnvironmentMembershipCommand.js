import { __extends } from "tslib";
import { CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEnvironmentMembershipCommand,
  serializeAws_json1_1CreateEnvironmentMembershipCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an environment member to an AWS Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new CreateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentMembershipCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEnvironmentMembershipCommand = /** @class */ (function (_super) {
  __extends(CreateEnvironmentMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateEnvironmentMembershipCommand(input) {
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
  CreateEnvironmentMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "CreateEnvironmentMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateEnvironmentMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentMembershipResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateEnvironmentMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateEnvironmentMembershipCommand(input, context);
  };
  CreateEnvironmentMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateEnvironmentMembershipCommand(output, context);
  };
  return CreateEnvironmentMembershipCommand;
})($Command);
export { CreateEnvironmentMembershipCommand };
//# sourceMappingURL=CreateEnvironmentMembershipCommand.js.map
