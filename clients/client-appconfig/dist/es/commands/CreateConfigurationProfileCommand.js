import { __extends } from "tslib";
import { ConfigurationProfile, CreateConfigurationProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateConfigurationProfileCommand,
  serializeAws_restJson1CreateConfigurationProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information that enables AppConfig to access the configuration source. Valid
 *          configuration sources include Systems Manager (SSM) documents, SSM Parameter Store parameters, and
 *          Amazon S3 objects. A configuration profile includes the following information.</p>
 *          <ul>
 *             <li>
 *                <p>The Uri location of the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>The AWS Identity and Access Management (IAM) role that provides access to the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>A validator for the configuration data. Available validators include either a JSON
 *                Schema or an AWS Lambda function.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
 *             Configuration and a Configuration Profile</a> in the
 *             <i>AWS AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConfigurationProfileCommand = /** @class */ (function (_super) {
  __extends(CreateConfigurationProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateConfigurationProfileCommand(input) {
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
  CreateConfigurationProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "CreateConfigurationProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateConfigurationProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfile.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateConfigurationProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateConfigurationProfileCommand(input, context);
  };
  CreateConfigurationProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateConfigurationProfileCommand(output, context);
  };
  return CreateConfigurationProfileCommand;
})($Command);
export { CreateConfigurationProfileCommand };
//# sourceMappingURL=CreateConfigurationProfileCommand.js.map
