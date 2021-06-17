import { __extends } from "tslib";
import { GetAssociatedIpv6PoolCidrsRequest, GetAssociatedIpv6PoolCidrsResult } from "../models/models_4";
import { deserializeAws_ec2GetAssociatedIpv6PoolCidrsCommand, serializeAws_ec2GetAssociatedIpv6PoolCidrsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedIpv6PoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedIpv6PoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetAssociatedIpv6PoolCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedIpv6PoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedIpv6PoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssociatedIpv6PoolCidrsCommand = /** @class */ (function (_super) {
    __extends(GetAssociatedIpv6PoolCidrsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssociatedIpv6PoolCidrsCommand(input) {
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
    GetAssociatedIpv6PoolCidrsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetAssociatedIpv6PoolCidrsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssociatedIpv6PoolCidrsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssociatedIpv6PoolCidrsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssociatedIpv6PoolCidrsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetAssociatedIpv6PoolCidrsCommand(input, context);
    };
    GetAssociatedIpv6PoolCidrsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetAssociatedIpv6PoolCidrsCommand(output, context);
    };
    return GetAssociatedIpv6PoolCidrsCommand;
}($Command));
export { GetAssociatedIpv6PoolCidrsCommand };
//# sourceMappingURL=GetAssociatedIpv6PoolCidrsCommand.js.map