import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RemoveIpRoutesRequest, RemoveIpRoutesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveIpRoutesCommandInput extends RemoveIpRoutesRequest {
}
export interface RemoveIpRoutesCommandOutput extends RemoveIpRoutesResult, __MetadataBearer {
}
/**
 * <p>Removes IP address blocks from a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RemoveIpRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveIpRoutesCommandInput} for command's `input` shape.
 * @see {@link RemoveIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveIpRoutesCommand extends $Command<RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RemoveIpRoutesCommandInput;
    constructor(input: RemoveIpRoutesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
