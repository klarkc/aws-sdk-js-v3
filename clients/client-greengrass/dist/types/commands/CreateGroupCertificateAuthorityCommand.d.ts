import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupCertificateAuthorityRequest, CreateGroupCertificateAuthorityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGroupCertificateAuthorityCommandInput extends CreateGroupCertificateAuthorityRequest {
}
export interface CreateGroupCertificateAuthorityCommandOutput extends CreateGroupCertificateAuthorityResponse, __MetadataBearer {
}
/**
 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGroupCertificateAuthorityCommand extends $Command<CreateGroupCertificateAuthorityCommandInput, CreateGroupCertificateAuthorityCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateGroupCertificateAuthorityCommandInput;
    constructor(input: CreateGroupCertificateAuthorityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupCertificateAuthorityCommandInput, CreateGroupCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
