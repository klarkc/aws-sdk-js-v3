import { __extends } from "tslib";
import { GetRecoveryPointRestoreMetadataInput, GetRecoveryPointRestoreMetadataOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand,
  serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a set of metadata key-value pairs that were used to create the backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRecoveryPointRestoreMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRecoveryPointRestoreMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetRecoveryPointRestoreMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecoveryPointRestoreMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPointRestoreMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecoveryPointRestoreMetadataCommand = /** @class */ (function (_super) {
  __extends(GetRecoveryPointRestoreMetadataCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRecoveryPointRestoreMetadataCommand(input) {
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
  GetRecoveryPointRestoreMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetRecoveryPointRestoreMetadataCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRecoveryPointRestoreMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetRecoveryPointRestoreMetadataOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRecoveryPointRestoreMetadataCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand(input, context);
  };
  GetRecoveryPointRestoreMetadataCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand(output, context);
  };
  return GetRecoveryPointRestoreMetadataCommand;
})($Command);
export { GetRecoveryPointRestoreMetadataCommand };
//# sourceMappingURL=GetRecoveryPointRestoreMetadataCommand.js.map
