"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutResourceAttributesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides identifying details of the resource being migrated so that it can be associated
 *          in the Application Discovery Service repository. This association occurs asynchronously
 *          after <code>PutResourceAttributes</code> returns.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>Keep in mind that subsequent calls to PutResourceAttributes will override
 *                   previously stored attributes. For example, if it is first called with a MAC
 *                   address, but later, it is desired to <i>add</i> an IP address, it
 *                   will then be required to call it with <i>both</i> the IP and MAC
 *                   addresses to prevent overriding the MAC address.</p>
 *                </li>
 *                <li>
 *                   <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList">
 *                         <code>ResourceAttributeList</code>
 *                      </a> parameter when specifying any
 *                   "VM" related value.</p>
 *                </li>
 *             </ul>
 *          </important>
 *
 *          <note>
 *             <p>Because this is an asynchronous call, it will always return 200, whether an
 *             association occurs or not. To confirm if an association was found based on the provided
 *             details, call <code>ListDiscoveredResources</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, PutResourceAttributesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, PutResourceAttributesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new PutResourceAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourceAttributesCommandInput} for command's `input` shape.
 * @see {@link PutResourceAttributesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutResourceAttributesCommand extends smithy_client_1.Command {
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
        const commandName = "PutResourceAttributesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutResourceAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutResourceAttributesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutResourceAttributesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutResourceAttributesCommand(output, context);
    }
}
exports.PutResourceAttributesCommand = PutResourceAttributesCommand;
//# sourceMappingURL=PutResourceAttributesCommand.js.map