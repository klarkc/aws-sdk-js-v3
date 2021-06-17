"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventSubscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p> Creates an AWS DMS event notification subscription. </p>
 *          <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of,
 *          provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and
 *          provide a list of event categories (<code>EventCategories</code>) for events you want to be
 *          notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>,
 *          such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier =
 *             my-replinstance</code>, you will be notified of all the replication instance events for
 *          the specified source. If you specify a <code>SourceType</code> but don't specify a
 *             <code>SourceIdentifier</code>, you receive notice of the events for that source type for
 *          all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor
 *             <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS
 *          sources belonging to your customer account.</p>
 *          <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
 *             Notifications</a> in the <i>AWS Database Migration Service User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateEventSubscriptionCommand extends smithy_client_1.Command {
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
        const commandName = "CreateEventSubscriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEventSubscriptionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateEventSubscriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateEventSubscriptionCommand(output, context);
    }
}
exports.CreateEventSubscriptionCommand = CreateEventSubscriptionCommand;
//# sourceMappingURL=CreateEventSubscriptionCommand.js.map