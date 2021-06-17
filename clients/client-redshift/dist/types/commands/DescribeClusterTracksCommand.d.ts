import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterTracksMessage, TrackListMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterTracksCommandInput extends DescribeClusterTracksMessage {
}
export interface DescribeClusterTracksCommandOutput extends TrackListMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of all the available maintenance tracks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterTracksCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterTracksCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterTracksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterTracksCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterTracksCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterTracksCommand extends $Command<DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterTracksCommandInput;
    constructor(input: DescribeClusterTracksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput>;
    private serialize;
    private deserialize;
}
