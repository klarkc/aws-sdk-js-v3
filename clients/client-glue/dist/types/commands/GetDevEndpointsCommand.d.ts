import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointsRequest, GetDevEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDevEndpointsCommandInput extends GetDevEndpointsRequest {
}
export interface GetDevEndpointsCommandOutput extends GetDevEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves all the development endpoints in this AWS account.</p>
 *          <note>
 *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address
 *       and the public IP address field is not populated. When you create a non-VPC development
 *       endpoint, AWS Glue returns only a public IP address.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDevEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link GetDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDevEndpointsCommand extends $Command<GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDevEndpointsCommandInput;
    constructor(input: GetDevEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
