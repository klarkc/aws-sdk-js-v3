"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartChangeSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation allows you to request changes for your entities. Within a single
 *             ChangeSet, you cannot start the same change type against the same entity multiple times.
 *             Additionally, when a ChangeSet is running, all the entities targeted by the different
 *             changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If
 *             you try to start a ChangeSet containing a change against an entity that is already
 *             locked, you will receive a <code>ResourceInUseException</code>.</p>
 *
 *         <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic, because it contains two changes to execute the same change
 *             type (<code>AddRevisions</code>) against the same entity
 *             (<code>entity-id@1)</code>.</p>
 *
 *         <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">
 *             Working with change sets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new StartChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeSetCommandInput} for command's `input` shape.
 * @see {@link StartChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartChangeSetCommand extends smithy_client_1.Command {
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
        const clientName = "MarketplaceCatalogClient";
        const commandName = "StartChangeSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartChangeSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartChangeSetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1StartChangeSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1StartChangeSetCommand(output, context);
    }
}
exports.StartChangeSetCommand = StartChangeSetCommand;
//# sourceMappingURL=StartChangeSetCommand.js.map