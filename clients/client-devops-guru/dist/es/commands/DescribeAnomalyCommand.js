import { __extends } from "tslib";
import { DescribeAnomalyRequest, DescribeAnomalyResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAnomalyCommand, serializeAws_restJson1DescribeAnomalyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns details about an anomaly that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAnomalyCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAnomalyCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAnomalyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAnomalyCommand = /** @class */ (function (_super) {
    __extends(DescribeAnomalyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAnomalyCommand(input) {
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
    DescribeAnomalyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeAnomalyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAnomalyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAnomalyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAnomalyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAnomalyCommand(input, context);
    };
    DescribeAnomalyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAnomalyCommand(output, context);
    };
    return DescribeAnomalyCommand;
}($Command));
export { DescribeAnomalyCommand };
//# sourceMappingURL=DescribeAnomalyCommand.js.map