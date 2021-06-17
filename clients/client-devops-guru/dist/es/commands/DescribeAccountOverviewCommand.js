import { __extends } from "tslib";
import { DescribeAccountOverviewRequest, DescribeAccountOverviewResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAccountOverviewCommand, serializeAws_restJson1DescribeAccountOverviewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights
 *    		that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountOverviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountOverviewCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountOverviewCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountOverviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountOverviewCommand(input) {
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
    DescribeAccountOverviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeAccountOverviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountOverviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountOverviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountOverviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAccountOverviewCommand(input, context);
    };
    DescribeAccountOverviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAccountOverviewCommand(output, context);
    };
    return DescribeAccountOverviewCommand;
}($Command));
export { DescribeAccountOverviewCommand };
//# sourceMappingURL=DescribeAccountOverviewCommand.js.map