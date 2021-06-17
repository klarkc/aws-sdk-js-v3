"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGlobalClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *         Creates an Aurora global database
 *         spread across multiple AWS Regions. The global database
 *         contains a single primary cluster with read-write capability,
 *         and a read-only secondary cluster that receives
 *         data from the primary cluster through high-speed replication
 *         performed by the Aurora storage subsystem.
 *       </p>
 *          <p>
 *         You can create a global database that is initially empty, and then
 *         add a primary cluster and a secondary cluster to it.
 *         Or you can specify an existing Aurora cluster during the create operation,
 *         and this cluster becomes the primary cluster of the global database.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateGlobalClusterCommand extends smithy_client_1.Command {
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
        const commandName = "CreateGlobalClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateGlobalClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateGlobalClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateGlobalClusterCommand(output, context);
    }
}
exports.CreateGlobalClusterCommand = CreateGlobalClusterCommand;
//# sourceMappingURL=CreateGlobalClusterCommand.js.map