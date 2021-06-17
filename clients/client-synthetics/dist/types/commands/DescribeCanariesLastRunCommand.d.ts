import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { DescribeCanariesLastRunRequest, DescribeCanariesLastRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCanariesLastRunCommandInput extends DescribeCanariesLastRunRequest {
}
export interface DescribeCanariesLastRunCommandOutput extends DescribeCanariesLastRunResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesLastRunCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesLastRunCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeCanariesLastRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCanariesLastRunCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesLastRunCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCanariesLastRunCommand extends $Command<DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: DescribeCanariesLastRunCommandInput;
    constructor(input: DescribeCanariesLastRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput>;
    private serialize;
    private deserialize;
}
