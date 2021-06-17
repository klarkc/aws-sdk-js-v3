import { __extends } from "tslib";
import { DescribeAccountHealthRequest, DescribeAccountHealthResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAccountHealthCommand, serializeAws_restJson1DescribeAccountHealthCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account.
 *    		Use these numbers to gauge the health of operations in your AWS account.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountHealthCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountHealthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountHealthCommand(input) {
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
    DescribeAccountHealthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeAccountHealthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountHealthRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountHealthResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountHealthCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAccountHealthCommand(input, context);
    };
    DescribeAccountHealthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAccountHealthCommand(output, context);
    };
    return DescribeAccountHealthCommand;
}($Command));
export { DescribeAccountHealthCommand };
//# sourceMappingURL=DescribeAccountHealthCommand.js.map