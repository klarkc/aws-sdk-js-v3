import { __extends } from "tslib";
import { CreateLocalGatewayRouteRequest, CreateLocalGatewayRouteResult } from "../models/models_1";
import { deserializeAws_ec2CreateLocalGatewayRouteCommand, serializeAws_ec2CreateLocalGatewayRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a static route for the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocalGatewayRouteCommand = /** @class */ (function (_super) {
    __extends(CreateLocalGatewayRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocalGatewayRouteCommand(input) {
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
    CreateLocalGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateLocalGatewayRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocalGatewayRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocalGatewayRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocalGatewayRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateLocalGatewayRouteCommand(input, context);
    };
    CreateLocalGatewayRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateLocalGatewayRouteCommand(output, context);
    };
    return CreateLocalGatewayRouteCommand;
}($Command));
export { CreateLocalGatewayRouteCommand };
//# sourceMappingURL=CreateLocalGatewayRouteCommand.js.map