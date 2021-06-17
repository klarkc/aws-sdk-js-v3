import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDefaultPatchBaselineCommandInput extends GetDefaultPatchBaselineRequest {
}
export interface GetDefaultPatchBaselineCommandOutput extends GetDefaultPatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default
 *    patch baselines. For example, you can create a default patch baseline for each operating
 *    system.</p>
 *          <p>If you do not specify an operating system value, the default patch baseline for Windows is
 *    returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDefaultPatchBaselineCommand extends $Command<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDefaultPatchBaselineCommandInput;
    constructor(input: GetDefaultPatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
