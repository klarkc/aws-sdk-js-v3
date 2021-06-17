"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListServiceActionsForProvisioningArtifactCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListServiceActionsForProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceActionsForProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsForProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListServiceActionsForProvisioningArtifactCommand extends smithy_client_1.Command {
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
        const commandName = "ListServiceActionsForProvisioningArtifactCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListServiceActionsForProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListServiceActionsForProvisioningArtifactOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(output, context);
    }
}
exports.ListServiceActionsForProvisioningArtifactCommand = ListServiceActionsForProvisioningArtifactCommand;
//# sourceMappingURL=ListServiceActionsForProvisioningArtifactCommand.js.map