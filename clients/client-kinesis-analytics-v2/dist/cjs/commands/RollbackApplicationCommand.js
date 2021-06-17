"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollbackApplicationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Reverts the application to the previous running version. You can
 *             roll back an application if you suspect it is stuck in a transient status. </p>
 *         <p>You can roll back an application only if it is in the <code>UPDATING</code>
 *             or <code>AUTOSCALING</code> status.</p>
 *         <p>When you rollback an application, it loads state data from the last successful snapshot.
 *         If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p>
 *         <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, RollbackApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, RollbackApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new RollbackApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackApplicationCommandInput} for command's `input` shape.
 * @see {@link RollbackApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RollbackApplicationCommand extends smithy_client_1.Command {
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
        const clientName = "KinesisAnalyticsV2Client";
        const commandName = "RollbackApplicationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RollbackApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RollbackApplicationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RollbackApplicationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RollbackApplicationCommand(output, context);
    }
}
exports.RollbackApplicationCommand = RollbackApplicationCommand;
//# sourceMappingURL=RollbackApplicationCommand.js.map