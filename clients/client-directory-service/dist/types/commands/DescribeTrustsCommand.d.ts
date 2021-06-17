import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeTrustsRequest, DescribeTrustsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTrustsCommandInput extends DescribeTrustsRequest {
}
export interface DescribeTrustsCommandOutput extends DescribeTrustsResult, __MetadataBearer {
}
/**
 * <p>Obtains information about the trust relationships for this account.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeTrustsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeTrustsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeTrustsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTrustsCommand extends $Command<DescribeTrustsCommandInput, DescribeTrustsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeTrustsCommandInput;
    constructor(input: DescribeTrustsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustsCommandInput, DescribeTrustsCommandOutput>;
    private serialize;
    private deserialize;
}
