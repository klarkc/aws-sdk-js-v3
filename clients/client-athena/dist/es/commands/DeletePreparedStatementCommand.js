import { __extends } from "tslib";
import { DeletePreparedStatementInput, DeletePreparedStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePreparedStatementCommand,
  serializeAws_json1_1DeletePreparedStatementCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the prepared statement with the specified name from the specified
 *             workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeletePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeletePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new DeletePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link DeletePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePreparedStatementCommand = /** @class */ (function (_super) {
  __extends(DeletePreparedStatementCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeletePreparedStatementCommand(input) {
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
  DeletePreparedStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "DeletePreparedStatementCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeletePreparedStatementInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePreparedStatementOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeletePreparedStatementCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeletePreparedStatementCommand(input, context);
  };
  DeletePreparedStatementCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeletePreparedStatementCommand(output, context);
  };
  return DeletePreparedStatementCommand;
})($Command);
export { DeletePreparedStatementCommand };
//# sourceMappingURL=DeletePreparedStatementCommand.js.map
