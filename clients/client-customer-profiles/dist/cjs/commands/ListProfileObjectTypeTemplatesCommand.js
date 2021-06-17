"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProfileObjectTypeTemplatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all of the template information for object types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectTypeTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectTypeTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypeTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListProfileObjectTypeTemplatesCommand extends smithy_client_1.Command {
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
        const clientName = "CustomerProfilesClient";
        const commandName = "ListProfileObjectTypeTemplatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListProfileObjectTypeTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListProfileObjectTypeTemplatesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListProfileObjectTypeTemplatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand(output, context);
    }
}
exports.ListProfileObjectTypeTemplatesCommand = ListProfileObjectTypeTemplatesCommand;
//# sourceMappingURL=ListProfileObjectTypeTemplatesCommand.js.map