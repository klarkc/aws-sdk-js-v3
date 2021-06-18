import { __extends } from "tslib";
import { UpgradePublishedSchemaRequest, UpgradePublishedSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpgradePublishedSchemaCommand,
  serializeAws_restJson1UpgradePublishedSchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpgradePublishedSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpgradePublishedSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpgradePublishedSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpgradePublishedSchemaCommandInput} for command's `input` shape.
 * @see {@link UpgradePublishedSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpgradePublishedSchemaCommand = /** @class */ (function (_super) {
  __extends(UpgradePublishedSchemaCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpgradePublishedSchemaCommand(input) {
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
  UpgradePublishedSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "UpgradePublishedSchemaCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpgradePublishedSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpgradePublishedSchemaResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpgradePublishedSchemaCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpgradePublishedSchemaCommand(input, context);
  };
  UpgradePublishedSchemaCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpgradePublishedSchemaCommand(output, context);
  };
  return UpgradePublishedSchemaCommand;
})($Command);
export { UpgradePublishedSchemaCommand };
//# sourceMappingURL=UpgradePublishedSchemaCommand.js.map
