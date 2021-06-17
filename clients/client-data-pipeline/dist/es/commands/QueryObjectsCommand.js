import { __extends } from "tslib";
import { QueryObjectsInput, QueryObjectsOutput } from "../models/models_0";
import { deserializeAws_json1_1QueryObjectsCommand, serializeAws_json1_1QueryObjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Queries the specified pipeline for the names of objects that match the specified set of conditions.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.QueryObjects
 * Content-Length: 123
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "query":
 *   {"selectors":
 *     [
 *     ]
 *   },
 *  "sphere": "INSTANCE",
 *  "marker": "",
 *  "limit": 10}
 *
 *             </request>
 *
 *
 *             <response>
 *
 * x-amzn-RequestId: 14d704c1-0775-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 72
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"hasMoreResults": false,
 *  "ids":
 *   ["@SayHello_1_2012-09-25T17:00:00"]
 * }
 *          </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, QueryObjectsCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, QueryObjectsCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new QueryObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryObjectsCommandInput} for command's `input` shape.
 * @see {@link QueryObjectsCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var QueryObjectsCommand = /** @class */ (function (_super) {
    __extends(QueryObjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function QueryObjectsCommand(input) {
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
    QueryObjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "QueryObjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: QueryObjectsInput.filterSensitiveLog,
            outputFilterSensitiveLog: QueryObjectsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    QueryObjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1QueryObjectsCommand(input, context);
    };
    QueryObjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1QueryObjectsCommand(output, context);
    };
    return QueryObjectsCommand;
}($Command));
export { QueryObjectsCommand };
//# sourceMappingURL=QueryObjectsCommand.js.map