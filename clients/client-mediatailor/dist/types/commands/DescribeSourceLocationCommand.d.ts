import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeSourceLocationRequest, DescribeSourceLocationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSourceLocationCommandInput extends DescribeSourceLocationRequest {
}
export interface DescribeSourceLocationCommandOutput extends DescribeSourceLocationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the properties of the requested source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSourceLocationCommand extends $Command<DescribeSourceLocationCommandInput, DescribeSourceLocationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DescribeSourceLocationCommandInput;
    constructor(input: DescribeSourceLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSourceLocationCommandInput, DescribeSourceLocationCommandOutput>;
    private serialize;
    private deserialize;
}
