import { __extends } from "tslib";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDataRepositoryTasksCommand, serializeAws_json1_1DescribeDataRepositoryTasksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of specific Amazon FSx for Lustre data repository tasks, if
 *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
 *             You can use filters to narrow the response to include just tasks for specific file systems,
 *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
 *             by your AWS account in the AWS Region of the endpoint that you're calling.</p>
 *
 *         <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
 *             parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon
 *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryTasksCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryTasksCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeDataRepositoryTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataRepositoryTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryTasksCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDataRepositoryTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeDataRepositoryTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDataRepositoryTasksCommand(input) {
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
    DescribeDataRepositoryTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "DescribeDataRepositoryTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDataRepositoryTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDataRepositoryTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDataRepositoryTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDataRepositoryTasksCommand(input, context);
    };
    DescribeDataRepositoryTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDataRepositoryTasksCommand(output, context);
    };
    return DescribeDataRepositoryTasksCommand;
}($Command));
export { DescribeDataRepositoryTasksCommand };
//# sourceMappingURL=DescribeDataRepositoryTasksCommand.js.map