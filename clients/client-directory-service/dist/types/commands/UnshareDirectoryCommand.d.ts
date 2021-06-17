import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UnshareDirectoryRequest, UnshareDirectoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnshareDirectoryCommandInput extends UnshareDirectoryRequest {
}
export interface UnshareDirectoryCommandOutput extends UnshareDirectoryResult, __MetadataBearer {
}
/**
 * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UnshareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UnshareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UnshareDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnshareDirectoryCommandInput} for command's `input` shape.
 * @see {@link UnshareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnshareDirectoryCommand extends $Command<UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UnshareDirectoryCommandInput;
    constructor(input: UnshareDirectoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
