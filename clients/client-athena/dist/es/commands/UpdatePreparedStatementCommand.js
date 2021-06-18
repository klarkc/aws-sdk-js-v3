import { __extends } from "tslib";
import { UpdatePreparedStatementInput, UpdatePreparedStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePreparedStatementCommand,
  serializeAws_json1_1UpdatePreparedStatementCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a prepared statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link UpdatePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePreparedStatementCommand = /** @class */ (function (_super) {
  __extends(UpdatePreparedStatementCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdatePreparedStatementCommand(input) {
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
  UpdatePreparedStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "UpdatePreparedStatementCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdatePreparedStatementInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePreparedStatementOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdatePreparedStatementCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdatePreparedStatementCommand(input, context);
  };
  UpdatePreparedStatementCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdatePreparedStatementCommand(output, context);
  };
  return UpdatePreparedStatementCommand;
})($Command);
export { UpdatePreparedStatementCommand };
//# sourceMappingURL=UpdatePreparedStatementCommand.js.map
