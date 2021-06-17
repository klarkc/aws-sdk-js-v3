import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstancePatchStatesRequest, DescribeInstancePatchStatesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstancePatchStatesCommandInput extends DescribeInstancePatchStatesRequest {
}
export interface DescribeInstancePatchStatesCommandOutput extends DescribeInstancePatchStatesResult, __MetadataBearer {
}
/**
 * <p>Retrieves the high-level patch state of one or more instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstancePatchStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancePatchStatesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstancePatchStatesCommand extends $Command<DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstancePatchStatesCommandInput;
    constructor(input: DescribeInstancePatchStatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput>;
    private serialize;
    private deserialize;
}
