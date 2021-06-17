"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRequestedServiceQuotaChangeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves information about the specified quota increase request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetRequestedServiceQuotaChangeCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetRequestedServiceQuotaChangeCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetRequestedServiceQuotaChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestedServiceQuotaChangeCommandInput} for command's `input` shape.
 * @see {@link GetRequestedServiceQuotaChangeCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetRequestedServiceQuotaChangeCommand extends smithy_client_1.Command {
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
        const commandName = "GetRequestedServiceQuotaChangeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRequestedServiceQuotaChangeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRequestedServiceQuotaChangeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetRequestedServiceQuotaChangeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand(output, context);
    }
}
exports.GetRequestedServiceQuotaChangeCommand = GetRequestedServiceQuotaChangeCommand;
//# sourceMappingURL=GetRequestedServiceQuotaChangeCommand.js.map