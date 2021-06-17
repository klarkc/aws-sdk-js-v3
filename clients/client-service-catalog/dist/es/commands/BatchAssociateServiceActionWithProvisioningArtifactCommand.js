import { __extends } from "tslib";
import { BatchAssociateServiceActionWithProvisioningArtifactInput, BatchAssociateServiceActionWithProvisioningArtifactOutput, } from "../models/models_0";
import { deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand, serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates multiple self-service actions with provisioning artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new BatchAssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAssociateServiceActionWithProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(BatchAssociateServiceActionWithProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchAssociateServiceActionWithProvisioningArtifactCommand(input) {
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
    BatchAssociateServiceActionWithProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "BatchAssociateServiceActionWithProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchAssociateServiceActionWithProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchAssociateServiceActionWithProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchAssociateServiceActionWithProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand(input, context);
    };
    BatchAssociateServiceActionWithProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand(output, context);
    };
    return BatchAssociateServiceActionWithProvisioningArtifactCommand;
}($Command));
export { BatchAssociateServiceActionWithProvisioningArtifactCommand };
//# sourceMappingURL=BatchAssociateServiceActionWithProvisioningArtifactCommand.js.map