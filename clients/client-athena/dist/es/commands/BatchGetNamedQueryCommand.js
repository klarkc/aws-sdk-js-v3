import { __extends } from "tslib";
import { BatchGetNamedQueryInput, BatchGetNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetNamedQueryCommand,
  serializeAws_json1_1BatchGetNamedQueryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of a single named query or a list of up to 50 queries, which you
 *             provide as an array of query ID strings. Requires you to have access to the workgroup in
 *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
 *             list of named query IDs in the specified workgroup. If information could not be
 *             retrieved for a submitted query ID, information about the query ID submitted is listed
 *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
 *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
 *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
 *             query execution IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new BatchGetNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link BatchGetNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetNamedQueryCommand = /** @class */ (function (_super) {
  __extends(BatchGetNamedQueryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchGetNamedQueryCommand(input) {
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
  BatchGetNamedQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "BatchGetNamedQueryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchGetNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetNamedQueryOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchGetNamedQueryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1BatchGetNamedQueryCommand(input, context);
  };
  BatchGetNamedQueryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1BatchGetNamedQueryCommand(output, context);
  };
  return BatchGetNamedQueryCommand;
})($Command);
export { BatchGetNamedQueryCommand };
//# sourceMappingURL=BatchGetNamedQueryCommand.js.map
