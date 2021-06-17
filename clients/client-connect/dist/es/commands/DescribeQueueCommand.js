import { __extends } from "tslib";
import { DescribeQueueRequest, DescribeQueueResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeQueueCommand, serializeAws_restJson1DescribeQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQueueCommandInput} for command's `input` shape.
 * @see {@link DescribeQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeQueueCommand = /** @class */ (function (_super) {
    __extends(DescribeQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeQueueCommand(input) {
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
    DescribeQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeQueueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeQueueCommand(input, context);
    };
    DescribeQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeQueueCommand(output, context);
    };
    return DescribeQueueCommand;
}($Command));
export { DescribeQueueCommand };
//# sourceMappingURL=DescribeQueueCommand.js.map