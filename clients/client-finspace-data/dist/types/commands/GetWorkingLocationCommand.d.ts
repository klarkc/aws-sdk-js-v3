import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetWorkingLocationRequest, GetWorkingLocationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWorkingLocationCommandInput extends GetWorkingLocationRequest {
}
export interface GetWorkingLocationCommandOutput extends GetWorkingLocationResponse, __MetadataBearer {
}
/**
 * <p>A temporary Amazon S3 location to copy your files from a source location to stage or use
 *       as a scratch space in Habanero notebook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetWorkingLocationCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetWorkingLocationCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetWorkingLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkingLocationCommandInput} for command's `input` shape.
 * @see {@link GetWorkingLocationCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorkingLocationCommand extends $Command<GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput, FinspaceDataClientResolvedConfig> {
    readonly input: GetWorkingLocationCommandInput;
    constructor(input: GetWorkingLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FinspaceDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput>;
    private serialize;
    private deserialize;
}
