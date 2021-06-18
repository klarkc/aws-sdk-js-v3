import { __extends } from "tslib";
import { GetQueryResultsInput, GetQueryResultsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetQueryResultsCommand,
  serializeAws_json1_1GetQueryResultsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Streams the results of a single query execution specified by
 *                 <code>QueryExecutionId</code> from the Athena query results location in Amazon S3.
 *             For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon
 *                 Athena User Guide</i>. This request does not execute the query but returns
 *             results. Use <a>StartQueryExecution</a> to run a query.</p>
 *         <p>To stream query results successfully, the IAM principal with permission to call
 *                 <code>GetQueryResults</code> also must have permissions to the Amazon S3
 *                 <code>GetObject</code> action for the Athena query results location.</p>
 *         <important>
 *             <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for
 *                 the query results location are able to retrieve query results from Amazon S3 even if
 *                 permission to the <code>GetQueryResults</code> action is denied. To restrict user or
 *                 role access, ensure that Amazon S3 permissions to the Athena query location are
 *                 denied.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryResultsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryResultsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQueryResultsCommand = /** @class */ (function (_super) {
  __extends(GetQueryResultsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetQueryResultsCommand(input) {
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
  GetQueryResultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetQueryResultsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetQueryResultsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetQueryResultsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetQueryResultsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetQueryResultsCommand(input, context);
  };
  GetQueryResultsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetQueryResultsCommand(output, context);
  };
  return GetQueryResultsCommand;
})($Command);
export { GetQueryResultsCommand };
//# sourceMappingURL=GetQueryResultsCommand.js.map
