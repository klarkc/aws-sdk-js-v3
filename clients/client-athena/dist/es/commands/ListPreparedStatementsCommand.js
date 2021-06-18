import { __extends } from "tslib";
import { ListPreparedStatementsInput, ListPreparedStatementsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListPreparedStatementsCommand,
  serializeAws_json1_1ListPreparedStatementsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the prepared statements in the specfied workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListPreparedStatementsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListPreparedStatementsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListPreparedStatementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPreparedStatementsCommandInput} for command's `input` shape.
 * @see {@link ListPreparedStatementsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPreparedStatementsCommand = /** @class */ (function (_super) {
  __extends(ListPreparedStatementsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPreparedStatementsCommand(input) {
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
  ListPreparedStatementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListPreparedStatementsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPreparedStatementsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPreparedStatementsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPreparedStatementsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListPreparedStatementsCommand(input, context);
  };
  ListPreparedStatementsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListPreparedStatementsCommand(output, context);
  };
  return ListPreparedStatementsCommand;
})($Command);
export { ListPreparedStatementsCommand };
//# sourceMappingURL=ListPreparedStatementsCommand.js.map
