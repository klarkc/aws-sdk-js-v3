import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AcceptSharedDirectoryRequest, AcceptSharedDirectoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptSharedDirectoryCommandInput extends AcceptSharedDirectoryRequest {
}
export interface AcceptSharedDirectoryCommandOutput extends AcceptSharedDirectoryResult, __MetadataBearer {
}
/**
 * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AcceptSharedDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AcceptSharedDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new AcceptSharedDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptSharedDirectoryCommandInput} for command's `input` shape.
 * @see {@link AcceptSharedDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptSharedDirectoryCommand extends $Command<AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: AcceptSharedDirectoryCommandInput;
    constructor(input: AcceptSharedDirectoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
