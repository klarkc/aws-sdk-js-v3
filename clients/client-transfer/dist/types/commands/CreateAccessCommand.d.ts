import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { CreateAccessRequest, CreateAccessResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAccessCommandInput extends CreateAccessRequest {
}
export interface CreateAccessCommandOutput extends CreateAccessResponse, __MetadataBearer {
}
/**
 * <p>Used by administrators to choose which groups in the directory should have access to
 *       upload and download files over the enabled protocols using AWS Transfer Family. For example, a
 *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
 *       the ability to transfer files to the server. An administrator can use
 *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
 *       ability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessCommandInput} for command's `input` shape.
 * @see {@link CreateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAccessCommand extends $Command<CreateAccessCommandInput, CreateAccessCommandOutput, TransferClientResolvedConfig> {
    readonly input: CreateAccessCommandInput;
    constructor(input: CreateAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccessCommandInput, CreateAccessCommandOutput>;
    private serialize;
    private deserialize;
}
