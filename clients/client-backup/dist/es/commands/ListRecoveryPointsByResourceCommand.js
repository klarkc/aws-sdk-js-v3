import { __extends } from "tslib";
import { ListRecoveryPointsByResourceInput, ListRecoveryPointsByResourceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecoveryPointsByResourceCommand,
  serializeAws_restJson1ListRecoveryPointsByResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about recovery points of the type specified by a resource
 *          Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRecoveryPointsByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecoveryPointsByResourceCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByResourceCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecoveryPointsByResourceCommand = /** @class */ (function (_super) {
  __extends(ListRecoveryPointsByResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListRecoveryPointsByResourceCommand(input) {
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
  ListRecoveryPointsByResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListRecoveryPointsByResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListRecoveryPointsByResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsByResourceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListRecoveryPointsByResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListRecoveryPointsByResourceCommand(input, context);
  };
  ListRecoveryPointsByResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListRecoveryPointsByResourceCommand(output, context);
  };
  return ListRecoveryPointsByResourceCommand;
})($Command);
export { ListRecoveryPointsByResourceCommand };
//# sourceMappingURL=ListRecoveryPointsByResourceCommand.js.map
