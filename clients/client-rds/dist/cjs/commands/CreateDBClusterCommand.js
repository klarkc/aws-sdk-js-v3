"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDBClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_sdk_rds_1 = require("@aws-sdk/middleware-sdk-rds");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new Amazon Aurora DB cluster.</p>
 *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
 *             cluster as a read replica of another DB cluster or Amazon RDS MySQL DB instance. For
 *             cross-region replication where the DB cluster identified by
 *                 <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the
 *                 <code>PreSignedUrl</code> parameter.</p>
 *
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDBClusterCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_sdk_rds_1.getCrossRegionPresignedUrlPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "CreateDBClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDBClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateDBClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateDBClusterCommand(output, context);
    }
}
exports.CreateDBClusterCommand = CreateDBClusterCommand;
//# sourceMappingURL=CreateDBClusterCommand.js.map