import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteInputSecurityGroupRequest, DeleteInputSecurityGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInputSecurityGroupCommandInput extends DeleteInputSecurityGroupRequest {
}
export interface DeleteInputSecurityGroupCommandOutput extends DeleteInputSecurityGroupResponse, __MetadataBearer {
}
/**
 * Deletes an Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInputSecurityGroupCommand extends $Command<DeleteInputSecurityGroupCommandInput, DeleteInputSecurityGroupCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DeleteInputSecurityGroupCommandInput;
    constructor(input: DeleteInputSecurityGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInputSecurityGroupCommandInput, DeleteInputSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
