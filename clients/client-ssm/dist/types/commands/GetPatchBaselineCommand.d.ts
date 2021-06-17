import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetPatchBaselineRequest, GetPatchBaselineResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPatchBaselineCommandInput extends GetPatchBaselineRequest {
}
export interface GetPatchBaselineCommandOutput extends GetPatchBaselineResult, __MetadataBearer {
}
/**
 * <p>Retrieves information about a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPatchBaselineCommand extends $Command<GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetPatchBaselineCommandInput;
    constructor(input: GetPatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
