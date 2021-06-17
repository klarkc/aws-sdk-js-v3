import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEndpointAccessCommandInput extends DeleteEndpointAccessMessage {
}
export interface DeleteEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {
}
/**
 * <p>Deletes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEndpointAccessCommand extends $Command<DeleteEndpointAccessCommandInput, DeleteEndpointAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteEndpointAccessCommandInput;
    constructor(input: DeleteEndpointAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointAccessCommandInput, DeleteEndpointAccessCommandOutput>;
    private serialize;
    private deserialize;
}
