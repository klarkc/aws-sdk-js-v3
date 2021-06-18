import { __extends } from "tslib";
import { HostedConfigurationVersions, ListHostedConfigurationVersionsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ListHostedConfigurationVersionsCommand,
  serializeAws_restJson1ListHostedConfigurationVersionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>View a list of configurations stored in the AppConfig configuration store by
 *          version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListHostedConfigurationVersionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListHostedConfigurationVersionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedConfigurationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHostedConfigurationVersionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHostedConfigurationVersionsCommand = /** @class */ (function (_super) {
  __extends(ListHostedConfigurationVersionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListHostedConfigurationVersionsCommand(input) {
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
  ListHostedConfigurationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "ListHostedConfigurationVersionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListHostedConfigurationVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersions.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListHostedConfigurationVersionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListHostedConfigurationVersionsCommand(input, context);
  };
  ListHostedConfigurationVersionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListHostedConfigurationVersionsCommand(output, context);
  };
  return ListHostedConfigurationVersionsCommand;
})($Command);
export { ListHostedConfigurationVersionsCommand };
//# sourceMappingURL=ListHostedConfigurationVersionsCommand.js.map
