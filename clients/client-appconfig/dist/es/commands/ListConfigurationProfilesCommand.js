import { __extends } from "tslib";
import { ConfigurationProfiles, ListConfigurationProfilesRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ListConfigurationProfilesCommand,
  serializeAws_restJson1ListConfigurationProfilesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the configuration profiles for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListConfigurationProfilesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListConfigurationProfilesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListConfigurationProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationProfilesCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationProfilesCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationProfilesCommand = /** @class */ (function (_super) {
  __extends(ListConfigurationProfilesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListConfigurationProfilesCommand(input) {
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
  ListConfigurationProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "ListConfigurationProfilesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListConfigurationProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfiles.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListConfigurationProfilesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListConfigurationProfilesCommand(input, context);
  };
  ListConfigurationProfilesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListConfigurationProfilesCommand(output, context);
  };
  return ListConfigurationProfilesCommand;
})($Command);
export { ListConfigurationProfilesCommand };
//# sourceMappingURL=ListConfigurationProfilesCommand.js.map
