import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeVodSourceRequest, DescribeVodSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVodSourceCommandInput extends DescribeVodSourceRequest {
}
export interface DescribeVodSourceCommandOutput extends DescribeVodSourceResponse, __MetadataBearer {
}
/**
 * <p>Provides details about a specific VOD source in a specific source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVodSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVodSourceCommand extends $Command<DescribeVodSourceCommandInput, DescribeVodSourceCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DescribeVodSourceCommandInput;
    constructor(input: DescribeVodSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVodSourceCommandInput, DescribeVodSourceCommandOutput>;
    private serialize;
    private deserialize;
}
