import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { UpdateDomainMetadataRequest, UpdateDomainMetadataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainMetadataCommandInput extends UpdateDomainMetadataRequest {
}
export interface UpdateDomainMetadataCommandOutput extends UpdateDomainMetadataResponse, __MetadataBearer {
}
/**
 * <p>Updates domain metadata, such as DisplayName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateDomainMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateDomainMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateDomainMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainMetadataCommand extends $Command<UpdateDomainMetadataCommandInput, UpdateDomainMetadataCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: UpdateDomainMetadataCommandInput;
    constructor(input: UpdateDomainMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainMetadataCommandInput, UpdateDomainMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
