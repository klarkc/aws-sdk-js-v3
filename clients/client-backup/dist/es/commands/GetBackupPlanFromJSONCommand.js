import { __extends } from "tslib";
import { GetBackupPlanFromJSONInput, GetBackupPlanFromJSONOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupPlanFromJSONCommand,
  serializeAws_restJson1GetBackupPlanFromJSONCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a valid JSON document specifying a backup plan or an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromJSONCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromJSONCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupPlanFromJSONCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupPlanFromJSONCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromJSONCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackupPlanFromJSONCommand = /** @class */ (function (_super) {
  __extends(GetBackupPlanFromJSONCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackupPlanFromJSONCommand(input) {
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
  GetBackupPlanFromJSONCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetBackupPlanFromJSONCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackupPlanFromJSONInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupPlanFromJSONOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackupPlanFromJSONCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackupPlanFromJSONCommand(input, context);
  };
  GetBackupPlanFromJSONCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackupPlanFromJSONCommand(output, context);
  };
  return GetBackupPlanFromJSONCommand;
})($Command);
export { GetBackupPlanFromJSONCommand };
//# sourceMappingURL=GetBackupPlanFromJSONCommand.js.map
