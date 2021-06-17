import { __extends } from "tslib";
import { CreateTransitGatewayPrefixListReferenceRequest, CreateTransitGatewayPrefixListReferenceResult, } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand, serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayPrefixListReferenceCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPrefixListReferenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayPrefixListReferenceCommand(input) {
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
    CreateTransitGatewayPrefixListReferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayPrefixListReferenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayPrefixListReferenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(input, context);
    };
    CreateTransitGatewayPrefixListReferenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(output, context);
    };
    return CreateTransitGatewayPrefixListReferenceCommand;
}($Command));
export { CreateTransitGatewayPrefixListReferenceCommand };
//# sourceMappingURL=CreateTransitGatewayPrefixListReferenceCommand.js.map