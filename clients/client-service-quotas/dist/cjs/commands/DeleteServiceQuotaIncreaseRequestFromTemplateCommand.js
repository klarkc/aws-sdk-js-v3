"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteServiceQuotaIncreaseRequestFromTemplateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the quota increase request for the specified quota from your quota request
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteServiceQuotaIncreaseRequestFromTemplateCommand extends smithy_client_1.Command {
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
        const clientName = "ServiceQuotasClient";
        const commandName = "DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteServiceQuotaIncreaseRequestFromTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteServiceQuotaIncreaseRequestFromTemplateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(output, context);
    }
}
exports.DeleteServiceQuotaIncreaseRequestFromTemplateCommand = DeleteServiceQuotaIncreaseRequestFromTemplateCommand;
//# sourceMappingURL=DeleteServiceQuotaIncreaseRequestFromTemplateCommand.js.map