import { __extends } from "tslib";
import { ListCopyJobsInput, ListCopyJobsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListCopyJobsCommand,
  serializeAws_restJson1ListCopyJobsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about your copy jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListCopyJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListCopyJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListCopyJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCopyJobsCommandInput} for command's `input` shape.
 * @see {@link ListCopyJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCopyJobsCommand = /** @class */ (function (_super) {
  __extends(ListCopyJobsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListCopyJobsCommand(input) {
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
  ListCopyJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListCopyJobsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListCopyJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListCopyJobsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListCopyJobsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListCopyJobsCommand(input, context);
  };
  ListCopyJobsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListCopyJobsCommand(output, context);
  };
  return ListCopyJobsCommand;
})($Command);
export { ListCopyJobsCommand };
//# sourceMappingURL=ListCopyJobsCommand.js.map
