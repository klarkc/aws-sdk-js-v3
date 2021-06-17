import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeScheduleRequest, DescribeScheduleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScheduleCommandInput extends DescribeScheduleRequest {
}
export interface DescribeScheduleCommandOutput extends DescribeScheduleResponse, __MetadataBearer {
}
/**
 * Get a channel schedule
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScheduleCommand extends $Command<DescribeScheduleCommandInput, DescribeScheduleCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeScheduleCommandInput;
    constructor(input: DescribeScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduleCommandInput, DescribeScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
