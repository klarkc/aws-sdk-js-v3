"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeProvisioningParametersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets information about the configuration required to provision the specified product using
 *          the specified provisioning artifact.</p>
 *          <p>If the output contains a TagOption key with an empty list of values, there is a
 *          TagOption conflict for that key. The end user cannot take action to fix the conflict, and
 *          launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>,
 *          do not include conflicted TagOption keys as tags, or this causes the error
 *          "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
 *          Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningParametersCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeProvisioningParametersCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeProvisioningParametersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeProvisioningParametersInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeProvisioningParametersOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeProvisioningParametersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeProvisioningParametersCommand(output, context);
    }
}
exports.DescribeProvisioningParametersCommand = DescribeProvisioningParametersCommand;
//# sourceMappingURL=DescribeProvisioningParametersCommand.js.map