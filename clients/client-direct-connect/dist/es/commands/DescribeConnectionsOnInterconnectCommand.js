import { __extends } from "tslib";
import { Connections, DescribeConnectionsOnInterconnectRequest } from "../models/models_0";
import { deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand, serializeAws_json1_1DescribeConnectionsOnInterconnectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p>
 *          <p>Lists the connections that have been provisioned on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionsOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionsOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeConnectionsOnInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionsOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectionsOnInterconnectCommand = /** @class */ (function (_super) {
    __extends(DescribeConnectionsOnInterconnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConnectionsOnInterconnectCommand(input) {
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
    DescribeConnectionsOnInterconnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeConnectionsOnInterconnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConnectionsOnInterconnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connections.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConnectionsOnInterconnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConnectionsOnInterconnectCommand(input, context);
    };
    DescribeConnectionsOnInterconnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand(output, context);
    };
    return DescribeConnectionsOnInterconnectCommand;
}($Command));
export { DescribeConnectionsOnInterconnectCommand };
//# sourceMappingURL=DescribeConnectionsOnInterconnectCommand.js.map