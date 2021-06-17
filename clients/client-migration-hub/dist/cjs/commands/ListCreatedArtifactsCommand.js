"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCreatedArtifactsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the created artifacts attached to a given migration task in an update stream. This
 *          API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Gets the list of the created artifacts while
 *                migration is taking place.</p>
 *             </li>
 *             <li>
 *                <p>Shows the artifacts created by the migration tool that was associated by the
 *                   <code>AssociateCreatedArtifact</code> API. </p>
 *             </li>
 *             <li>
 *                <p>Lists created artifacts in a paginated interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListCreatedArtifactsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListCreatedArtifactsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListCreatedArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCreatedArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListCreatedArtifactsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListCreatedArtifactsCommand extends smithy_client_1.Command {
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
        const commandName = "ListCreatedArtifactsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListCreatedArtifactsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListCreatedArtifactsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListCreatedArtifactsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListCreatedArtifactsCommand(output, context);
    }
}
exports.ListCreatedArtifactsCommand = ListCreatedArtifactsCommand;
//# sourceMappingURL=ListCreatedArtifactsCommand.js.map