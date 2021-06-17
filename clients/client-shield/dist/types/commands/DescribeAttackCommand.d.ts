import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeAttackRequest, DescribeAttackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAttackCommandInput extends DescribeAttackRequest {
}
export interface DescribeAttackCommandOutput extends DescribeAttackResponse, __MetadataBearer {
}
/**
 * <p>Describes the details of a DDoS attack. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeAttackCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeAttackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAttackCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAttackCommand extends $Command<DescribeAttackCommandInput, DescribeAttackCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeAttackCommandInput;
    constructor(input: DescribeAttackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAttackCommandInput, DescribeAttackCommandOutput>;
    private serialize;
    private deserialize;
}
