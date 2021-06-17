import { __extends } from "tslib";
import { CreateProvisioningClaimRequest, CreateProvisioningClaimResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateProvisioningClaimCommand, serializeAws_restJson1CreateProvisioningClaimCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a provisioning claim.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningClaimCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningClaimCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningClaimCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningClaimCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProvisioningClaimCommand = /** @class */ (function (_super) {
    __extends(CreateProvisioningClaimCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProvisioningClaimCommand(input) {
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
    CreateProvisioningClaimCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateProvisioningClaimCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProvisioningClaimRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProvisioningClaimResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProvisioningClaimCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProvisioningClaimCommand(input, context);
    };
    CreateProvisioningClaimCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProvisioningClaimCommand(output, context);
    };
    return CreateProvisioningClaimCommand;
}($Command));
export { CreateProvisioningClaimCommand };
//# sourceMappingURL=CreateProvisioningClaimCommand.js.map