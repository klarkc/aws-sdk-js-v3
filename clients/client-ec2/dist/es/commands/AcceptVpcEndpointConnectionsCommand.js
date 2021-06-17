import { __extends } from "tslib";
import { AcceptVpcEndpointConnectionsRequest, AcceptVpcEndpointConnectionsResult } from "../models/models_0";
import { deserializeAws_ec2AcceptVpcEndpointConnectionsCommand, serializeAws_ec2AcceptVpcEndpointConnectionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts one or more interface VPC endpoint connection requests to your VPC endpoint
 *             service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptVpcEndpointConnectionsCommand = /** @class */ (function (_super) {
    __extends(AcceptVpcEndpointConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptVpcEndpointConnectionsCommand(input) {
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
    AcceptVpcEndpointConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AcceptVpcEndpointConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptVpcEndpointConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptVpcEndpointConnectionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptVpcEndpointConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AcceptVpcEndpointConnectionsCommand(input, context);
    };
    AcceptVpcEndpointConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AcceptVpcEndpointConnectionsCommand(output, context);
    };
    return AcceptVpcEndpointConnectionsCommand;
}($Command));
export { AcceptVpcEndpointConnectionsCommand };
//# sourceMappingURL=AcceptVpcEndpointConnectionsCommand.js.map