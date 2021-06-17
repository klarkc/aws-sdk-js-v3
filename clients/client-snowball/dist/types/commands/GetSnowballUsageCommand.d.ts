import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetSnowballUsageRequest, GetSnowballUsageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSnowballUsageCommandInput extends GetSnowballUsageRequest {
}
export interface GetSnowballUsageCommandOutput extends GetSnowballUsageResult, __MetadataBearer {
}
/**
 * <p>Returns information about the Snow Family service limit for your account, and also the
 *       number of Snow devices your account has in use.</p>
 *
 *          <p>The default service limit for the number of Snow devices that you can have at one time is
 *       1. If you want to increase your service limit, contact AWS Support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSnowballUsageCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSnowballUsageCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetSnowballUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnowballUsageCommandInput} for command's `input` shape.
 * @see {@link GetSnowballUsageCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSnowballUsageCommand extends $Command<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetSnowballUsageCommandInput;
    constructor(input: GetSnowballUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput>;
    private serialize;
    private deserialize;
}
