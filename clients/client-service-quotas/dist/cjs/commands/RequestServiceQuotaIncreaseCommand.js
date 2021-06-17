"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestServiceQuotaIncreaseCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Submits a quota increase request for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new RequestServiceQuotaIncreaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestServiceQuotaIncreaseCommandInput} for command's `input` shape.
 * @see {@link RequestServiceQuotaIncreaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RequestServiceQuotaIncreaseCommand extends smithy_client_1.Command {
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
        const commandName = "RequestServiceQuotaIncreaseCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RequestServiceQuotaIncreaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RequestServiceQuotaIncreaseResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RequestServiceQuotaIncreaseCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(output, context);
    }
}
exports.RequestServiceQuotaIncreaseCommand = RequestServiceQuotaIncreaseCommand;
//# sourceMappingURL=RequestServiceQuotaIncreaseCommand.js.map