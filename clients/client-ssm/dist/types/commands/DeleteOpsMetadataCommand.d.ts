import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteOpsMetadataRequest, DeleteOpsMetadataResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOpsMetadataCommandInput extends DeleteOpsMetadataRequest {
}
export interface DeleteOpsMetadataCommandOutput extends DeleteOpsMetadataResult, __MetadataBearer {
}
/**
 * <p>Delete OpsMetadata related to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOpsMetadataCommand extends $Command<DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteOpsMetadataCommandInput;
    constructor(input: DeleteOpsMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
