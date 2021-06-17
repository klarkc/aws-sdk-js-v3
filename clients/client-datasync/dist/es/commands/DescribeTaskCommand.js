import { __extends } from "tslib";
import { DescribeTaskRequest, DescribeTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTaskCommand, serializeAws_json1_1DescribeTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTaskCommand = /** @class */ (function (_super) {
    __extends(DescribeTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTaskCommand(input) {
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
    DescribeTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTaskCommand(input, context);
    };
    DescribeTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTaskCommand(output, context);
    };
    return DescribeTaskCommand;
}($Command));
export { DescribeTaskCommand };
//# sourceMappingURL=DescribeTaskCommand.js.map