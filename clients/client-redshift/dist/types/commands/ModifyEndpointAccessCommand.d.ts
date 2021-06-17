import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EndpointAccess } from "../models/models_0";
import { ModifyEndpointAccessMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyEndpointAccessCommandInput extends ModifyEndpointAccessMessage {
}
export interface ModifyEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {
}
/**
 * <p>Modifies a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link ModifyEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyEndpointAccessCommand extends $Command<ModifyEndpointAccessCommandInput, ModifyEndpointAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyEndpointAccessCommandInput;
    constructor(input: ModifyEndpointAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEndpointAccessCommandInput, ModifyEndpointAccessCommandOutput>;
    private serialize;
    private deserialize;
}
