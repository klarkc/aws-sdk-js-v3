"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListServiceQuotaIncreaseRequestsInTemplateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the quota increase requests in the specified quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListServiceQuotaIncreaseRequestsInTemplateCommand extends smithy_client_1.Command {
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
        const commandName = "ListServiceQuotaIncreaseRequestsInTemplateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListServiceQuotaIncreaseRequestsInTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListServiceQuotaIncreaseRequestsInTemplateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(output, context);
    }
}
exports.ListServiceQuotaIncreaseRequestsInTemplateCommand = ListServiceQuotaIncreaseRequestsInTemplateCommand;
//# sourceMappingURL=ListServiceQuotaIncreaseRequestsInTemplateCommand.js.map