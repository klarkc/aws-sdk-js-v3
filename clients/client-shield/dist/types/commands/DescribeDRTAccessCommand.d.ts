import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeDRTAccessRequest, DescribeDRTAccessResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDRTAccessCommandInput extends DescribeDRTAccessRequest {
}
export interface DescribeDRTAccessCommandOutput extends DescribeDRTAccessResponse, __MetadataBearer {
}
/**
 * <p>Returns the current role and list of Amazon S3 log buckets used by the DDoS Response Team (DRT) to access your AWS account while assisting with attack mitigation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeDRTAccessCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeDRTAccessCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeDRTAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDRTAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeDRTAccessCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDRTAccessCommand extends $Command<DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeDRTAccessCommandInput;
    constructor(input: DescribeDRTAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput>;
    private serialize;
    private deserialize;
}
