import { __extends } from "tslib";
import { ListProtectedResourcesInput, ListProtectedResourcesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListProtectedResourcesCommand,
  serializeAws_restJson1ListProtectedResourcesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of resources successfully backed up by AWS Backup, including the time
 *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListProtectedResourcesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListProtectedResourcesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListProtectedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListProtectedResourcesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProtectedResourcesCommand = /** @class */ (function (_super) {
  __extends(ListProtectedResourcesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListProtectedResourcesCommand(input) {
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
  ListProtectedResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListProtectedResourcesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListProtectedResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProtectedResourcesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListProtectedResourcesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListProtectedResourcesCommand(input, context);
  };
  ListProtectedResourcesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListProtectedResourcesCommand(output, context);
  };
  return ListProtectedResourcesCommand;
})($Command);
export { ListProtectedResourcesCommand };
//# sourceMappingURL=ListProtectedResourcesCommand.js.map
