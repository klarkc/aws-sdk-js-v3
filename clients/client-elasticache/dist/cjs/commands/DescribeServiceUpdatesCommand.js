"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeServiceUpdatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns details of the service updates</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServiceUpdatesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServiceUpdatesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeServiceUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceUpdatesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceUpdatesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeServiceUpdatesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeServiceUpdatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeServiceUpdatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ServiceUpdatesMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeServiceUpdatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeServiceUpdatesCommand(output, context);
    }
}
exports.DescribeServiceUpdatesCommand = DescribeServiceUpdatesCommand;
//# sourceMappingURL=DescribeServiceUpdatesCommand.js.map