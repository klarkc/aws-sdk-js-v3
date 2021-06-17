import { __extends } from "tslib";
import { DescribeSessionsRequest, DescribeSessionsResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeSessionsCommand, serializeAws_json1_1DescribeSessionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of all active sessions (both connected and disconnected) or terminated
 *    sessions from the past 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeSessionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeSessionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSessionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSessionsCommand = /** @class */ (function (_super) {
    __extends(DescribeSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSessionsCommand(input) {
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
    DescribeSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSessionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSessionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSessionsCommand(input, context);
    };
    DescribeSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSessionsCommand(output, context);
    };
    return DescribeSessionsCommand;
}($Command));
export { DescribeSessionsCommand };
//# sourceMappingURL=DescribeSessionsCommand.js.map