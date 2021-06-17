import { __extends } from "tslib";
import { DescribeFileSystemsRequest, DescribeFileSystemsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeFileSystemsCommand, serializeAws_json1_1DescribeFileSystemsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of specific Amazon FSx file systems, if a
 *                 <code>FileSystemIds</code> value is provided for that file system. Otherwise, it
 *             returns descriptions of all file systems owned by your AWS account in the AWS Region of
 *             the endpoint that you're calling.</p>
 *
 *         <p>When retrieving all file system descriptions, you can optionally specify the
 *                 <code>MaxResults</code> parameter to limit the number of descriptions in a response.
 *             If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code>
 *             value in the response. In this case, send a later request with the
 *                 <code>NextToken</code> request parameter set to the value of <code>NextToken</code>
 *             from the last response.</p>
 *
 *         <p>This action is used in an iterative process to retrieve a list of your file system
 *             descriptions. <code>DescribeFileSystems</code> is called first without a
 *                 <code>NextToken</code>value. Then the action continues to be called with the
 *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
 *             value until a response has no <code>NextToken</code>.</p>
 *
 *         <p>When using this action, keep the following in mind:</p>
 *         <ul>
 *             <li>
 *                 <p>The implementation might return fewer than <code>MaxResults</code> file
 *                     system descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *
 *             </li>
 *             <li>
 *                 <p>The order of file systems returned in the response of one
 *                         <code>DescribeFileSystems</code> call and the order of file systems returned
 *                     across the responses of a multicall iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeFileSystemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFileSystemsCommand = /** @class */ (function (_super) {
    __extends(DescribeFileSystemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFileSystemsCommand(input) {
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
    DescribeFileSystemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "DescribeFileSystemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFileSystemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFileSystemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFileSystemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFileSystemsCommand(input, context);
    };
    DescribeFileSystemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFileSystemsCommand(output, context);
    };
    return DescribeFileSystemsCommand;
}($Command));
export { DescribeFileSystemsCommand };
//# sourceMappingURL=DescribeFileSystemsCommand.js.map