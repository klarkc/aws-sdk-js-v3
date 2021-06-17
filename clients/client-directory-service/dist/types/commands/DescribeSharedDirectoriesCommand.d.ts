import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeSharedDirectoriesRequest, DescribeSharedDirectoriesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSharedDirectoriesCommandInput extends DescribeSharedDirectoriesRequest {
}
export interface DescribeSharedDirectoriesCommandOutput extends DescribeSharedDirectoriesResult, __MetadataBearer {
}
/**
 * <p>Returns the shared directories in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSharedDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSharedDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeSharedDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSharedDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSharedDirectoriesCommand extends $Command<DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeSharedDirectoriesCommandInput;
    constructor(input: DescribeSharedDirectoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput>;
    private serialize;
    private deserialize;
}
