import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { PutGroupConfigurationInput, PutGroupConfigurationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutGroupConfigurationCommandInput extends PutGroupConfigurationInput {
}
export interface PutGroupConfigurationCommandOutput extends PutGroupConfigurationOutput, __MetadataBearer {
}
/**
 * <p>Attaches a service configuration to the specified group. This occurs asynchronously,
 *             and can take time to complete. You can use <a>GetGroupConfiguration</a> to
 *             check the status of the update.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:PutGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, PutGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, PutGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new PutGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutGroupConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutGroupConfigurationCommand extends $Command<PutGroupConfigurationCommandInput, PutGroupConfigurationCommandOutput, ResourceGroupsClientResolvedConfig> {
    readonly input: PutGroupConfigurationCommandInput;
    constructor(input: PutGroupConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutGroupConfigurationCommandInput, PutGroupConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
