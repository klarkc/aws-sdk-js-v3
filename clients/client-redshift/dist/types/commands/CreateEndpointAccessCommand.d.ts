import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEndpointAccessCommandInput extends CreateEndpointAccessMessage {
}
export interface CreateEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {
}
/**
 * <p>Creates a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEndpointAccessCommand extends $Command<CreateEndpointAccessCommandInput, CreateEndpointAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateEndpointAccessCommandInput;
    constructor(input: CreateEndpointAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEndpointAccessCommandInput, CreateEndpointAccessCommandOutput>;
    private serialize;
    private deserialize;
}
