import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateOpsItemRequest, CreateOpsItemResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOpsItemCommandInput extends CreateOpsItemRequest {
}
export interface CreateOpsItemCommandOutput extends CreateOpsItemResponse, __MetadataBearer {
}
/**
 * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM)
 *    to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateOpsItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOpsItemCommandInput} for command's `input` shape.
 * @see {@link CreateOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOpsItemCommand extends $Command<CreateOpsItemCommandInput, CreateOpsItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateOpsItemCommandInput;
    constructor(input: CreateOpsItemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOpsItemCommandInput, CreateOpsItemCommandOutput>;
    private serialize;
    private deserialize;
}
