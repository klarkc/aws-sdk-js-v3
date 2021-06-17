import { __extends } from "tslib";
import { CreateCarrierGatewayRequest, CreateCarrierGatewayResult } from "../models/models_0";
import { deserializeAws_ec2CreateCarrierGatewayCommand, serializeAws_ec2CreateCarrierGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a carrier gateway.   For more information about carrier gateways, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#wavelength-carrier-gateway">Carrier gateways</a> in the <i>AWS Wavelength Developer
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCarrierGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateCarrierGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCarrierGatewayCommand(input) {
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
    CreateCarrierGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateCarrierGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCarrierGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCarrierGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCarrierGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateCarrierGatewayCommand(input, context);
    };
    CreateCarrierGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateCarrierGatewayCommand(output, context);
    };
    return CreateCarrierGatewayCommand;
}($Command));
export { CreateCarrierGatewayCommand };
//# sourceMappingURL=CreateCarrierGatewayCommand.js.map