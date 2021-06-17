import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListSecurityConfigurationsInput, ListSecurityConfigurationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSecurityConfigurationsCommandInput extends ListSecurityConfigurationsInput {
}
export interface ListSecurityConfigurationsCommandOutput extends ListSecurityConfigurationsOutput, __MetadataBearer {
}
/**
 * <p>Lists all the security configurations visible to this account, providing their creation
 *          dates and times, and their names. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple
 *          ListSecurityConfigurations calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSecurityConfigurationsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSecurityConfigurationsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSecurityConfigurationsCommand extends $Command<ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListSecurityConfigurationsCommandInput;
    constructor(input: ListSecurityConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
