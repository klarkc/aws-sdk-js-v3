import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateTrustRequest, UpdateTrustResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTrustCommandInput extends UpdateTrustRequest {
}
export interface UpdateTrustCommandOutput extends UpdateTrustResult, __MetadataBearer {
}
/**
 * <p>Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrustCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTrustCommand extends $Command<UpdateTrustCommandInput, UpdateTrustCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateTrustCommandInput;
    constructor(input: UpdateTrustCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrustCommandInput, UpdateTrustCommandOutput>;
    private serialize;
    private deserialize;
}
