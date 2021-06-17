import { __extends } from "tslib";
import { BatchDisassociateServiceActionFromProvisioningArtifactInput, BatchDisassociateServiceActionFromProvisioningArtifactOutput, } from "../models/models_0";
import { deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand, serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDisassociateServiceActionFromProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(BatchDisassociateServiceActionFromProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDisassociateServiceActionFromProvisioningArtifactCommand(input) {
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
    BatchDisassociateServiceActionFromProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "BatchDisassociateServiceActionFromProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDisassociateServiceActionFromProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDisassociateServiceActionFromProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDisassociateServiceActionFromProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(input, context);
    };
    BatchDisassociateServiceActionFromProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(output, context);
    };
    return BatchDisassociateServiceActionFromProvisioningArtifactCommand;
}($Command));
export { BatchDisassociateServiceActionFromProvisioningArtifactCommand };
//# sourceMappingURL=BatchDisassociateServiceActionFromProvisioningArtifactCommand.js.map