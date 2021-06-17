"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyMigrationTaskStateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a
 *          migration task. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share
 *                the latest progress and status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MigrationTaskName</code> is used for addressing updates to the correct
 *                target.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProgressUpdateStream</code> is used for access control and to provide a
 *                namespace for each migration tool.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyMigrationTaskStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyMigrationTaskStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyMigrationTaskStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyMigrationTaskStateCommandInput} for command's `input` shape.
 * @see {@link NotifyMigrationTaskStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
class NotifyMigrationTaskStateCommand extends smithy_client_1.Command {
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
        const clientName = "MigrationHubClient";
        const commandName = "NotifyMigrationTaskStateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.NotifyMigrationTaskStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.NotifyMigrationTaskStateResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1NotifyMigrationTaskStateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1NotifyMigrationTaskStateCommand(output, context);
    }
}
exports.NotifyMigrationTaskStateCommand = NotifyMigrationTaskStateCommand;
//# sourceMappingURL=NotifyMigrationTaskStateCommand.js.map