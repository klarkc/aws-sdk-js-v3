"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebootDBInstanceCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>You might need to reboot your DB instance, usually for maintenance reasons.
 *         For example, if you make certain modifications,
 *         or if you change the DB parameter group associated with the DB instance,
 *         you must reboot the instance for the changes to take effect.
 *     </p>
 *
 *          <p>Rebooting a DB instance restarts the database engine service.
 *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.
 *     </p>
 *
 *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RebootDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RebootDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RebootDBInstanceCommand extends smithy_client_1.Command {
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
        const commandName = "RebootDBInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.RebootDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.RebootDBInstanceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRebootDBInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRebootDBInstanceCommand(output, context);
    }
}
exports.RebootDBInstanceCommand = RebootDBInstanceCommand;
//# sourceMappingURL=RebootDBInstanceCommand.js.map