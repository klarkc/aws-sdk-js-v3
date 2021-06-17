import { __extends } from "tslib";
import { GetTransitGatewayPrefixListReferencesRequest, GetTransitGatewayPrefixListReferencesResult, } from "../models/models_4";
import { deserializeAws_ec2GetTransitGatewayPrefixListReferencesCommand, serializeAws_ec2GetTransitGatewayPrefixListReferencesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the prefix list references in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPrefixListReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPrefixListReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayPrefixListReferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayPrefixListReferencesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPrefixListReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayPrefixListReferencesCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayPrefixListReferencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayPrefixListReferencesCommand(input) {
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
    GetTransitGatewayPrefixListReferencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetTransitGatewayPrefixListReferencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayPrefixListReferencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayPrefixListReferencesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayPrefixListReferencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetTransitGatewayPrefixListReferencesCommand(input, context);
    };
    GetTransitGatewayPrefixListReferencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetTransitGatewayPrefixListReferencesCommand(output, context);
    };
    return GetTransitGatewayPrefixListReferencesCommand;
}($Command));
export { GetTransitGatewayPrefixListReferencesCommand };
//# sourceMappingURL=GetTransitGatewayPrefixListReferencesCommand.js.map