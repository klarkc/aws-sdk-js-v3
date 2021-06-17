import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateAuthorityRequest, GetGroupCertificateAuthorityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGroupCertificateAuthorityCommandInput extends GetGroupCertificateAuthorityRequest {
}
export interface GetGroupCertificateAuthorityCommandOutput extends GetGroupCertificateAuthorityResponse, __MetadataBearer {
}
/**
 * Retreives the CA associated with a group. Returns the public key of the CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link GetGroupCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGroupCertificateAuthorityCommand extends $Command<GetGroupCertificateAuthorityCommandInput, GetGroupCertificateAuthorityCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetGroupCertificateAuthorityCommandInput;
    constructor(input: GetGroupCertificateAuthorityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupCertificateAuthorityCommandInput, GetGroupCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
