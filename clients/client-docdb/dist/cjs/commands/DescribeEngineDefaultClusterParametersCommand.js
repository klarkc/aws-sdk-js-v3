"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeEngineDefaultClusterParametersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the default engine and system parameter information for the cluster database
 *             engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeEngineDefaultClusterParametersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeEngineDefaultClusterParametersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeEngineDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngineDefaultClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeEngineDefaultClusterParametersCommand extends smithy_client_1.Command {
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
        const clientName = "DocDBClient";
        const commandName = "DescribeEngineDefaultClusterParametersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeEngineDefaultClusterParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeEngineDefaultClusterParametersResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeEngineDefaultClusterParametersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeEngineDefaultClusterParametersCommand(output, context);
    }
}
exports.DescribeEngineDefaultClusterParametersCommand = DescribeEngineDefaultClusterParametersCommand;
//# sourceMappingURL=DescribeEngineDefaultClusterParametersCommand.js.map