"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventSubscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an Amazon Redshift event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteEventSubscriptionCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteEventSubscriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteEventSubscriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteEventSubscriptionCommand(output, context);
    }
}
exports.DeleteEventSubscriptionCommand = DeleteEventSubscriptionCommand;
//# sourceMappingURL=DeleteEventSubscriptionCommand.js.map