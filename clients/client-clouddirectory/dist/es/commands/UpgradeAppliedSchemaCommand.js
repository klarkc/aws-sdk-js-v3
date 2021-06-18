import { __extends } from "tslib";
import { UpgradeAppliedSchemaRequest, UpgradeAppliedSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpgradeAppliedSchemaCommand,
  serializeAws_restJson1UpgradeAppliedSchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpgradeAppliedSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpgradeAppliedSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpgradeAppliedSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpgradeAppliedSchemaCommandInput} for command's `input` shape.
 * @see {@link UpgradeAppliedSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpgradeAppliedSchemaCommand = /** @class */ (function (_super) {
  __extends(UpgradeAppliedSchemaCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpgradeAppliedSchemaCommand(input) {
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
  UpgradeAppliedSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "UpgradeAppliedSchemaCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpgradeAppliedSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpgradeAppliedSchemaResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpgradeAppliedSchemaCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpgradeAppliedSchemaCommand(input, context);
  };
  UpgradeAppliedSchemaCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpgradeAppliedSchemaCommand(output, context);
  };
  return UpgradeAppliedSchemaCommand;
})($Command);
export { UpgradeAppliedSchemaCommand };
//# sourceMappingURL=UpgradeAppliedSchemaCommand.js.map
