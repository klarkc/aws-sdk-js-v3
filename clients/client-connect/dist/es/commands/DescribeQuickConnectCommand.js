import { __extends } from "tslib";
import { DescribeQuickConnectRequest, DescribeQuickConnectResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeQuickConnectCommand, serializeAws_restJson1DescribeQuickConnectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeQuickConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuickConnectCommandInput} for command's `input` shape.
 * @see {@link DescribeQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeQuickConnectCommand = /** @class */ (function (_super) {
    __extends(DescribeQuickConnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeQuickConnectCommand(input) {
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
    DescribeQuickConnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeQuickConnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeQuickConnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeQuickConnectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeQuickConnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeQuickConnectCommand(input, context);
    };
    DescribeQuickConnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeQuickConnectCommand(output, context);
    };
    return DescribeQuickConnectCommand;
}($Command));
export { DescribeQuickConnectCommand };
//# sourceMappingURL=DescribeQuickConnectCommand.js.map