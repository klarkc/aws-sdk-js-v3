import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateOpsMetadataRequest, CreateOpsMetadataResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOpsMetadataCommandInput extends CreateOpsMetadataRequest {
}
export interface CreateOpsMetadataCommandOutput extends CreateOpsMetadataResult, __MetadataBearer {
}
/**
 * <p>If you create a new application in Application Manager, Systems Manager calls this API action to specify
 *    information about the new application, including the application type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOpsMetadataCommand extends $Command<CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateOpsMetadataCommandInput;
    constructor(input: CreateOpsMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
