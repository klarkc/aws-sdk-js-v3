"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAWSDefaultServiceQuotasCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the default values for the quotas for the specified AWS service. A default value
 *       does not reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListAWSDefaultServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSDefaultServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListAWSDefaultServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListAWSDefaultServiceQuotasCommand extends smithy_client_1.Command {
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
        const commandName = "ListAWSDefaultServiceQuotasCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListAWSDefaultServiceQuotasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListAWSDefaultServiceQuotasResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(output, context);
    }
}
exports.ListAWSDefaultServiceQuotasCommand = ListAWSDefaultServiceQuotasCommand;
//# sourceMappingURL=ListAWSDefaultServiceQuotasCommand.js.map