import { __extends } from "tslib";
import { DescribeParametersRequest, DescribeParametersResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeParametersCommand, serializeAws_json1_1DescribeParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about a parameter.</p>
 *          <note>
 *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *     in the request, the response includes information up to the limit specified. The number of items
 *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *     reaches an internal limit while processing the results, it stops the operation and returns the
 *     matching values up to that point and a <code>NextToken</code>. You can specify the
 *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeParametersCommand(input) {
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
    DescribeParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeParametersCommand(input, context);
    };
    DescribeParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeParametersCommand(output, context);
    };
    return DescribeParametersCommand;
}($Command));
export { DescribeParametersCommand };
//# sourceMappingURL=DescribeParametersCommand.js.map