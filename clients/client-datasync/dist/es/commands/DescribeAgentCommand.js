import { __extends } from "tslib";
import { DescribeAgentRequest, DescribeAgentResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAgentCommand, serializeAws_json1_1DescribeAgentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata such as the name, the network interfaces, and the status (that is,
 *       whether the agent is running or not) for an agent. To specify which agent to describe, use the
 *       Amazon Resource Name (ARN) of the agent in your request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAgentCommand = /** @class */ (function (_super) {
    __extends(DescribeAgentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAgentCommand(input) {
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
    DescribeAgentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeAgentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAgentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAgentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAgentCommand(input, context);
    };
    DescribeAgentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAgentCommand(output, context);
    };
    return DescribeAgentCommand;
}($Command));
export { DescribeAgentCommand };
//# sourceMappingURL=DescribeAgentCommand.js.map