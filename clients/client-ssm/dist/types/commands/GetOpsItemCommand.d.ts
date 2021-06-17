import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetOpsItemRequest, GetOpsItemResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOpsItemCommandInput extends GetOpsItemRequest {
}
export interface GetOpsItemCommandOutput extends GetOpsItemResponse, __MetadataBearer {
}
/**
 * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity
 *    and Access Management (IAM) to view information about an OpsItem. For more information, see
 *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsItemCommandInput} for command's `input` shape.
 * @see {@link GetOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOpsItemCommand extends $Command<GetOpsItemCommandInput, GetOpsItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetOpsItemCommandInput;
    constructor(input: GetOpsItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpsItemCommandInput, GetOpsItemCommandOutput>;
    private serialize;
    private deserialize;
}
