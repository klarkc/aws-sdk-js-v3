"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportAsProvisionedProductCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Requests the import of a resource as a Service Catalog provisioned product that is
 *          associated to a Service Catalog product and provisioning artifact. Once imported, all
 *          supported Service Catalog governance actions are supported on the provisioned
 *          product.</p>
 *          <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and
 *          non-root nested stacks are not supported.</p>
 *          <p>The CloudFormation stack must have one of the following statuses to be imported:
 *          <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>,
 *          <code>IMPORT_ROLLBACK_COMPLETE</code>.</p>
 *          <p>Import of the resource requires that the CloudFormation stack template matches the
 *          associated Service Catalog product provisioning artifact. </p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ImportAsProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ImportAsProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ImportAsProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportAsProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ImportAsProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ImportAsProvisionedProductCommand extends smithy_client_1.Command {
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
        const commandName = "ImportAsProvisionedProductCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ImportAsProvisionedProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ImportAsProvisionedProductOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ImportAsProvisionedProductCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ImportAsProvisionedProductCommand(output, context);
    }
}
exports.ImportAsProvisionedProductCommand = ImportAsProvisionedProductCommand;
//# sourceMappingURL=ImportAsProvisionedProductCommand.js.map