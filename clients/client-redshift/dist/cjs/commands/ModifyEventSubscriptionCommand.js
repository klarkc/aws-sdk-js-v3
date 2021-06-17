"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyEventSubscriptionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyEventSubscriptionCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "ModifyEventSubscriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifyEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ModifyEventSubscriptionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyEventSubscriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyEventSubscriptionCommand(output, context);
    }
}
exports.ModifyEventSubscriptionCommand = ModifyEventSubscriptionCommand;
//# sourceMappingURL=ModifyEventSubscriptionCommand.js.map