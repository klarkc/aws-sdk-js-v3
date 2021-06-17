"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDBParameterGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new DB parameter group.</p>
 *          <p>
 *             A DB parameter group is initially created with the default parameters for the
 *             database engine used by the DB instance. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to
 *             associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate
 *             a new DB parameter group with a running DB instance, you need to reboot the DB
 *             instance without failover for the new DB parameter group and associated settings to take effect.
 *         </p>
 *          <important>
 *             <p>After you create a DB parameter group, you should wait at least 5 minutes
 *                 before creating your first DB instance that uses that DB parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the parameter
 *                 group is used as the default for a new DB instance. This is especially important for parameters
 *                 that are critical when creating the default database for a DB instance, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <i>DescribeDBParameters</i> command to verify
 *                 that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDBParameterGroupCommand extends smithy_client_1.Command {
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
        const commandName = "CreateDBParameterGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDBParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDBParameterGroupResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateDBParameterGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateDBParameterGroupCommand(output, context);
    }
}
exports.CreateDBParameterGroupCommand = CreateDBParameterGroupCommand;
//# sourceMappingURL=CreateDBParameterGroupCommand.js.map