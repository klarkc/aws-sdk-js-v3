"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteMigrationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Complete the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CompleteMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CompleteMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CompleteMigrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteMigrationCommandInput} for command's `input` shape.
 * @see {@link CompleteMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CompleteMigrationCommand extends smithy_client_1.Command {
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
        const clientName = "ElastiCacheClient";
        const commandName = "CompleteMigrationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CompleteMigrationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CompleteMigrationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCompleteMigrationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCompleteMigrationCommand(output, context);
    }
}
exports.CompleteMigrationCommand = CompleteMigrationCommand;
//# sourceMappingURL=CompleteMigrationCommand.js.map