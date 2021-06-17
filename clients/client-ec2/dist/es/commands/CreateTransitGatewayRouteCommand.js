import { __extends } from "tslib";
import { CreateTransitGatewayRouteRequest, CreateTransitGatewayRouteResult } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayRouteCommand, serializeAws_ec2CreateTransitGatewayRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a static route for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayRouteCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayRouteCommand(input) {
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
    CreateTransitGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayRouteCommand(input, context);
    };
    CreateTransitGatewayRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayRouteCommand(output, context);
    };
    return CreateTransitGatewayRouteCommand;
}($Command));
export { CreateTransitGatewayRouteCommand };
//# sourceMappingURL=CreateTransitGatewayRouteCommand.js.map