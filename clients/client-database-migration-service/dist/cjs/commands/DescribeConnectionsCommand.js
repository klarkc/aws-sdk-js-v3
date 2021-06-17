"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeConnectionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the status of the connections that have been made between the replication
 *          instance and an endpoint. Connections are created when you test an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeConnectionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeConnectionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeConnectionsCommand extends smithy_client_1.Command {
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
        const clientName = "DatabaseMigrationServiceClient";
        const commandName = "DescribeConnectionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeConnectionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeConnectionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeConnectionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeConnectionsCommand(output, context);
    }
}
exports.DescribeConnectionsCommand = DescribeConnectionsCommand;
//# sourceMappingURL=DescribeConnectionsCommand.js.map