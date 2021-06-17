import { __extends } from "tslib";
import { DescribeTasksRequest, DescribeTasksResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTasksCommand, serializeAws_json1_1DescribeTasksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a specified task or tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTasksCommand(input) {
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
    DescribeTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DescribeTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTasksCommand(input, context);
    };
    DescribeTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTasksCommand(output, context);
    };
    return DescribeTasksCommand;
}($Command));
export { DescribeTasksCommand };
//# sourceMappingURL=DescribeTasksCommand.js.map