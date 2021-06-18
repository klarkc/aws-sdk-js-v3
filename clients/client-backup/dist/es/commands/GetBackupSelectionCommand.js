import { __extends } from "tslib";
import { GetBackupSelectionInput, GetBackupSelectionOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupSelectionCommand,
  serializeAws_restJson1GetBackupSelectionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns selection metadata and a document in JSON format that specifies a list of
 *          resources that are associated with a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupSelectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link GetBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackupSelectionCommand = /** @class */ (function (_super) {
  __extends(GetBackupSelectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackupSelectionCommand(input) {
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
  GetBackupSelectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetBackupSelectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackupSelectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupSelectionOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackupSelectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackupSelectionCommand(input, context);
  };
  GetBackupSelectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackupSelectionCommand(output, context);
  };
  return GetBackupSelectionCommand;
})($Command);
export { GetBackupSelectionCommand };
//# sourceMappingURL=GetBackupSelectionCommand.js.map
