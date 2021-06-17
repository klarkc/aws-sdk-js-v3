"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAWSOrganizationsAccessStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Get the Access Status for AWS Organization portfolio share feature. This API can only be
 *          called by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetAWSOrganizationsAccessStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAWSOrganizationsAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetAWSOrganizationsAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetAWSOrganizationsAccessStatusCommand extends smithy_client_1.Command {
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
        const commandName = "GetAWSOrganizationsAccessStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAWSOrganizationsAccessStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAWSOrganizationsAccessStatusOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(output, context);
    }
}
exports.GetAWSOrganizationsAccessStatusCommand = GetAWSOrganizationsAccessStatusCommand;
//# sourceMappingURL=GetAWSOrganizationsAccessStatusCommand.js.map