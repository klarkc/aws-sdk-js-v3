"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSourceIdentifierFromSubscriptionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveSourceIdentifierFromSubscriptionCommand extends smithy_client_1.Command {
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
        const clientName = "RDSClient";
        const commandName = "RemoveSourceIdentifierFromSubscriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.RemoveSourceIdentifierFromSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.RemoveSourceIdentifierFromSubscriptionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(output, context);
    }
}
exports.RemoveSourceIdentifierFromSubscriptionCommand = RemoveSourceIdentifierFromSubscriptionCommand;
//# sourceMappingURL=RemoveSourceIdentifierFromSubscriptionCommand.js.map