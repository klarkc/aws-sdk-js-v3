import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeDomainControllersRequest, DescribeDomainControllersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDomainControllersCommandInput extends DescribeDomainControllersRequest {
}
export interface DescribeDomainControllersCommandOutput extends DescribeDomainControllersResult, __MetadataBearer {
}
/**
 * <p>Provides information about any domain controllers in your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeDomainControllersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainControllersCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDomainControllersCommand extends $Command<DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeDomainControllersCommandInput;
    constructor(input: DescribeDomainControllersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput>;
    private serialize;
    private deserialize;
}
