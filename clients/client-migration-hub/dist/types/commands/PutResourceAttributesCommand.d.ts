import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { PutResourceAttributesRequest, PutResourceAttributesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResourceAttributesCommandInput extends PutResourceAttributesRequest {
}
export interface PutResourceAttributesCommandOutput extends PutResourceAttributesResult, __MetadataBearer {
}
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
export declare class PutResourceAttributesCommand extends $Command<PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: PutResourceAttributesCommandInput;
    constructor(input: PutResourceAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
