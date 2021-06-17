import { __extends } from "tslib";
import { DescribeResourceCollectionHealthRequest, DescribeResourceCollectionHealthResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeResourceCollectionHealthCommand, serializeAws_restJson1DescribeResourceCollectionHealthCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in
 *    		resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCollectionHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourceCollectionHealthCommand = /** @class */ (function (_super) {
    __extends(DescribeResourceCollectionHealthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourceCollectionHealthCommand(input) {
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
    DescribeResourceCollectionHealthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeResourceCollectionHealthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourceCollectionHealthRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourceCollectionHealthResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourceCollectionHealthCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeResourceCollectionHealthCommand(input, context);
    };
    DescribeResourceCollectionHealthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeResourceCollectionHealthCommand(output, context);
    };
    return DescribeResourceCollectionHealthCommand;
}($Command));
export { DescribeResourceCollectionHealthCommand };
//# sourceMappingURL=DescribeResourceCollectionHealthCommand.js.map