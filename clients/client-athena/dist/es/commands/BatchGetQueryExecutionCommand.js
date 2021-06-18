import { __extends } from "tslib";
import { BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetQueryExecutionCommand,
  serializeAws_json1_1BatchGetQueryExecutionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of a single query execution or a list of up to 50 query
 *             executions, which you provide as an array of query execution ID strings. Requires you to
 *             have access to the workgroup in which the queries ran. To get a list of query execution
 *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
 *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
 *             about named queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new BatchGetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link BatchGetQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetQueryExecutionCommand = /** @class */ (function (_super) {
  __extends(BatchGetQueryExecutionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchGetQueryExecutionCommand(input) {
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
  BatchGetQueryExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "BatchGetQueryExecutionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchGetQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetQueryExecutionOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchGetQueryExecutionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1BatchGetQueryExecutionCommand(input, context);
  };
  BatchGetQueryExecutionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1BatchGetQueryExecutionCommand(output, context);
  };
  return BatchGetQueryExecutionCommand;
})($Command);
export { BatchGetQueryExecutionCommand };
//# sourceMappingURL=BatchGetQueryExecutionCommand.js.map
