"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCacheParameterGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the parameters of a cache
 *             parameter group to the engine or system default value. You can reset specific parameters
 *             by submitting a list of parameter names. To reset the entire cache parameter group,
 *             specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ResetCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ResetCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ResetCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetCacheParameterGroupCommand extends smithy_client_1.Command {
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
        const commandName = "ResetCacheParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResetCacheParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CacheParameterGroupNameMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryResetCacheParameterGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryResetCacheParameterGroupCommand(output, context);
    }
}
exports.ResetCacheParameterGroupCommand = ResetCacheParameterGroupCommand;
//# sourceMappingURL=ResetCacheParameterGroupCommand.js.map