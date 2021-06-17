"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRelationalDatabaseFromSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
 *          <p>You can create a new database from a snapshot in if something goes wrong with your
 *       original database, or to change it to a different plan, such as a high availability or
 *       standard plan.</p>
 *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
 *       access control via request tags and resource tags applied to the resource identified by
 *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateRelationalDatabaseFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateRelationalDatabaseFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateRelationalDatabaseFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelationalDatabaseFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateRelationalDatabaseFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateRelationalDatabaseFromSnapshotCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "CreateRelationalDatabaseFromSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateRelationalDatabaseFromSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateRelationalDatabaseFromSnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(output, context);
    }
}
exports.CreateRelationalDatabaseFromSnapshotCommand = CreateRelationalDatabaseFromSnapshotCommand;
//# sourceMappingURL=CreateRelationalDatabaseFromSnapshotCommand.js.map