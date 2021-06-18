import { __extends } from "tslib";
import { Environment, GetEnvironmentRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetEnvironmentCommand,
  serializeAws_restJson1GetEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve information about an environment. An environment is a logical deployment group
 *          of AppConfig applications, such as applications in a <code>Production</code> environment or
 *          in an <code>EU_Region</code> environment. Each configuration deployment targets an
 *          environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is
 *          triggered during a deployment, AppConfig roles back the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetEnvironmentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetEnvironmentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEnvironmentCommand = /** @class */ (function (_super) {
  __extends(GetEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEnvironmentCommand(input) {
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
  GetEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "GetEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Environment.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEnvironmentCommand(input, context);
  };
  GetEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEnvironmentCommand(output, context);
  };
  return GetEnvironmentCommand;
})($Command);
export { GetEnvironmentCommand };
//# sourceMappingURL=GetEnvironmentCommand.js.map
