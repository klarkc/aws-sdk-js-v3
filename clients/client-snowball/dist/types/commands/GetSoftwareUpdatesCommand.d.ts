import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSoftwareUpdatesCommandInput extends GetSoftwareUpdatesRequest {
}
export interface GetSoftwareUpdatesCommandOutput extends GetSoftwareUpdatesResult, __MetadataBearer {
}
/**
 * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
 *       <code>JobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSoftwareUpdatesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSoftwareUpdatesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetSoftwareUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSoftwareUpdatesCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareUpdatesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSoftwareUpdatesCommand extends $Command<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetSoftwareUpdatesCommandInput;
    constructor(input: GetSoftwareUpdatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput>;
    private serialize;
    private deserialize;
}
