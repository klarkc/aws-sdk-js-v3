import { __extends } from "tslib";
import { DescribeInsightRequest, DescribeInsightResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeInsightCommand, serializeAws_restJson1DescribeInsightCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns details about an insight that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInsightCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInsightCommand = /** @class */ (function (_super) {
    __extends(DescribeInsightCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInsightCommand(input) {
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
    DescribeInsightCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeInsightCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInsightResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInsightCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInsightCommand(input, context);
    };
    DescribeInsightCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInsightCommand(output, context);
    };
    return DescribeInsightCommand;
}($Command));
export { DescribeInsightCommand };
//# sourceMappingURL=DescribeInsightCommand.js.map