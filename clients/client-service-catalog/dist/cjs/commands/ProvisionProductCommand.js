"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisionProductCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provisions the specified product.</p>
 *          <p>A provisioned product is a resourced instance of a product.
 *          For example, provisioning a product based on a CloudFormation template launches a
 *          CloudFormation stack and its underlying resources.
 *          You can check the status of this request using <a>DescribeRecord</a>.</p>
 *          <p>If the request contains a tag key with an empty list of values, there is a
 *          tag conflict for that key. Do not include conflicted keys as tags, or this causes
 *          the error "Parameter validation failed: Missing required parameter in
 *          Tags[<i>N</i>]:<i>Value</i>".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ProvisionProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ProvisionProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ProvisionProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionProductCommandInput} for command's `input` shape.
 * @see {@link ProvisionProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ProvisionProductCommand extends smithy_client_1.Command {
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
        const commandName = "ProvisionProductCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ProvisionProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ProvisionProductOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ProvisionProductCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ProvisionProductCommand(output, context);
    }
}
exports.ProvisionProductCommand = ProvisionProductCommand;
//# sourceMappingURL=ProvisionProductCommand.js.map