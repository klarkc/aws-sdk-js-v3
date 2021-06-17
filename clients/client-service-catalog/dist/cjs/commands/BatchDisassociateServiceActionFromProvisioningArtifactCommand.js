"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDisassociateServiceActionFromProvisioningArtifactCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ServiceCatalogClient";
        const commandName = "BatchDisassociateServiceActionFromProvisioningArtifactCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchDisassociateServiceActionFromProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchDisassociateServiceActionFromProvisioningArtifactOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(output, context);
    }
}
exports.BatchDisassociateServiceActionFromProvisioningArtifactCommand = BatchDisassociateServiceActionFromProvisioningArtifactCommand;
//# sourceMappingURL=BatchDisassociateServiceActionFromProvisioningArtifactCommand.js.map