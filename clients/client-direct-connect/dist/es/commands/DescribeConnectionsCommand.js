import { __extends } from "tslib";
import { Connections, DescribeConnectionsRequest } from "../models/models_0";
import { deserializeAws_json1_1DescribeConnectionsCommand, serializeAws_json1_1DescribeConnectionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays the specified connection or all connections in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConnectionsCommand(input) {
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
    DescribeConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connections.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConnectionsCommand(input, context);
    };
    DescribeConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConnectionsCommand(output, context);
    };
    return DescribeConnectionsCommand;
}($Command));
export { DescribeConnectionsCommand };
//# sourceMappingURL=DescribeConnectionsCommand.js.map