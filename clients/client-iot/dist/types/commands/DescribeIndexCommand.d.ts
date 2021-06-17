import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeIndexRequest, DescribeIndexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIndexCommandInput extends DescribeIndexRequest {
}
export interface DescribeIndexCommandOutput extends DescribeIndexResponse, __MetadataBearer {
}
/**
 * <p>Describes a search index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIndexCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIndexCommand extends $Command<DescribeIndexCommandInput, DescribeIndexCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeIndexCommandInput;
    constructor(input: DescribeIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIndexCommandInput, DescribeIndexCommandOutput>;
    private serialize;
    private deserialize;
}
