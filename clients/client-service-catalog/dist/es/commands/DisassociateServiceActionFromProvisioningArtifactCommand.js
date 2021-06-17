import { __extends } from "tslib";
import { DisassociateServiceActionFromProvisioningArtifactInput, DisassociateServiceActionFromProvisioningArtifactOutput, } from "../models/models_0";
import { deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand, serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified self-service action association from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateServiceActionFromProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(DisassociateServiceActionFromProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateServiceActionFromProvisioningArtifactCommand(input) {
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
    DisassociateServiceActionFromProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DisassociateServiceActionFromProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateServiceActionFromProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateServiceActionFromProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateServiceActionFromProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand(input, context);
    };
    DisassociateServiceActionFromProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand(output, context);
    };
    return DisassociateServiceActionFromProvisioningArtifactCommand;
}($Command));
export { DisassociateServiceActionFromProvisioningArtifactCommand };
//# sourceMappingURL=DisassociateServiceActionFromProvisioningArtifactCommand.js.map