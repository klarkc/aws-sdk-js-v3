import { __extends } from "tslib";
import { Connections, DescribeHostedConnectionsRequest } from "../models/models_0";
import { deserializeAws_json1_1DescribeHostedConnectionsCommand, serializeAws_json1_1DescribeHostedConnectionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the hosted connections that have been provisioned on the specified
 *       interconnect or link aggregation group (LAG).</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeHostedConnectionsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeHostedConnectionsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeHostedConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostedConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostedConnectionsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHostedConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeHostedConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHostedConnectionsCommand(input) {
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
    DescribeHostedConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeHostedConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHostedConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connections.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHostedConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeHostedConnectionsCommand(input, context);
    };
    DescribeHostedConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeHostedConnectionsCommand(output, context);
    };
    return DescribeHostedConnectionsCommand;
}($Command));
export { DescribeHostedConnectionsCommand };
//# sourceMappingURL=DescribeHostedConnectionsCommand.js.map