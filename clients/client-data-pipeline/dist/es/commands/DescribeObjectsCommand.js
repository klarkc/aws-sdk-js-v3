import { __extends } from "tslib";
import { DescribeObjectsInput, DescribeObjectsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeObjectsCommand, serializeAws_json1_1DescribeObjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of
 *             a set of fields that define the properties of the object.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribeObjects
 * Content-Length: 98
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "objectIds":
 *   ["Schedule"],
 *  "evaluateExpressions": true}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 4c18ea5d-0777-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 1488
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"hasMoreResults": false,
 *  "pipelineObjects":
 *   [
 *     {"fields":
 *       [
 *         {"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "@sphere",
 *          "stringValue": "COMPONENT"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"},
 *         {"key": "@version",
 *          "stringValue": "1"},
 *         {"key": "@status",
 *          "stringValue": "PENDING"},
 *         {"key": "@pipelineId",
 *          "stringValue": "df-06372391ZG65EXAMPLE"}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"}
 *   ]
 * }
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DescribeObjectsCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DescribeObjectsCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new DescribeObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeObjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectsCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeObjectsCommand = /** @class */ (function (_super) {
    __extends(DescribeObjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeObjectsCommand(input) {
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
    DescribeObjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "DescribeObjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeObjectsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeObjectsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeObjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeObjectsCommand(input, context);
    };
    DescribeObjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeObjectsCommand(output, context);
    };
    return DescribeObjectsCommand;
}($Command));
export { DescribeObjectsCommand };
//# sourceMappingURL=DescribeObjectsCommand.js.map